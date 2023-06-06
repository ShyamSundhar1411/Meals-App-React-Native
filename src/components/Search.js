import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../services/location/location.context";
export const SearchBarComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setQueryState] = useState(keyword);
  const onChangeQuery = (query) => setQueryState(query);
  return (
    <Searchbar
      placeholder="Search"
      onChange={onChangeQuery}
      value={searchQuery}
      onSubmitEditing={() => {
        search(searchQuery);
      }}
    />
  );
};
