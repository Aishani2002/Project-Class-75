import React from 'react';
import { Text, View } from 'react-native';

export default class WriteScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>Write Your Story</Text>
        </View>
      );
    }
  } 
  const styles = StyleSheet.create({
    text: {
      flex: 1,
      backgroundColor: '#cbbfee',
      alignItems: 'center',
      justifyContent: 'center',
      fontsize:26,
    },
  });