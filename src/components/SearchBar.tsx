interface SearchBarType {
    searchTerm : string,
    setSearchTerm: (newTerm : string) => void
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarType): JSX.Element {
  // const [typedMessage, setTypedMessage] = useState('Search here...')

  return (
    <input
      value={searchTerm}
      id="search-bar"
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    />
  );
}
