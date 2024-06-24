import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
} from 'react-native';
import MyButton from './myButton';


const Separator = () => <View style={styles.separator} />;


export default function Kamate({ navigation }) {
  
  const [glavnica,onChangeGlavnica]=useState('');
  const [kamata,onChangeKamata]=useState('');
  const [rata,onChangeRata]=useState('');
  const [rezultat,setRezultat]=useState('');




    const izracunati=()=>
    {
        //Alert.alert("Igore opalio");
        let glavnicax=parseFloat(glavnica);
        let kamatax=parseFloat(kamata);
        let ratax=parseFloat(rata);
        
        let koeficijent=(1+kamatax/100);

        let racun=glavnicax*Math.pow(koeficijent,ratax);

        setRezultat(racun.toFixed(2));


    }


    return (
        <SafeAreaView style={styles.container}>
        <View>
          <Text style={{fontSize:15,color:'blue',textAlign:'center'}}>
            {glavnica} and {kamata} and {rata}
          </Text>
          <Text style={{fontSize:20,color:'red',textAlign:'center'}}>
            {rezultat}
          </Text>
          
          <Separator />
    
          <Text style={styles.title}>
              Unesi glavnicu
          </Text>
          
          <TextInput
            style={styles.input}
            onChangeText={onChangeGlavnica}
            value={glavnica}
            placeholder="Unesi glavnicu"
            keyboardType="numeric"
          />
    
          <Separator />
    
          <Text style={styles.title}>
              Unesi kamatu
          </Text>
          
          <TextInput
            style={styles.input}
            onChangeText={onChangeKamata}
            value={kamata}
            placeholder="Unesi kamatnu stopu"
            keyboardType="numeric"
          />
         
          <Separator />
          
          <Text style={styles.title}>
              Unesi broj rata
          </Text>
          
          <TextInput
            style={styles.input}
            onChangeText={onChangeRata}
            value={rata}
            placeholder="Unesi broj rata"
            keyboardType="numeric"
          />
          
          <Separator />
          

<MyButton
  onPress={izracunati}
  title="Stisni"
  textColor="white"
  backgroundColor="grey"
/>
      
       
          </View>
    
      </SafeAreaView>
    );
  }

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //marginHorizontal: 16,
    backgroundColor:'cyan',
  },
  title: {
    textAlign: 'center',
    marginVertical: 6,
  },
  title1: {
    textAlign: 'center',
    marginVertical: 6,
    fontSize:18,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 6,
    borderBottomColor: '#737373',
    //borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomWidth:6,
    marginHorizontal: 16,
  },
  marginax: {
    marginHorizontal: 26,
    backgroundColor:'red',
  },
});