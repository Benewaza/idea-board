const BoardControls = ({ emitModalVisibility, emitSortItems }) => (
  <div className="mb-4 flex flex-col sm:flex-row">
    <button
      type="button"
      onClick={() => emitModalVisibility(true)}
      className="border-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 border-black font-bold text-sm mb-3 sm:mb-0"
    >
      + New Idea
    </button>
    <div className="sm:ml-auto">
      <label className="text-xs font-semibold" htmlFor="filter">
        Filter by:{" "}
      </label>
      <select
        name="filter"
        id="filter"
        onChange={(e) => emitSortItems(e.target.value)}
        className="w-36 px-2 py-2 border-2 border-black rounded-none outline-0 font-bold text-sm text-black bg-gray-200"
      >
        <option value="creation">Creation date</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  </div>
);

export default BoardControls;
