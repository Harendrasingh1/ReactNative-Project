import React from "react"
import { Button, Text, View } from "react-native"
import Profile from "./profile"

type HomeProps = {
  navigation: any
}

const Home = ({navigation}: HomeProps) => {

    return (
        <View style={{height: '100%', width: '100%', justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Home to Profile</Text>
            <Button title="Go to Profile" onPress={()=> navigation.navigate('Profile', {id:'1', name:'Harendra Singh', email:'harendra@example.com'})
            } />
        </View>
    )

}

export default Home