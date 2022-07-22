import React, { useState } from "react";
import SearchBarStyles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

export const SearchBar = ({ placeholder, data, name }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      // console.log(value.desc);
      return value.desc.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  // const handleLocationOnClick = (event) => {
  //   const value = value.desc;
  // };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className={SearchBarStyles.search}>
      <div className={SearchBarStyles.searchInputs}>
        <div className={SearchBarStyles.searchIcon}>
          {filteredData.length === 0 ? (
            <AiOutlineSearch fill="#757575" size={27} />
          ) : (
            <AiOutlineClose
              fill="#757575"
              size={27}
              id="clearBtn"
              onClick={clearInput}
            />
          )}
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>

      {filteredData.length !== 0 && (
        <div className={SearchBarStyles.dataResult}>
          {filteredData.map((value) => {
            return (
              <>
                {name === "location" ? (
                  <p
                    onClick={() => {
                      setWordEntered(value.desc);
                      setFilteredData([]);
                    }}
                    className={SearchBarStyles.result}
                  >
                    {value.desc}
                  </p>
                ) : (
                  <Link to={`categories/${value.category}/${value.id}`}>
                    <p className={SearchBarStyles.result}>{value.desc}</p>
                  </Link>
                )}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};
