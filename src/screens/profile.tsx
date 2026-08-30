import React from "react"
import { Button, Text, View } from "react-native"


const Profile = ({navigation, route}: {navigation: any, route: any}) => {
    console.log(route.params);
    const {id = '-', name = 'Guest', email = 'N/A'} = route.params ?? {};

    return (
        <View style={{height: '100%', width: '100%', justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Profile</Text>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Id: {id}</Text>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Name: {name}</Text>
            <Text style={{fontSize:16, fontWeight:'bold'}}>Email: {email}</Text>
            <Button title="Go to Search" onPress={()=> navigation.navigate('Search')}/>
            
        </View>
    )

}

export default Profile