import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function Home1({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>

        <Separator />

        <Text>Home screen</Text>

        <Separator />
     
       
      

      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'cyan',
    },
  });
