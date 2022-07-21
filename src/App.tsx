import babyNames from "./babyNamesData.json";

// function alphCompare(a: string, b:string){
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

function App(): JSX.Element {
  const nameList: string[] = []
  for (const baby of babyNames){
    nameList.push(baby.name)
  }

  nameList.sort()
  const nameListElements : JSX.Element[] = []
  for (const name of nameList){
    nameListElements.push(<li>{name}</li>)
  }

  return (
    <>   
    <ul>
      {nameListElements}
    </ul>
    </>

  )
}

export default App;
