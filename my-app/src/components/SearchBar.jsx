

const SearchBar = ({search, setSearch}) => {
  return (
    <div className="w-full md:w-80 mb-10">
      <input
        type="text"
        placeholder="Search for job role..."
        className="w-full border border-gray-300 rounded-md text-sm md:text-base focus:outline-none px-4 py-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;