import React from 'react';
import { Text, View } from 'react-native';

export default class ReadScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.readtext}>Read a Story</Text>
        </View>
      );
    }
  } 

  const styles = StyleSheet.create({
    readtext: {
      flex: 1,
      backgroundColor: '#cbbfee',
      alignItems: 'center',
      justifyContent: 'center',
      fontsize:26,
    },
  });