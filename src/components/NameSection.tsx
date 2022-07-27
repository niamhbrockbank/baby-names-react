import babyNames from "../babyNamesData.json";
import FavouriteSection from "./FavouriteSection";
import { useState } from "react";

export interface BabyName {
    id: number;
    name: string;
    sex: string; //ideally set to m or f
  }

  const compareAlph = (a: BabyName, b: BabyName) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const removeName = (babyList : BabyName[], toRemove : BabyName) : BabyName[] => {
    const after = babyList.slice(babyList.indexOf(toRemove) + 1)
    const before = babyList.slice(0, babyList.indexOf(toRemove))
    return [...before, ...after]
  }

  export default function NameSection({typedMessage}:any): JSX.Element {
    const [favourite, setFavourite] = useState<BabyName[]>([])
    const isSearchRelevant = (n : BabyName): boolean => {
        const lowerCaseName = n.name.toLowerCase()
        return lowerCaseName.includes(typedMessage)
      }

    const convertToElement = (n: BabyName, favouriteNames : BabyName[]) => {
      const handleClick = () => {
        if (favouriteNames.includes(n)){
          setFavourite(removeName(favouriteNames, n))
        } else {
          setFavourite([...favouriteNames, n])
        }
      }
    
    return (
    <li 
      key={n.id} 
      className={n.sex}
      onClick={handleClick}
    >
      {n.name}
     </li>
    );
  }
    
    // const favouriteNames : BabyName[] = []
    babyNames.sort(compareAlph);
    const filteredBabyNames = babyNames.filter(isSearchRelevant)
    
    //Convert to map
    const nameElementList: JSX.Element[] = [];
    for (const baby of filteredBabyNames) {
      nameElementList.push(convertToElement(baby, favourite));
    }

    return (
      <>
      <FavouriteSection favNames= {favourite} convertFunction= {convertToElement} />      
      <ul id="name-list">{nameElementList}</ul>
      </>
    )
    
  }