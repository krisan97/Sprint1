import React, { Component } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './common';

class SOSScreen extends Component {
  onButtonPress() {
    Actions.homeScreen();
  }

  render() {
    const { itemContainerStyle } = styles;
    return (
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}
        source={require('./assets/Background.png')}
        resizeMode='cover'
      >
        <View
          style={{
            paddingTop: 30,
            paddingBottom: 30,
            backgroundColor: 'rgba(0,0,0,0.75)',
            flex: 1
          }}
        >

          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              padding: 20,
              paddingLeft: 50,
              paddingRight: 50,
              color: '#ffd154'
            }}
          >
            One more thing, name!
          </Text>
          <Text
            style={{
            padding: 15,
            paddingLeft: 50,
            paddingRight: 50,
            flexWrap: 'wrap',
            color: '#FFFFFF',
            fontSize: 20
          }}
          >
            If you have a gambling urge, press the SOS button on your
            screen to connect to a crisis line.
          </Text>

          <View style={itemContainerStyle}>
            <Image
              style={{ width: 150, height: 150 }}
              source={require('./assets/sos.png')}
            />
          </View>

          <View
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              borderColor: '#ddd',
              position: 'relative',
              paddingTop: 100
            }}
          >
            <Button style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)}>
              <Text>Got it</Text>
            </Button>
          </View>

        </View>
      </ImageBackground>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 22,
    paddingLeft: 15
  },
  itemContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 70,
    marginLeft: 6,
    marginRight: 6,
    alignItems: 'center'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    //backgroundColor: '#04BADE', nice blue color, changed to grey with #8a8c91
    backgroundColor: '#0099ff',
    borderRadius: 5,
    borderWidth: 1,
    //borderColor: '#04BADE',
    borderColor: '#909296',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default SOSScreen;
