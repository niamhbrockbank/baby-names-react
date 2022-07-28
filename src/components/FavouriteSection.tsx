import { BabyName } from "./NameSection";

interface FavouriteSectionType {
    favNames : BabyName[],
    convertFunction: (n: BabyName) => JSX.Element
}

export default function FavouriteSection({
  favNames,
  convertFunction,
}: FavouriteSectionType): JSX.Element {
  //Re-render onClick
  const favNamesElements: JSX.Element[] = favNames.map(convertFunction);

  return (
    <>
      <p>Hi favourites</p>
      <ul>{favNamesElements}</ul>
    </>
  );
}
