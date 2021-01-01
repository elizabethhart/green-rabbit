import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DetailProps {
  route: any;
}

const Detail: FC<DetailProps> = ({ route }) => {
  return <View>{route.params.name && <Text>{route.params.name}</Text>}</View>;
};

export default Detail;

const styles = StyleSheet.create({});
