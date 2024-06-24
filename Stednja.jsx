import React,{useState} from "react";
import { View, Button, Text, Alert , StyleSheet,TextInput} from 'react-native';
import MyButton from './myButton';

const Separator = () => <View style={styles.separator} />;

export default function Stednja({ navigation }) {
  const [glavnica,onChangeGlavnica]=useState('');
  const [kamata,onChangeKamata]=useState('');
  const [rata,onChangeRata]=useState('');
  const [rezultat,setRezultat]=useState('');

const izracunati=()=>
{
  Alert.alert("Hello !!!");

  let glavnicax=parseFloat(glavnica);
  let kamatax=parseFloat(kamata);
  let ratax=parseFloat(rata);

  let k=(1+kamatax/100);

  let rezultatx=(Math.pow(k,ratax)-1)*k/(k-1);

  setRezultat(rezultatx);



}

    return (
      <View style={styles.container}>
       

        <Text style={{fontSize:15,color:'blue',textAlign:'center'}}>{glavnica} and {kamata} and {rata}</Text>
        <Text style={{fontSize:20,color:'red',textAlign:'center'}} > and {rezultat}</Text>

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
        Unesi kamatu na stednju
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
        Unesi broj mjeseci
    </Text>
    
    <TextInput
      style={styles.input}
      onChangeText={onChangeRata}
      value={rata}
      placeholder="Unesi broj mjeseci"
      keyboardType="numeric"
    />
   
    <Separator />



        <MyButton
            onPress={izracunati}
            title="Stisni"
            textColor="white"
            backgroundColor="grey"
          />
        

        <View style={styles.separator} />

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //marginHorizontal: 16,
      backgroundColor:'cyan',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      //borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomWidth:6,
      marginHorizontal:8,
    },
    input: {
      height: 40,
      margin: 10,
      borderWidth: 1,
      padding: 10,
    },  
    title: {
      textAlign: 'center',
      marginVertical: 6,
    },
  });
