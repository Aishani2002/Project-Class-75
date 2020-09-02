import React from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase';
import db from '../config.js';

export default class ReadScreen extends React.Component {
  constructor() {
    super();
    this.state={
      search:""
    }
  }
 updateSearch = (search) => {
    this.setState({ search });
  };

  fetchMoreTransactions= async()=>{
    var text = this.state.search.toUpperCase();
    var enteredText= text.split("");
    if(enteredText[0].toUpperCase()==="S") {
const query = await db.collection("story").where("story","==",text).get();
query.docs.map((doc)=>{
  this.setState({allTransactions:[...this.state.allTransactions,doc.data()],
  lastVisibleTransactions:doc})
})
    }
    else if (enteredText[0].toUpperCase()==="S"){
      const query = await db.collection("transaction").where("studentId","==",text).startAfter(this.state.lastVisibleTransactions).limit(10).get();
      query.docs.map((doc)=>{
        this.setState({allTransactions:[...this.state.allTransactions,doc.data()],
        lastVisibleTransactions:doc})
      })
    }
  }

  searchTransactions = async(text)=>{
    var enteredText= text.split("");
    if(enteredText[0].toUpperCase()==="B") {
      const query = await db.collection("transaction").where("bookId","==",text).startAfter(this.state.lastVisibleTransactions).limit(10).get();
      query.docs.map((doc)=>{
        this.setState({allTransactions:[...this.state.allTransactions,doc.data()],
        lastVisibleTransactions:doc})
      })
          }
         else if (enteredText[0].toUpperCase()==="S"){
            const query = await db.collection("transaction").where("studentId","==",text).startAfter(this.state.lastVisibleTransactions).limit(10).get();
            query.docs.map((doc)=>{
              this.setState({allTransactions:[...this.state.allTransactions,doc.data()],
              lastVisibleTransactions:doc})
            })
          }
  }

  componentDidMount= async()=>{
    const query = await db.collection("transaction").limit(10).get();
    query.doc.map((doc)=>{
      this.setState({allTransactions:[],lastVisibleTransactions:doc})
    })
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}/>
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