import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { finishIntro } from '../actions';
import { Button } from './common';

class IntroScreen extends Component {
  onButtonPress() {
    this.props.finishIntro();
  }

  render() {
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
            paddingTop: 150
            //flex: 1
          }}
        >
          <View
            style={{
              paddingTop: 30,
              paddingBottom: 30,
              padding: 50,
              backgroundColor: 'rgba(0,0,0,0.75)'
            }}
          >

            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                padding: 20,
                color: '#ffd154'
              }}
            >
              NAME
            </Text>
            <Text
              style={{
              padding: 15,
              flexWrap: 'wrap',
              color: '#FFFFFF',
              fontSize: 20
            }}
            >
              Get support and resources when you need them to manage your gambling
            </Text>

          </View>

          <View
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              borderColor: '#ddd',
              position: 'relative',
              paddingTop: 150
            }}
          >
            <Button onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
              <Text>Get Started</Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    //backgroundColor: '#04BADE', nice blue color, changed to grey with #8a8c91
    backgroundColor: '#0099ff',
    borderRadius: 5,
    borderWidth: 1,
    //borderColor: '#04BADE',
    borderColor: '#04BADE',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const mapStateToProps = ({ intro }) => {
  const { firstTimeOpen } = intro;

  return { firstTimeOpen };
};

export default connect(mapStateToProps, {
finishIntro
})(IntroScreen);
