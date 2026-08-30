import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Parent from './src/components/parent';
import FruitParent from './src/components/FruiteParent';
import TestPage from './src/components/flatlist';
import HandLingUserInput from './src/components/handlingUserInput';

const App = () => {
    
    return (
        <View 
        // contentContainerStyle={{ gap:10}}
        //horizontal
        style={styles.contaoiner}> 
            <HandLingUserInput/>
           {/* <Parent/> */}
          {/* <TestPage/> */}
           {/* <FruitParent/> */}
            {/* <View style={[styles.box1, {backgroundColor: 'white'}]}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={styles.box3}/>
            <View style={styles.box1}/>
            <View style={styles.box2}/>
            <View style={[styles.box3, {backgroundColor: 'pink'}]}/> */}
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    contaoiner:{
        width: '100%',
        height: '100%',
        backgroundColor: '#dadada',
        padding: 40
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 25
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    box3: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow'
    }
})