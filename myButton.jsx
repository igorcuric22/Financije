import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title, textColor, backgroundColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor }]}>
    <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default CustomButton;