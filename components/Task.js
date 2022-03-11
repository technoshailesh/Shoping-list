import React from 'react';
import {View ,Text,StyleSheet,} from 'react-native';
const Task =(props) => {
return (
    <View style={styles.item}>
    <View style={styles.itemLeft}>
    
      <Text style={styles.itemText}>{props.text}</Text>
    </View>
   
  </View>
)
}

const styles = StyleSheet.create({
item: {
  backgroundColor: '#FFF',
  padding: 15,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 20,
},
itemLeft: {
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap'
},


itemText: {
  
},

});
export default Task;