import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input className='searchbar'
        type="text"
        placeholder="Add city"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className='btnadd' type="submit" value="Add" />
    </form>
  );
}
