import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

const App = () => {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
      
    setTaskItems([...taskItems, task])
    setTask(null);

  }
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
         setTaskItems(itemsCopy);


    }

  return (


    <ScrollView style={styles.container}>
      {/* Shoping List */}
      <View style={styles.shopingWrapper}>

        <Text style={styles.ShopingTitle}> Shoping list</Text>

        <KeyboardAvoidingView

          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Search'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()} >
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={styles.items}>

          {/*this is where the shoping list going to add*/}


          {
            taskItems.map((item, index) => {

              return(
                <TouchableOpacity key={index}  onPress={()=> completeTask(index)}>

                   
                       <Task text={item} />



                </TouchableOpacity>




              )
              
              
              

                
  })


          }


        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  shopingWrapper: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  ShopingTitle: {
    paddingVertical: 15,
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,

  },
  writeTaskWrapper: {


    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {

    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 62,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 61,
    borderColor: 'black',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  addText: {
    fontSize: 23,
    paddingVertical: 12,
    paddingHorizontal: 2,
  },
});
export default App;