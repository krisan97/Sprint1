import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, FlatList } from 'react-native';
import ResourceItem from './ResourceItem';

class ResourceScreen extends Component {
  renderItem({ item }) {
    return <ResourceItem library={item} />;
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#E7FAD8'
          }}
        >

          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              padding: 5
            }}
          >
            Tips and Self-Coping Strategies
          </Text>
          <Text
            style={{
            padding: 5,
            flexWrap: 'wrap',
            fontSize: 18
          }}
          >
            Do you feel like gambling? Read over or say these statements out loud.
          </Text>

          <View>
          <FlatList
            horizontal
            data={this.props.libraries}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.topContainerStyle}

          />
          </View>

        </View>

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
            Videos that Inspire
          </Text>
          <Text
            style={{
            padding: 5,
            flexWrap: 'wrap',
            fontSize: 18
          }}
          >
            Inspirational videos about problem gambling.
          </Text>
          <View>
          <FlatList
            horizontal
            data={this.props.libraries}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.topContainerStyle}

          />
          </View>

        </View>
      </ScrollView>

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
paddingBottom: 10,
},
bottomContainerStyle: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
paddingBottom: 10,
paddingLeft: 10,
paddingRight: 10,
},
buttonContainerStyle: {
flex: 1,
height: 180,
width: 200,
margin: 5,
elevation: 4
//backgroundColor: 'rgba(0,0,0,0.1)'
}
};

const mapStateToProps = state => {
return { libraries: state.libraries };
};

export default connect(mapStateToProps)(ResourceScreen);
