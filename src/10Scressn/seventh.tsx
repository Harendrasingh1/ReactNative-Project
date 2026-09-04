import { StyleSheet, Text, View } from "react-native"


const Seventh = () => {
    return (
        <View style={styles.seventh}>
            <Text>Seventh Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    seventh: {
        width: '80%',
        height: '80%',
        backgroundColor: 'gray',
        gap: 10,
        marginTop: 10,  
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Seventh