import babyNames from "./babyNamesData.json";

const convertToElement = (n : string | number) => <li>{n}</li>

function App(): JSX.Element {
  const nameList: string[] = [];
  for (const baby of babyNames) {
    nameList.push(baby.name);
  }

  nameList.sort();
  const nameListElements = nameList.map(convertToElement)

  return (
    <>
      <ul>{nameListElements}</ul>
    </>
  );
}

export default App;
