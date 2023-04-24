import { View, Text, Image, TextInput, ScrollView} from 'react-native'
import React from 'react'

const Details = ({route}) => {
    const {name, phone, intro, overview, dev, link} = route.params;

  return (
    <ScrollView style={{ backgroundColor: '#D2E5BE' }}>
        <Image source={require ("./assets/Hamad International Airport.jpg")}/>
        <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 30, marginTop:10, textAlign:'center'}}>{route.params.name}</Text>
        <View>
        <Text style={{fontSize: 20, marginLeft: 20, fontWeight:'900'}}>I. Introduction</Text>
        <TextInput style={{
            height: 300,
            margin: 10,
            padding:10,
            borderColor:'blue',
            borderWidth: 0,
            justifyContent: 'center',
            fontSize:20,
            textAlign: 'justify'
        }} 
        editable={false}
        multiline={true}
        borderRightWidth={3}
        borderBottomWidth={3}
        >{route.params.intro}</TextInput>
        <Text style={{fontSize: 20, marginLeft: 20, fontWeight:'900'}}>II. Overview of the airport</Text>
        <TextInput style={{
            height: 350,
            margin: 10,
            padding:10,
            borderColor:'blue',
            borderWidth: 0,
            justifyContent: 'center',
            fontSize:20,
            textAlign: 'justify'
        }} 
        editable={false}
        multiline={true}
        borderLeftWidth={3}
        borderBottomWidth={3}
        >{route.params.overview}</TextInput>
        <Text style={{fontSize: 20, marginLeft: 20, fontWeight:'900'}}>III. Future developments</Text>
        <TextInput style={{
            height: 350,
            margin: 10,
            padding:10,
            borderColor:'blue',
            borderWidth: 0,
            justifyContent: 'center',
            fontSize:20,
            textAlign: 'justify'
        }} 
        editable={false}
        multiline={true}
        borderRightWidth={3}
        borderBottomWidth={3}
        >{route.params.overview}</TextInput>
        <Text style={{fontSize: 20, marginLeft: 20, fontWeight:'300', marginBottom: 10, color:'blue', textDecorationLine:'underline'}}>{route.params.link}</Text>
        </View>
      
    </ScrollView>
  )
}

export default Details