import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const Second = ({navigation, route}) => {
  const {username} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from second screen</Text>
      <Text style={styles.text}>Hello {username}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
