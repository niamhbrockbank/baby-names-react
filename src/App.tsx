import "./styles.css";
import NameSection from "./components/NameSection";
import SearchBar from "./components/SearchBar";

function App(): JSX.Element {

  return (
    <>
      <link rel="stylesheet" href="../styles.css"></link>
      <SearchBar />
      <NameSection />
    </>
  );
}

export default App;
