import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <MapView style={styles.mapStyle} />
        </View>
        <View style={styles.bottomText}>
          <Text> Welcome to FindMyShade</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  //  position: sticky
    //top: 0 px
  },
  bottomText: {
    flex: 1,
    backgroundColor: '#1ceddc',
    alignItems: 'center',
    justifyContent: 'center',
  //  position: sticky
    //top: 0 px
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2,
  },
});
