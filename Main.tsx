import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

function Main(): React.JSX.Element {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.headingArea}>
        <Text style={style.headingTxt}>My First React Native App!</Text>
      </View>
      {/* Create Card */}
      <View style={style.cardStyles}>
        <Text style={style.cardTxt}>Card</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#D2E0FB',
    flex: 1, //makes the screen full screen
  },
  headingArea: {
    marginTop: 20,
  },
  headingTxt: {
    fontSize: 30,
    fontWeight: '600',
    color: '#481E14',
  },
  cardStyles: {
    height: 200,
    width: 200,
    backgroundColor: '#FEF9D9',
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#DEE5D4',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTxt: {
    fontSize: 20,
    color: '#8EACCD',
    fontWeight: '400',
  },
});

export default Main;
