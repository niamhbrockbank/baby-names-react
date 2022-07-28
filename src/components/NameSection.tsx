import babyNames from "../babyNamesData.json";
import FavouriteSection from "./FavouriteSection";
import { useState } from "react";
import removeName from "../utils/removeName";
import compareAlph from "../utils/compareAlph";

export interface BabyName {
  id: number;
  name: string;
  sex: string; //ideally set to m or f
}

interface SearchTerm {
  searchTerm: string;
  genderFilter : string
}

export default function NameSection({ searchTerm , genderFilter}: SearchTerm): JSX.Element {
  const [favourite, setFavourite] = useState<BabyName[]>([]);
  const isSearchRelevant = (n: BabyName): boolean => {
    const lowerCaseName = n.name.toLowerCase();
    return lowerCaseName.includes(searchTerm);
  };

  const convertToElement = (n: BabyName) => {
    const handleClick = () => {
      if (favourite.includes(n)) {
        setFavourite(removeName(favourite, n));
      } else {
        setFavourite([...favourite, n]);
      }
    };

    return (
      <li key={n.id} className={n.sex} onClick={handleClick}>
        {n.name}
      </li>
    );
  };

  babyNames.sort(compareAlph);
  const filteredBabyNames = babyNames.filter(isSearchRelevant);

  //Filter according to whether in favourite list
  const filteredMainNames = filteredBabyNames.filter(function (
    mainListName: BabyName
  ) {
    return !favourite.includes(mainListName);
  });

  const filteredFaveBabyNames = favourite.filter(isSearchRelevant)
  
  if (genderFilter === 'male'){
    return (
      <>
        <FavouriteSection
          favNames={filteredFaveBabyNames.filter((n) => n.sex.includes('m'))}
          convertFunction={convertToElement}
        />
        <ul id="name-list">{filteredMainNames.filter((n) => n.sex.includes('m')).map(convertToElement)}</ul>
      </>
    );
  } else if (genderFilter === 'female'){
    return (
      <>
        <FavouriteSection
          favNames={filteredFaveBabyNames.filter((n) => n.sex.includes('f'))}
          convertFunction={convertToElement}
        />
        <ul id="name-list">{filteredMainNames.filter((n) => n.sex.includes('f')).map(convertToElement)}</ul>
      </>
    );
  } else {
    return (
    <>
      <FavouriteSection
        favNames={filteredFaveBabyNames}
        convertFunction={convertToElement}
      />
      <ul id="name-list">{filteredMainNames.map(convertToElement)}</ul>
    </>
  );
  }
}
