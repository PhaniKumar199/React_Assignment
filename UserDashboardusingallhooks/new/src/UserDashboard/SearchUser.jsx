

import { useContext, useRef } from "react";
import dashBoard from "../UseContext/UseContext";
import './index.css';
const SearchUser = () => {
  const { setSearch } = useContext(dashBoard);
  const inputRef = useRef(null); 

  const handleSearchChange = () => {
    if (inputRef.current) {
      setSearch(inputRef.current.value); 
    }
  };

  return (
    <div>
      <div className="inputcenters">
        <input
          ref={inputRef} 
          type="text"
          placeholder="Search by status"
          onChange={handleSearchChange} 
        />
      </div>
    </div>
  );
};

export default SearchUser;
