import "./styles.css";
import NameSection from "./components/NameSection";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState('')

  return (
    <>
      <link rel="stylesheet" href="../styles.css"></link>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setGenderFilter={setGenderFilter}/>
      <NameSection searchTerm={searchTerm} genderFilter={genderFilter} />
    </>
  );
}

export default App;
