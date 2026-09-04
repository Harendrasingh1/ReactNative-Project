import { Button, Pressable, StyleSheet, Text, View } from "react-native"
import Third from "./third"
import { useContext } from "react"
import { HomeProvider } from "../../App"


const Second = ({navigation}: {navigation: any}) => {
    const {setCount, setNewText} = useContext(HomeProvider)
    return (
        <View style={styles.second}>
            <Text>Second Screen</Text>
            <Button title='Go to Home' onPress={() => { navigation.replace("Home") }} />
            <Pressable onPress={()=>navigation.navigate('Third')} style={styles.button}>
                <Text> Go to Third Page</Text>
            </Pressable>
            <Third navigation={navigation}/>
        </View>
    )
}

export default Second

const styles = StyleSheet.create({
    second: {
        width: '90%',
        height: '90%',
        backgroundColor: 'lightgreen',
        gap: 10,
        marginTop: 10,
        alignItems: 'center'
    }, 
    button: {
        width: '50%',
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
    }
})