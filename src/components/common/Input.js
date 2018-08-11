import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingTop: 15,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
