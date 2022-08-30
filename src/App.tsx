import "./styles.css";
import NameSection from "./components/NameSection";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import TitleSection from "./components/TitleSection";

function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  return (
    <>
      <link rel="stylesheet" href="../styles.css"></link>
      <TitleSection />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setGenderFilter={setGenderFilter}
        genderFilter={genderFilter}
      />
      <NameSection searchTerm={searchTerm} genderFilter={genderFilter} />
    </>
  );
}

export default App;
