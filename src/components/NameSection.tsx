import babyNames from "../babyNamesData.json";

interface BabyName {
    id: number;
    name: string;
    sex: string; //ideally set to m or f
  }
  const convertToElement = (n: BabyName) => (
    <li key={n.id} className={n.sex}>
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

  export default function NameSection({typedMessage, setTypedMessage}:any): JSX.Element {
    babyNames.sort(compareAlph);
    
    // const filteredBabyNames = babyNames.filter(n => n.length > 5)

    const nameList: JSX.Element[] = [];
    for (const baby of babyNames) {
      nameList.push(convertToElement(baby));
    }
    // console.log(filteredBabyNames)
    return <ul id="name-list">{nameList}</ul>
  }