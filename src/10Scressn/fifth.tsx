import { StyleSheet, Text, View } from "react-native"
import Sixth from "./sixth"


const Fifth = () => {
    return (
        <View style={styles.fifth}>
            <Text> Fifth Screen </Text>
            <Sixth/>
        </View>    
    )
}

export default Fifth

const styles = StyleSheet.create({
    fifth: {
        width: '90%',
        height: '90%',
        backgroundColor: 'lightgray',
        gap: 10,
        marginTop: 10,
    }, 
   
})