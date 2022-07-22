import babyNames from "../babyNamesData.json";

interface BabyName {
    id: number;
    name: string;
    sex: string; //ideally set to m or f
  }
  const convertToElement = (n: BabyName) => (
    <li 
    key={n.id} 
    className={n.sex}
    >
      {n.name}
    </li>
  );

  const compareAlph = (a: BabyName, b: BabyName) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  export default function NameSection({typedMessage}:any): JSX.Element {
    const isSearchRelevant = (n : BabyName): boolean => {
        const lowerCaseName = n.name.toLowerCase()
        return lowerCaseName.includes(typedMessage)
      }
    
    babyNames.sort(compareAlph);
    const filteredBabyNames = babyNames.filter(isSearchRelevant)

    const nameElementList: JSX.Element[] = [];
    for (const baby of filteredBabyNames) {
      nameElementList.push(convertToElement(baby));
    }

    return <ul id="name-list">{nameElementList}</ul>
  }