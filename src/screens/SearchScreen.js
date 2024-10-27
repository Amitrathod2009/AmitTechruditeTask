import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

const SearchScreen = () => {
  return (
    <View style={[styles.searchContainer]}>
      <Text  style={[styles.searchText]}>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;
