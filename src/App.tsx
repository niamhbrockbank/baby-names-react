import "./styles.css";
import NameSection from "./components/NameSection";
import SearchBar from "./components/SearchBar";
import {useState} from 'react'
import FavouriteSection from "./components/FavouriteSection";

function App(): JSX.Element {
  const [state, setState] = useState('')
  return (
    <>
      <link rel="stylesheet" href="../styles.css"></link>
      <SearchBar typedMessage={state} setTypedMessage={setState}/>
      <NameSection typedMessage={state}/>
    </>
  );
}

export default App;
