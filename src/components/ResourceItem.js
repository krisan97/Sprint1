import React, { Component } from 'react';
import {
   Text,
   TouchableOpacity,
   View,
   NativeModules,
   LayoutAnimation,
   ImageBackground
 } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental(true);

class ResourceItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderResourceSelection() {
    const { library, expanded } = this.props;

    if (expanded) {
      console.log(library);
      return (
        Actions.resourceSelection({ library })
      );
    }
  }

  render() {
    const { titleStyle, itemContainerStyle } = styles;
    const { id, title, image } = this.props.library;

    return (
      <TouchableOpacity onPress={() => this.props.selectLibrary(id)} style={{ padding: 10 }}>
        <View style={itemContainerStyle}>
          <ImageBackground
            style={{
              flex: 1,
              width: '100%',
              height: '50%',
            }}
            imageStyle={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }}
            source={{ uri: image }}
            resizeMode='cover'
          >
            <Text style={titleStyle}>
              {title}
            </Text>
          </ImageBackground>
          {this.renderResourceSelection()}
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 22,
    paddingLeft: 15,
    paddingTop: 100,
    paddingBottom: 20
  },
  itemContainerStyle: {
    backgroundColor: '#f2f0ee',
    //padding: 10,
    width: 200,
    height: 170,
    borderRadius: 10,
    borderWidth: 0.5,
    elevation: 4
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
    borderRadius: 5
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    //backgroundColor: '#04BADE', nice blue color, changed to grey with #8a8c91
    backgroundColor: '#909296',
    borderRadius: 5,
    borderWidth: 1,
    //borderColor: '#04BADE',
    borderColor: '#909296',
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId.library === ownProps.library.id;
  console.log('state.selectedLibraryId');
  console.log(state.selectedLibraryId.library);

  console.log('ownProps.library.id');
  console.log(ownProps.library.id);

  console.log('expanded is');
  console.log(expanded);

  return { expanded };
};

export default connect(mapStateToProps, actions)(ResourceItem);
