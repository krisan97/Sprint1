import React from 'react';
import { View } from 'react-native';

//component has been edited to accept style overrides from parent
//style={[oldStyle, newStyle]}
//oldStyle gets overwritten cause it's leftmost in the array

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {

    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'

  }
};


export { CardSection };
