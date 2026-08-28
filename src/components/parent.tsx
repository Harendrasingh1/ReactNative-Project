import { StyleSheet, Text, View } from "react-native"
import Child from "./child"
import { createContext, useState } from "react"


export const CounterContext = createContext();

const parent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }
    return (
        <CounterContext.Provider value={{count, incrementCount}}>
        <View style={styles.contaoiner}>
            <Text style={{backgroundColor: 'white', padding: 10}}>Parent Component </Text>
            <Child/>
        </View>
        </CounterContext.Provider>
    )
}

export default parent

const styles = StyleSheet.create({
    contaoiner:{
        height: 400,
        width: 400,
        backgroundColor: 'red',
        padding: 20,
    },
});