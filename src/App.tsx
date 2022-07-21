import { greet } from "./utils/greet";
import babyNames from "./babyNamesData.json";

function App(): JSX.Element {
  const nameList: JSX.Element[] = []
  for (const baby of babyNames){
    nameList.push(<li>{baby.name}</li>)
  }
  return (
    <>   
    <ul>
      {nameList}
    </ul>
    <h1>{greet("World")}</h1>; 
    </>

  )
}

export default App;
