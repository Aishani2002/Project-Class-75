import React from 'react';
import { Text, View,TextInput,TouchableOpactiy,StyleSheet,KeyboardAvoidingView } from 'react-native';
import firebase from '../config/firebase';

export default class WriteScreen extends React.Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('story');
    this.state = {
      title: '',
      author: '',
      story: '',
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  saveWork () {
  this.dbRef.add({
    title: this.state.title,
    author: this.state.author,
    story: this.state.story,
  }).then((res) => {
    this.setState({
      title: '',
      email: '',
      mobile: '',
      isLoading: false,
    });
  }
};

showToast = () => {
  ToastAndroid.show("Congratualtions, you just wrote your own story!!!", ToastAndroid.SHORT);
}

    render() {
      return (
        <KeyboardAvoidingView> 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View>
          <TextInput style={styles.titleBox}
       placeholder="Title"
       value={this.state.title}
       onChangeText={(val) => this.inputValueUpdate(val, 'title')}/>
        </View>
        <View>
          <TextInput style={styles.titleBox}
       placeholder="Author"
       value={this.state.author}
       onChangeText={(val) => this.inputValueUpdate(val, 'author')}/>
        </View>
        <View>
          <TextInput style={styles.storyBox}
       placeholder="Write your story"
       value={this.state.story}
       onChangeText={(val) => this.inputValueUpdate(val, 'story')}/>
        </View>
        <View>
        <TouchableOpactiy styles={styles.submitButton}
        onPress={() => this.saveWork(), this.showToast()}>
        <Text> Submit </Text>
          </TouchableOpactiy>
         </View>
        </View>
        </KeyboardAvoidingView>
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
titleBox:{
  width:300,
  height:70,
  justifyContent: 'center',
  alignItems: 'center', 
  alignSelf: 'center',
},
submitButton:{
  width:100,
  height:50,
  backgroundColor: 'gold',
  justifyContent: 'center', 
  alignItems: 'center',
  alignSelf: 'center',

}

  });