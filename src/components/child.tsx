import { Text, View } from "react-native"
import SubChild from "./subChild"

const child = () => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', padding: 10}}> 
           <Text style={{backgroundColor: 'white', padding: 10}}>Child Component</Text>
            <SubChild/>
        </View>
    )
}

export default child