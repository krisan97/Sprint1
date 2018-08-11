import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { finishOnBoarding } from '../actions';
import { Card, CardSection, Button } from './common';

class OnBoarding extends Component {
  onButtonPress() {
    this.props.finishOnBoarding();
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text>
            Welcome to on boarding
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            <Text>Continue to homescreen</Text>
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ intro }) => {
  const { onBoarding } = intro;

  return { onBoarding };
};

export default connect(mapStateToProps, {
finishOnBoarding
})(OnBoarding);
