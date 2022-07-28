interface SearchBarType {
  searchTerm: string;
  setSearchTerm: (newTerm: string) => void;
  setGenderFilter: (gender : string) => void
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  setGenderFilter
}: SearchBarType): JSX.Element {

  return (
    <>
    <input
      value={searchTerm}
      id="search-bar"
      placeholder='Search for name...'
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    />
    <button onClick={() => setGenderFilter('')}>♡ all</button>
    <button onClick={() => setGenderFilter('male')}>💚 m</button>
    <button onClick={() => setGenderFilter('female')}>💕 f</button>
    </>
  );
}
