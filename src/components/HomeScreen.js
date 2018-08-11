import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, Alert, ImageBackground } from 'react-native';
import { Button } from './common';
//to change background color of whole page, put in backgroundColor: 'rgba(0,0,0,0.75)' in first View

class HomeScreen extends Component {
  onButtonPressResources() {
    Actions.resourceScreen();
  }
  onButtonPressCheck() {
  Alert.alert('Check in Page');
}
  onButtonPressSupport() {
    Alert.alert('Support Circle Page');
  }
  onButtonPressSettings() {
    Alert.alert('Settings Page');
  }
  onButtonPressSOS() {
    Alert.alert('SOS Page');
  }

  render() {
    return (
      <ImageBackground
        source={require('./Img/Background.png')}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >

          <Text
            style={{
            fontStyle: 'italic',
            color: 'white',
            textAlign: 'left'
          }}
          >Believe you can and you're halfway there</Text>
        <Text
          style={{
          paddingBottom: 10,
          color: '#a9a9a9',
          textAlign: 'left'
        }}
        >-Theodore Roosevelt</Text>

      <View style={styles.topContainerStyle}>
        <ImageBackground
          source={require('./Img/checkin.png')}
          style={styles.buttonContainerStyle}
        >
          <Button
            style={{
            backgroundColor: 'transparent',
            borderRadius: 0,
            borderWidth: 0,
            borderColor: 'transparent'
          }}
            onPress={this.onButtonPressCheck}
          />
        </ImageBackground>

        <ImageBackground
          source={require('./Img/support_circle.png')}
          style={styles.buttonContainerStyle}
        >
          <Button
            style={{
            backgroundColor: 'transparent',
            borderRadius: 0,
            borderWidth: 0,
            borderColor: 'transparent'
          }}
            onPress={this.onButtonPressSupport}
          />
        </ImageBackground>
      </View>

      <View style={styles.bottomContainerStyle}>
          <ImageBackground
            source={require('./Img/resources.png')}
            style={styles.buttonContainerStyle}
          >
            <Button
              style={{
              backgroundColor: 'transparent',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent'
            }}
              onPress={this.onButtonPressResources}
            />
          </ImageBackground>

          <ImageBackground
            source={require('./Img/settings.png')}
            style={styles.buttonContainerStyle}
          >
            <Button
              style={{
              backgroundColor: 'transparent',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent'
            }}
              onPress={this.onButtonPressSettings}
            />
          </ImageBackground>
        </View>

        <View style={styles.navigationContainerStyle}>
          <ImageBackground
            source={require('./Img/CheckIn_Icon.png')}
            style={styles.buttonNavContainerStyle}
          >
            <Button
              style={{
              backgroundColor: 'transparent',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent'
              }}
              onPress={this.onButtonPressCheck}
            />
          </ImageBackground>
          <ImageBackground
            source={require('./Img/Resources_Icon.png')}
            style={styles.buttonNavContainerStyle}
          >
            <Button
              style={{
              backgroundColor: 'transparent',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent'
              }}
              onPress={this.onButtonPressResources}
            />

          </ImageBackground>
            <ImageBackground
              source={require('./Img/sos.png')}
              style={styles.buttonNavContainerStyle}
            >
            <Button
              style={{
              backgroundColor: 'transparent',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent'
              }}
              onPress={this.onButtonPressSOS}
            />
          </ImageBackground>
          <ImageBackground
            source={require('./Img/SupportCircle_Icon.png')}
            style={styles.buttonNavContainerStyle}
          >
            <Button
              style={{
              backgroundColor: 'transparent',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent'
              }}
              onPress={this.onButtonPressSupport}
            />
          </ImageBackground>
          <ImageBackground
            source={require('./Img/Settings_Icon.png')}
            style={styles.buttonNavContainerStyle}
          >
            <Button
              style={{
              backgroundColor: 'transparent',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent'
              }}
              onPress={this.onButtonPressSettings}
            />
          </ImageBackground>
          </View>

      </ImageBackground>
    );
  }
}

const styles = {
  topContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15
  },
  bottomContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonContainerStyle: {
  flex: 1,
  height: 200,
  alignItems: 'center',
  justifyContent: 'center'
},
buttonNavContainerStyle: {
flex: 1,
height: 100,
alignItems: 'center',
justifyContent: 'center'
},
navigationContainerStyle: {
  flexDirection: 'row',
  backgroundColor: '#38455B'
},
  textStyle: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center'
  }
};

export default HomeScreen;
