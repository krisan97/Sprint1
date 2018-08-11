import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import IntroScreen from './components/IntroScreen';
import OnBoarding from './components/OnBoarding';
import HomeScreen from './components/HomeScreen';
import SOSScreen from './components/SOSScreen';
import ResourceScreen from './components/ResourceScreen';
import ResourceSelection from './components/ResourceSelection';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: '#38455b' }}>
      <Scene key="root" hideNavBar>
        <Scene key="intro">
          <Scene
            key="introScreen" hideNavBar
            component={IntroScreen}
            title=""
            titleStyle={{ textAlign: 'center', flex: 1, color: '#FFFFFF' }}
            initial
          />
          <Scene
            key="onboarding" hideTabBar
            component={OnBoarding}
            title="On Boarding"
            titleStyle={{ textAlign: 'center', flex: 1, color: '#FFFFFF' }}
          />
        </Scene>

        <Scene key="main">
          <Scene
            //rightTitle="Add"
            //rightButtonStyle={{ right: 0 }}
            //onRight={() => Actions.employeeCreate()}
            key="homeScreen"
            component={HomeScreen}
            title="Homepage"
            titleStyle={{ flex: 1, color: '#FFFFFF' }}
            initial
          />
          <Scene
            key="sosScreen"
            component={SOSScreen}
            title=""
          />
          <Scene
            key="resourceScreen"
            component={ResourceScreen}
            title="Resources"
            titleStyle={{ flex: 1, color: '#FFFFFF' }}
          />
          <Scene
            key="resourceSelection"
            component={ResourceSelection}
            title="Resources"
            titleStyle={{ flex: 1, color: '#FFFFFF' }}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
