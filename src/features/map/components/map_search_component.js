import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";
import styled from "styled-components/native";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 50px;
  width: 100%;
`;
export const SearchBarComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchBarContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        icon="map"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchBarContainer>
  );
};
