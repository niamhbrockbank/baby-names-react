import { BabyName } from "./NameSection";

interface FavouriteSectionType {
  favNames: BabyName[];
  convertFunction: (n: BabyName) => JSX.Element;
}

export default function FavouriteSection({
  favNames,
  convertFunction,
}: FavouriteSectionType): JSX.Element {
  //Re-render onClick
  const favNamesElements: JSX.Element[] = favNames.map(convertFunction);

  return (
    <>
      <div id="favourite-section">
        <h1>Favourites:</h1>
        <ul id="favourite-list">{favNamesElements}</ul>
      </div>
    </>
  );
}
