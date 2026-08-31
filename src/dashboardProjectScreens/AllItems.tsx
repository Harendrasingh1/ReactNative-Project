import { FlatList, StyleSheet, Text, View } from 'react-native';

const AllItems = ({ data }: { data: any[] }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headingtext}>Items</Text>
        <Text style={styles.headingtext}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, {backgroundColor: item.stock < 10 ? 'lightcoral' : 'lightgreen'}]}>
            <Text style={styles.itemText}> {item.name} </Text>
            <Text style={styles.itemText}>{item.stock} {item.unit} </Text>
          </View>
        )}
        contentContainerStyle={{gap: 10}}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
