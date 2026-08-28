import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Parent from './src/components/parent';
import FruitParent from './src/components/FruiteParent';


const App = () => {
    
    return (
        <ScrollView 
        contentContainerStyle={{ gap:10}}
        //horizontal
        style={styles.contaoiner}> 
           <Parent/>
           <FruitParent/>
            <View style={[styles.box1, {backgroundColor: 'white'}]}/>
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
            <View style={[styles.box3, {backgroundColor: 'pink'}]}/>
        </ScrollView>
    )
}

export default App;

const styles = StyleSheet.create({
    contaoiner:{
        flex:1,
        backgroundColor: 'black',
        padding: 50
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