import { View, Text, Button, Alert, Pressable } from "react-native"
import { CounterContext } from "./parent";
import { useContext } from "react";


const showAlert = () => {
    Alert.alert(
      "Welcome",                  
      "Hello Harendra!",       
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]
    );
  };

const subChild = () => {
    const {count, incrementCount} = useContext(CounterContext);
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', padding: 10}}>
            <Text style={{backgroundColor: 'white', padding: 10}}>subChild Component</Text>
            <Text style={{backgroundColor: 'lightgray', padding: 10}}>Count: {count}</Text>
            <Button title="Increment" onPress={incrementCount} />
            <Pressable onPress={showAlert}>
                <Text style={{backgroundColor: 'lightblue', padding: 10}}>Show Alert</Text>
            </Pressable>
        </View>
    )
}

export default subChild