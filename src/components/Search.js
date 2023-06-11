import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../services/location/location.context";

export const SearchBarComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  return (
    <Searchbar
      placeholder="Search for a location"
      value={searchKeyword}
      onSubmitEditing={() => {
        search(searchKeyword);
      }}
      onChangeText={(text) => {
        console.log(text);
        setSearchKeyword(text);
      }}
    />
  );
};
