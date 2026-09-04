import { useState } from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Create = ({ data, setData } : { data: any[], setData: any }) => {
  const [itemName, setItemName] = useState('');
  const [stock, setStock] = useState('');
  const [isEdit, setEdit] = useState(false);
  const[editItemId, setEditItemId] = useState(null);
  const addItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stock,
      unit: 'kg',
    };
    setData([...data, newItem]);
    setItemName('');
    setStock('');
    setEdit(false);
  };
  const deleteItemHandler = id => {
    setData(data.filter(item => item.id !== id));
  };
  const editItemHandler = item => {
    setEdit(true);
    setItemName(item.name);
    setEditItemId(item.id);
  };
  const updateHandler = () => {
    setData(data.map(item => (
      item.id === editItemId ? { ...item, name: itemName, stock: stock}: item
    ))
    );
    setItemName('');
    setStock('');
    setEdit(false);

  }
  return (
    <View style={styles.container1}>
      <TextInput
        placeholder="Enter Item Name....."
        style={styles.input}
        value={itemName}
        onChangeText={item => setItemName(item)}
      />
      <TextInput
        placeholder="Enter Stock Amount....."
        style={styles.input}
        value={stock}
        onChangeText={item => setStock(item)}
      />
      <Pressable style={styles.button} onPress={() => isEdit ? updateHandler() :addItemHandler()}>
        <Text> {isEdit ? 'Edit Item' : 'Add Items'} </Text>
      </Pressable>

      <View style={{ marginTop: 20 }}>
        <View style={styles.container}>
          <Text style={styles.headingtext}>All Items </Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                {
                  backgroundColor:
                    item.stock < 10 ? 'lightcoral' : 'lightgreen',
                },
              ]}
            >
              <Text style={styles.itemText}> {item.name} </Text>
              <Text style={styles.itemText}> {item.stock} </Text>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}> Edit </Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}> Delete </Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};


export default Create;

const styles = StyleSheet.create({
  container1: {
    padding: '4%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headingtext: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 14,
  },
});
