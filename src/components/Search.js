import React from "react";

function Search({setSearch, search}) {
function handleChange(e){
  setSearch (e.target.value)
}

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
