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

  export default function NameSection({searchTerm}:any): JSX.Element {
    const [favourite, setFavourite] = useState<BabyName[]>([])
    const isSearchRelevant = (n : BabyName): boolean => {
        const lowerCaseName = n.name.toLowerCase()
        return lowerCaseName.includes(searchTerm)
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
  
    babyNames.sort(compareAlph);
    const filteredBabyNames = babyNames.filter(isSearchRelevant)
    
    //Filter according to whether in favourite list
    const filteredNotFaveBabyNames = filteredBabyNames.filter(function(mainListName : BabyName) {
      return !favourite.includes(mainListName)
    })

    //Convert to map
    const nameElementList: JSX.Element[] = [];
    for (const baby of filteredNotFaveBabyNames) {
      nameElementList.push(convertToElement(baby, favourite));
    }

    return (
      <>
      <FavouriteSection favNames= {favourite} convertFunction= {convertToElement} />      
      <ul id="name-list">{nameElementList}</ul>
      </>
    )
    
  }