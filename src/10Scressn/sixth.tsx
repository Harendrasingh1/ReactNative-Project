import { useContext } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { HomeProvider } from "../../App"
import Seventh from "./seventh"




const Sixth = () => {
    const { count, newText, setCount, setNewText } = useContext(HomeProvider)
    return (
        <View style={styles.sixth}> 
            <Text style={styles.text}> Sixth Screen </Text>
            <Text style={styles.text}> {count} - {newText} </Text>
            <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
                <Text> Increment </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => setNewText(`Updated Text ${count}`)}>
                <Text> Update Text </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => setCount(count - 1)}>
                <Text> Decrement </Text>
            </Pressable>
            <Seventh/>
        </View>
    )
}

export default Sixth

const styles = StyleSheet.create({
    sixth: {
        width: '95%',
        height: '90%',
        backgroundColor: 'yellowgreen',
        gap: 10,
        marginTop: 10,
    }, 
    button: {
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
    }
})