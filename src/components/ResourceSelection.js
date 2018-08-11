import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, Image } from 'react-native';
import { resetResource } from '../actions';

class ResourceSelection extends Component {
  render() {
    this.props.resetResource();
    const { library } = this.props;
    const { itemContainerStyle, imageStyle } = styles;

    return (
      <ScrollView>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#FFFFFF'
          }}
        >

          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              padding: 5
            }}
          >
            {library.title}
          </Text>

          <View style={itemContainerStyle}>
            <Image
              style={imageStyle}
              source={{ uri: library.image }}
            />
          </View>

          <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>
            {library.author}
          </Text>

          <Text style={{ fontSize: 18, padding: 10 }}>
            {library.description}
          </Text>
        </View>

      </ScrollView>

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
    marginLeft: 6,
    marginRight: 6
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
    borderRadius: 5
  }
};

const mapStateToProps = state => {
return { libraries: state.libraries };
};

export default connect(mapStateToProps, {
resetResource
})(ResourceSelection);
