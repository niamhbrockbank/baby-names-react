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
  searchTerm : string
}

export default function NameSection({ searchTerm }: SearchTerm): JSX.Element {
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
  const filteredNotFaveBabyNames = filteredBabyNames.filter(function (
    mainListName: BabyName
  ) {
    return !favourite.includes(mainListName);
  });

  //Convert to map
  const nameElementList: JSX.Element[] = [];
  for (const baby of filteredNotFaveBabyNames) {
    nameElementList.push(convertToElement(baby));
  }

  return (
    <>
      <FavouriteSection
        favNames={favourite}
        convertFunction={convertToElement}
      />
      <ul id="name-list">{nameElementList}</ul>
    </>
  );
}
