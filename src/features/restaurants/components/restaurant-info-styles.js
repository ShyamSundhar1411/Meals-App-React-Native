import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text_component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
export const RestaurantCard = styled(Card)`
  margin: ${(props) => props.theme.space[3]};
  background-color: white;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
export const Rating = styled.View`
  flex-direction: row;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Open = styled(SvgXml)`
  flex-direction: row;
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
