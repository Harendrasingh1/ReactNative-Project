import React from "react"
import { Alert, Button, Text, View } from "react-native"


const Search = () => {
    const onSearch = () => {
        console.warn('Search button pressed');
    }
    const alertforSearch = () => {
        Alert.alert(
            'Search button pressed 2',
            'search anthing',
        );
    }

    return (
        <View style={{ justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:30}}>Search</Text>
            <Button title='Press me' onPress={() => {
                onSearch();
                alertforSearch();
            }} />
        </View>
    )

}

export default Search

