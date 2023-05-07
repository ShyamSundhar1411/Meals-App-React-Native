import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

export const SearchBarComponent = () => {
  const [searchQuery, setQueryState] = useState("");
  const onChangeQuery = (query) => setQueryState(query);
  return (
    <Searchbar
      placeholder="Search"
      onChange={onChangeQuery}
      value={searchQuery}
    />
  );
};
