import { useState } from "react";
import {  Button, StyleSheet, Text, TextInput, View } from "react-native"

const HandLingUserInput = () => {
    const [text, setText] = useState('');
    const [handleSubmitText, setSubmitText] = useState('');
    const handleSubmit = () => {
        setSubmitText(text);
        setText('');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Please enter your name Here </Text>
            <TextInput style={styles.input}
             placeholder= 'Enter your name'
             value={text}
             onChangeText={setText}
            />
            <Button title="Submit" onPress={handleSubmit}></Button>
            {handleSubmitText ? (<Text> Result: {handleSubmitText} </Text>) : null}
        </View>
    )
}

export default HandLingUserInput;

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 20,
        gap: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }, 
    input: {
        width: '100%',
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5

    },
    button: {
        padding: 10,
    }

})