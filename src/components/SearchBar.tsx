interface SearchBarType {
  searchTerm: string;
  setSearchTerm: (newTerm: string) => void;
  setGenderFilter: (gender: string) => void;
  genderFilter: string;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  setGenderFilter,
  genderFilter,
}: SearchBarType): JSX.Element {
  return (
    <>
      <div id="search-section">
        <input
          value={searchTerm}
          id="search-bar"
          placeholder="Search for name..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        {genderFilter === "" && (
          <div>
            <button
              className="gender-selected"
              onClick={() => setGenderFilter("")}
            >
              all
            </button>
            <button className="m" onClick={() => setGenderFilter("male")}>
              male
              </button>
            <button className="f" onClick={() => setGenderFilter("female")}>
              female
            </button>
          </div>
        )}

        {genderFilter === "male" && (
          <div>
            <button onClick={() => setGenderFilter("")}>all</button>
            <button
              className="m gender-selected"
              onClick={() => setGenderFilter("male")}
            >
              male
            </button>
            <button className="f" onClick={() => setGenderFilter("female")}>
              female
            </button>
          </div>
        )}

        {genderFilter === "female" && (
          <div>
            <button onClick={() => setGenderFilter("")}>all</button>
            <button className="m" onClick={() => setGenderFilter("male")}>
              male
            </button>
            <button
              className="f gender-selected"
              onClick={() => setGenderFilter("female")}
            >
              female
            </button>
          </div>
        )}
      </div>
    </>
  );
}
