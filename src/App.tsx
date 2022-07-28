import "./styles.css";
import NameSection from "./components/NameSection";
import SearchBar from "./components/SearchBar";
import {useState} from 'react'

function App(): JSX.Element {
  const [state, setState] = useState('')
  return (
    <>
      <link rel="stylesheet" href="../styles.css"></link>
      <SearchBar searchTerm={state} setSearchTerm={setState}/>
      <NameSection searchTerm={state}/>
    </>
  );
}

export default App;
