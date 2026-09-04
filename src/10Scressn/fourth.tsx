import { Button, Pressable, StyleSheet, Text, View } from "react-native"
import Fifth from "./fifth"


const Fourth = ({navigation}: {navigation: any}) => {
    return (
        <View style= {styles.fourth}> 
            <Text> Fourth Screen </Text>
            <Pressable onPress={()=>navigation.navigate('Fifth')} style={styles.button}>
                <Text> Go to Fifth </Text>
            </Pressable>
            <Fifth/>
        </View>
    )
}

export default Fourth

const styles = StyleSheet.create({
    fourth: {
        width: '90%',
        height: '90%',
        backgroundColor: 'lightpink',
        gap: 10,
        marginTop: 10,
    }, 
    button: {
        width: '50%',
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
    }
})