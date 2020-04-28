import React, { useState } from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, StatusBar,
  Dimensions, TouchableOpacity, FlatList, ToolbarAndroid } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


function Item({ item }) {
  return (
    <View style={styles.listItem}>
    <TouchableOpacity style={styles.opacity}><Image source={{uri:item.image}}  style={styles.img} /></TouchableOpacity>
      <Text style={styles.item}>{item.name}</Text>

    </View>
  );
}

export default function App() {


  const [neighbourList , setNeighbour] = useState([
    {name: 'Caroline ' , key: '0'},
    {name: 'Caroline  ' , image:'https://cdn.icon-icons.com/icons2/1364/PNG/512/maplocalization_89142.png',  key: '1'},
    {name: '+2213287104 ' , image:'https://cdn.icon-icons.com/icons2/614/PNG/512/phone-call-auricular-symbol-in-black_icon-icons.com_56483.png', key: '2'},
    {name: 'wwww.google.com ' , image:'https://cdn.icon-icons.com/icons2/140/PNG/256/link_20914.png', key: '3'},
		
		]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i.pravatar.cc/150?u=838433638',
        }}
        />



     
<StatusBar backgroundColor="blue"  />


<FlatList
	data={neighbourList}
	renderItem={({ item }) => Item({item})}
 
 	 />
        

      <Text
        placeholder='About me'
      
        style={styles.textAreaInput}
        > A propos signifie "d'une manière qui convient au lieu, au temps, aux circonstances".
        Exemple : Le journaliste était à la fois surpris et heureux de recevoir ces nouvelles informations qui arrivaient à propos. Il allait enfin pouvoir boucler son papier.
        Synonyme : au
        Traduction anglais : by teh way</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  tinyLogo: {
    width: 250,
    height: 250,
  
  },

  textAreaInput: {
    height:100,
    width: width - 40,
    marginTop: 30,
    borderColor: '#FF80AB', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  item: {
  	fontSize:18,
    justifyContent:'center',
    backgroundColor: 'white',
  	padding:15,
  	flex:1,
  	margin:5,

    
  },
  
  img:{
  	
  	width:30,
    height:30,
    borderRadius:30 ,
  },
  listItem:{
    alignItems:'center',
    marginTop:2,
  	backgroundColor:'white',
  	flex:1,
  	flexDirection:'row',
  	
  	height:110,
    margin: 2,
    
    
  },
  btn:{
    padding: 10,
    height: 25,
    justifyContent:'center',
  },

});
