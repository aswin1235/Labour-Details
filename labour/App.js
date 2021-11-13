import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, } from 'react-native';
// import {Searchbar} from 'react-native-paper';
import MyComponent from './screens/search';





const LABOUR = [
  {
    id: '1',
    name: 'labour 1',
    quantity:'Quantity - 25 ',
    unit:'hour',
    
  },
  {
    id: '2',
    name: 'labour 2',
    quantity:'Quantity - 25',
     unit:'hour',
  },
  {
    id: '3',
    name: 'labour 3',
    quantity:'Quantity - 25',
    unit:'hour',
  },
  {
    id: '4',
    name: 'labour 4',
    quantity:'Quantity - 25',
    unit:'hour',
  },
  {
    id: '5',
    name: 'labour 5',
    quantity:'Quantity - 25',
    unit:'hour',
  },
  {
    id: '6',
    name: 'labour 6',
    quantity:'Quantity - 25',
    unit:'hour',
  },
  {
    id: '7',
    name: 'labour 7',
    quantity:'Quantity - 25',
    unit:'hour',
  },
];

const Item = ({ name,quantity,unit }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.quantity}>{quantity}</Text>
    <Text style={styles.unit}>{unit}</Text>
  </View>
);

const App = ({navigation}) => {
  const renderItem = ({ item }) => (

    <Item name={item.name}quantity={item.quantity}unit={item.unit} />
   
    
  );

  return (
    <SafeAreaView style={styles.container}>
       <View>
      <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Labours</Text>
      {/* <MyComponent style={styles.comp}/> */}
      

    </View>
    <TouchableOpacity >
      <FlatList
        data={LABOUR}
      
        renderItem={renderItem}
        keyExtractor={item => item.id}
      
      />
      </TouchableOpacity>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // width:290,
    // height:70,
    backgroundColor: '#40e0d0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:15
  },
  name: {
    fontSize: 17,
  },
  quantity:{
    fontSize:13,

  },
  unit:{
    fontSize:12
  }

});

export default App;

