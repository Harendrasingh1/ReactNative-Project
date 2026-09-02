import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import Profile from "./profile"




const Home = ({navigation}: {navigation: any}) => {

    return (
        <View style={styles.homecontaner}>
            <Text style={styles.textStyle}>Home to Profile</Text>
            <Button title="Go to Profile" onPress={()=> navigation.navigate('Profile', {id:'1', name:'Harendra Singh', email:'harendra@example.com'})
            } />
        </View>
    )

}

export default Home

const styles = StyleSheet.create({
   homecontaner:
    {height: '100%', width: '100%', justifyContent:'space-around', alignItems:'center', flex:1},
    textStyle: {fontSize:20, fontWeight:'bold'}
    
})