import React from "react";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className={styles.search}>
      <FaSearch className={styles.faSearch} />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
