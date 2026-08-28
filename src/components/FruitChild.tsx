import { Button, View } from "react-native"
import { useContext } from "react";
import { FruitContext } from "./FruiteParent";


export const FruitChild = () => {

const { addApple, addBanana } = useContext(FruitContext)
   return (
       <View>
           <Button title="Add Apple" onPress={addApple}/>
           <Button title="Add Banana" onPress={addBanana} />
       </View>
   )
}
