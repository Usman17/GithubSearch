import React, { Component } from 'react';
import styles from "./src/styles";
import { ListView, ActivityIndicator, AppRegistry, FlatList, Image , Text, KeyboardAvoidingView,  View, TextInput, Button  } from 'react-native';

export default class GitHubSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchTerm: '', isLoading: false, showResults: false, noResultsFound:false };
  }

  fetchResultsFromGitHub() {
      if(this.state.searchTerm.length > 0){
      this.setState({isLoading:true, showResults:false, noResultsFound:false });
      let srch = this.state.searchTerm;
      return fetch('https://api.github.com/search/repositories?q='+srch+'&sort=stars&order=desc')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        if(responseJson.total_count > 0){
          this.setState({
          dataSource: ds.cloneWithRows(responseJson.items),
          isLoading: false,
          showResults: true,
        }, function() {
          // do something with new state
        });
        } else {
            this.setState({isLoading:false, noResultsFound:true});
        }
      })
      .catch((error) => {
        console.error(error);
      });
      }
  }

  showSearchField(){
      this.setState({isLoading:false, showResults:false, noResultsFound: false, searchTerm: ''});
  }

  setSearchTerm = (typedText) => {
    this.setState({searchTerm:typedText});
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activityContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
      );
    }else{
        if(this.state.showResults){
            return (
      <View style={styles.resultsContainer}>
        <Text style={styles.searchResultsLabel}>
          Repositories Found
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <View style={styles.resultRow} >
                                    <View>
                                      <Text style={styles.resultTitle}>
                                            {rowData.name}
                                      </Text>
                                    </View>
                                    <View style={styles.resultOwnerRow} >
                                      <Image
                                            style={styles.resultOwnerImg}
                                            source={{uri: rowData.owner.avatar_url}}
                                       />
                                      <Text style={styles.resultOwner}>
                                            {rowData.owner.login}
                                      </Text>
                                    </View>
                                  </View>
                    }
        />
        <Button
            onPress={() => this.showSearchField()}
            title="Go Back"
            style={styles.searchBtn}
            color="#841584"
            accessibilityLabel="Click to go back to main screen"
        />
      </View>
    );
        }
       else if(this.state.noResultsFound){
         return (
      <View style={styles.container}>
         <Text style={styles.noResultsText}>
          No Repositories found for <Text style={styles.searchTerm}> {this.state.searchTerm} </Text>
        </Text>
        <Button
            onPress={() => this.showSearchField()}
            title="Go Back"
            style={styles.searchBtn}
            color="#841584"
            accessibilityLabel="Click to go back to main screen"
         />
      </View>
       );
        }
         else {
	return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        style={styles.mainImage}
        source={{uri: 'https://sunlightmedia.org/wp-content/uploads/2017/02/github-bb449e0ffbacbcb7f9c703db85b1cf0b.png'}}
      />
      <TextInput
            style={styles.textBox}
            placeholder='Enter repository name here'
            onChangeText={this.setSearchTerm}
      />
      <Button
            onPress={() => this.fetchResultsFromGitHub()}
            title="Search"
            style={styles.searchBtn}
            color="#841584"
            accessibilityLabel="Click to fetch repositories from GitHub"
      />
      </KeyboardAvoidingView>
    );
        }
    }
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('GitHubSearch', () => GitHubSearch);
