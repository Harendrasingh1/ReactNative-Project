import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Parent from './src/components/parent';
import FruitParent from './src/components/FruiteParent';
import TestPage from './src/components/flatlist';
import HandLingUserInput from './src/components/handlingUserInput';
import Home from './src/screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './src/screens/profile';
import Search from './src/screens/search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/dashboardProjectScreens/HomeScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const  TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'
    screenOptions={{ 
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "",
        tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' },
        tabBarStyle: { height: 80 },
        }}>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
            tabBarIcon: () => (
                <AntDesign name="home" size={30}  />
            )
        }}
        />
      <Tab.Screen name="Profile" component={Profile}  options={{
            tabBarIcon: () => (
                <FontAwesome name="user-secret" size={30} color="black" />
            )
        }}/>
      <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon: () => (
                <Feather name="search" size={30} color="blue" />
            )
        }} />
    </Tab.Navigator>
  );
}

const Stacknavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search Page',
          headerStyle: { backgroundColor: 'orange' },
          headerTitleStyle: { color: 'white' },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <View>
        <HomeScreen/>
        {/* <TestPage/> */}
    </View>
    // <NavigationContainer>
    //   <Stacknavigation />
    //     {/* <TabNavigator/> */}
    // </NavigationContainer>
    // <View
    // // contentContainerStyle={{ gap:10}}
    // //horizontal
    // style={styles.contaoiner}>
    //  <Home/>
    //     {/* <HandLingUserInput/> */}
    //    {/* <Parent/> */}
    //   {/* <TestPage/> */}
    //    {/* <FruitParent/> */}
    //     {/* <View style={[styles.box1, {backgroundColor: 'white'}]}/>
    //<View>
    //     <View style={styles.box2}/>
    //     <View style={styles.box3}/>
    //     <View style={styles.box1}/>
    //     <View style={styles.box2}/>
    //     <View style={styles.box3}/>
    //     <View style={styles.box1}/>
    //     <View style={styles.box2}/>
    //     <View style={styles.box3}/>
    //     <View style={styles.box1}/>
    //     <View style={styles.box2}/>
    //     <View style={styles.box3}/>
    //     <View style={styles.box1}/>
    //     <View style={styles.box2}/>
    //     <View style={styles.box3}/>
    //     <View style={styles.box1}/>
    //     <View style={styles.box2}/>
    //     <View style={[styles.box3, {backgroundColor: 'pink'}]}/> */}
     //</View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  contaoiner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dadada',
    padding: 40,
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 25,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
});
