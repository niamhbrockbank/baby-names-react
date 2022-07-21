import babyNames from "./babyNamesData.json";
import './styles.css'

interface BabyName {
  id : number,
  name : string,
  sex : string //ideally set to m or f
}
const convertToElement = (n : BabyName) => <li key={n.id} className={n.sex}>{n.name}</li>

function App(): JSX.Element {
  const nameList: JSX.Element[] = [];
  for (const baby of babyNames) {
    nameList.push(convertToElement(baby));
  }

  // nameList.sort();
  // const nameListElements = nameList.map(convertToElement)

  return (
    <>
      <link rel="stylesheet" href="../styles.css"></link>
      <ul>{nameList}</ul>
    </>
  );
}

export default App;
