import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Fourth from "./fourth"
import { HomeProvider } from "../../App"
import { useContext } from "react"


const Third = ({navigation}: {navigation: any}) => {
    const { setCount, setNewText } = useContext(HomeProvider)
    return (
        <View style={styles.third}>
            <Text> Third Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Fourth')}>
                <Text>Go to Fourth</Text>
            </TouchableOpacity>
            <Fourth navigation={navigation}/>
        </View>
    )
}

export default Third

const styles = StyleSheet.create({
    third: {
        width: '90%',
        height: '90%',
        backgroundColor: 'lightyellow',
        gap: 10,
        marginTop: 10,
        alignItems: 'center',
    }, 
    button: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
    }
})