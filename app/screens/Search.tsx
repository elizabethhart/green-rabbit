import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface SearchProps {
  navigation: any; // TODO
}

const Search: FC<SearchProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Search</Text>
      <Button
        title="Search Result"
        onPress={() => navigation.push('SearchResult')}
      />
      <Button
        title="React Native School"
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Detail',
            params: { name: 'React Native School' }
          })
        }
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
