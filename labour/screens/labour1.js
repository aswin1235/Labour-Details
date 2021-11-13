import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, } from 'react-native';
import {Button,ProgressBar,Colors} from 'react-native-paper';





const LABOUR = [
  {
    id: '1',
    name: 'labour 1',
    description:'Loren ipsum dolor sirt amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labour et dolore magna aliqua',
    quantity:'Quantity - 25 hours',
    start:'Start Date - 12-07-2025',
    end:'End Date - 12-07-2025',
 
  },
 
];

const Item = ({ name,quantity,unit,description,start,end}) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.quantity}>{quantity}</Text>
    <Text style={styles.start}>{start}</Text>
    <Text style={styles.end}>{end}</Text>
    
  </View>
);

const App = ({navigation}) => {
  const renderItem = ({ item }) => (

    <Item name={item.name}quantity={item.quantity}unit={item.unit}description={item.description}start={item.start}end={item.end} />
     
  );

  return (
    <SafeAreaView style={styles.container}>
       <View>
    
      

    </View>
    <TouchableOpacity>
      <FlatList
        
        data={LABOUR}
      
        renderItem={renderItem}
        keyExtractor={item => item.id}
      
      />
      </TouchableOpacity>
      <Text style={{left:10}}>Progress</Text>
      <ProgressBar style={styles.pbar} progress={1.5} color={Colors.green800} />
     <Button style={styles.button} mode='contained' color='#40e0d0'>
      APPROVE
      </Button>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    justifyContent:'center'
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // width:290,
    // height:70,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:15
  },
  name: {
    fontSize: 17,
    fontWeight:'bold',
    color:'black'
  },
  quantity:{
    fontSize:13,
    padding:5,
    color:'black'
  },
  unit:{
    fontSize:12
  },
  description:{
     fontSize:15,
     padding:5,
     color:'black'
  },
  start:{
    fontSize:15,
    padding:5,
    color:'black'
  },
  end:{
    fontSize:15,
    padding:5,
    color:'black'
  },
  button:{
    width:150,
    left:90,
    top:50
  },
  pbar:{
    width:200,
    height:10,
    borderRadius:20,
    left:50
  }
});

export default App;