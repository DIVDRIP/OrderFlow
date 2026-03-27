const SearchBar = ({
  search,
  setSearch,
  filterStatus,
  setFilterStatus,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 rounded bg-slate-800 text-white w-full outline-none"
      />

      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="p-2 rounded bg-slate-800 text-white outline-none"
      >
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Delivered">Delivered</option>
      </select>

    </div>
  );
};

export default SearchBar;