import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Second from './second';
import React, { useContext } from 'react';
import { HomeProvider } from '../../App';

const First = ({navigation}: {navigation: any}) => {
    const {setCount} = useContext(HomeProvider)
  return (
    <ScrollView>
    <View style={styles.first}>
      <Text> First Screen </Text>
      <Button title="Go to Second Page" onPress={ () => navigation.navigate('Second') } />
      <Button title='Go to Home' onPress={() => { navigation.replace("Home") }} />
      <Second  navigation={navigation}
      />
    </View>
    </ScrollView>
  );
};

export default First;

const styles = StyleSheet.create({
  first: {
    width: '95%',
    height: '100%',
    backgroundColor: 'lightblue',
    gap: 10,
    marginTop: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'

  },
  textSyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
