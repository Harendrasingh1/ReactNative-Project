import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"
import AllItems from "./AllItems";
import LowStock from "./LowStock";
import Create from "./CreateItem";


const HomeScreen = () => {
    const [view, setView] = useState(0);
    const [data, setData] = useState([
    { id: 1, name: 'Item 1', stock: 10, unit: 'kg' },
    { id: 2, name: 'Item 2', stock: 5, unit: 'kg' },
    { id: 3, name: 'Item 3', stock: 0, unit: 'kg' },
    { id: 4, name: 'Item 4', stock: 20, unit: 'kg' },
    { id: 5, name: 'Item 5', stock: 15, unit: 'kg' },
    { id: 6, name: 'Item 6', stock: 2, unit: 'kg' },
    { id: 7, name: 'Item 7', stock: 0, unit: 'kg' },
    { id: 8, name: 'Item 8', stock: 8, unit: 'kg' },
    { id: 9, name: 'Item 9', stock: 12, unit: 'kg' },
    { id: 10, name: 'Item 10', stock: 0, unit: 'kg' },
    { id: 11, name: 'Item 11', stock: 7, unit: 'kg' },
    { id: 12, name: 'Item 12', stock: 3, unit: 'kg' },
    { id: 13, name: 'Item 13', stock: 0, unit: 'kg' },
    { id: 14, name: 'Item 14', stock: 18, unit: 'kg' },
    { id: 15, name: 'Item 15', stock: 0, unit: 'kg' },
    { id: 16, name: 'Item 16', stock: 6, unit: 'kg'},
    { id: 17, name: 'Item 17', stock: 11, unit: 'kg' },
    { id: 18, name: 'Item 18', stock: 4, unit: 'kg' },
    { id: 19, name: 'Item 19', stock: 0, unit: 'kg' },
    { id: 20, name: 'Item 20', stock: 9, unit: 'kg' },
    { id: 21, name: 'Item 21', stock: 14, unit: 'kg' },
    { id: 22, name: 'Item 22', stock: 0, unit: 'kg' },
    { id: 23, name: 'Item 23', stock: 5, unit: 'kg' },
    { id: 24, name: 'Item 24', stock: 16, unit: 'kg' },
    { id: 25, name: 'Item 25', stock: 0, unit: 'kg' },
    { id: 26, name: 'Item 26', stock: 8, unit: 'kg' },
    { id: 27, name: 'Item 27', stock: 13, unit: 'kg' },
    { id: 28, name: 'Item 28', stock: 0, unit: 'kg' },
    { id: 29, name: 'Item 29', stock: 11, unit: 'kg' },
    { id: 30, name: 'Item 30', stock: 0, unit: 'kg' },
]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Dashboard </Text>
            <View style={styles.buttonContainer}> 
                <Pressable style={[styles.button, view===0 ? {backgroundColor: 'lightgreen'} : null]} onPress={() => setView(0)}>
                    <Text style={styles.btnText}> All Items </Text>
                </Pressable>
                <Pressable style={[styles.button, view===1 ? {backgroundColor: 'lightgreen'} : null]} onPress={() => setView(1)}>
                    <Text style={styles.btnText}> Low Stock </Text>
                </Pressable>
                <Pressable style={[styles.button, view===2 ? {backgroundColor: 'lightgreen'} : null]} onPress={() => setView(2)}>
                    <Text style={styles.btnText}> Create </Text>
                </Pressable>
            </View>
            {view === 0 && <AllItems data={data} />}
            {view === 1 && <LowStock data={data.filter((item) => item.stock < 10)} />}
            {view === 2 && <Create data={data} setData={setData} />}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#ffffff',
        padding: "5%",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10
    },
    button:{
        paddingVertical: 5,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'green',
        paddingHorizontal: 10
    },
    btnText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15

    }
})