import React from "react";
import { 
  View, 
  Button, 
  Text, 
  Alert, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';


const Separator = () => <View style={styles.separator} />;

export default function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Bankovne kalkulacije</Text>

        <Separator />
        
        <TouchableOpacity style={[styles.buttonContainer, { backgroundColor:'red' }]} 
        onPress={() => navigation.navigate('Kamate')}>
        <Text style={styles.buttonText}>KAMATE</Text>
        </TouchableOpacity>  
        
        <Separator />

        <Separator />

        <TouchableOpacity style={[styles.buttonContainer, { backgroundColor:'red' }]} 
        onPress={() => navigation.navigate('Stednja')}>
        <Text style={styles.buttonText}>STEDNJA</Text>
        </TouchableOpacity>  

        <Separator />
        
        <TouchableOpacity style={[styles.buttonContainer, { backgroundColor:'red' }]} 
        onPress={() => navigation.navigate('Renta')}>
        <Text style={styles.buttonText}>RENTA</Text>
        </TouchableOpacity>  
        

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'cyan',
    },
      
    buttonContainer: {
      margin: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFFFFF',
      // You can add more font styling properties here
    },
    separator: {
      marginVertical: 8,
      marginHorizontal: 8,
      borderBottomColor: '#737373',
      borderBottomWidth:2,
    },
    header: {
      textAlign:"center",
      fontSize:20,
      fontWeight:'900',
      fontStyle:'italic',
    }
    }
  
  );
