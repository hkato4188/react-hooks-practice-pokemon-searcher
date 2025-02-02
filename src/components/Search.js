import React from "react";

function Search({ search, handleSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearch} value={search} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
