const SearchBar = ({ value, onChange }) => (
  <div className="rounded-[1.75rem] border border-champagne/15 bg-[#130f0c] px-4 py-3 shadow-soft">
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search curated jewelry..."
      className="w-full bg-transparent border-none text-sm text-ivory outline-none placeholder:text-ivory/50"
    />
  </div>
);

export default SearchBar;
