import React, { createContext, useContext, useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HomeProvider } from '../App';

const Home = ({ navigation }: { navigation: any }) => {
    let k = 0;
  const { count, newText, setCount } = useContext(HomeProvider);
  useEffect(() => {
    console.log('Home Mounted');

    return () => {
      console.log('Home Unmounted');
    };
  },);

  useEffect(() => {
    console.log('Home Updated');
  }, [count]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.homeText}> Home Page</Text>
        </View>
        <Text style={styles.containerText}> Result:
          {count} & {newText} in Home
        </Text>
        <Button
          title="Increment"
          onPress={() =>  {
            k = k+2;
          }
                // setCount(count + 1)}
          }
        />
        <Button
          title="Go to first"
          onPress={() => navigation.replace('First')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  box:{
    width: '100%',
    height: 100,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'gray',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',

  }, 
  homeText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Home;
