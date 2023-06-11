import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../services/location/location.context";

export const SearchBarComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, [search, searchKeyword]);
  return (
    <Searchbar
      placeholder="Search for a location"
      value={searchKeyword}
      onSubmitEditing={() => {
        search(searchKeyword);
      }}
      onChangeText={(text) => {
        setSearchKeyword(text);
      }}
    />
  );
};
