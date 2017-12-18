import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   paddingLeft: 10,
   paddingRight: 10
  },
  activityContainer: {
   flex: 1, 
   flexDirection: 'row', 
   justifyContent: 'space-around', 
   padding: 10
  },
  mainImage: {
    width: 200, 
    height: 50, 
    alignSelf: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  textBox: {
    padding: 10,
    height: 60,
  },
  searchBtn: {
      padding: 50,
      height: 100
  },
  noResultsText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10
  },
  searchResultsLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10
  },
  searchTerm: {
    fontWeight: 'bold'
  },
  resultsContainer: {
   flex: 1, 
   paddingTop: 20
  },
  resultRow: {
    padding: 15,
    borderWidth: 0.5,
    borderBottomColor: '#a9a9a9'
  },
  resultTitle: {
    fontSize: 20,
    color: '#a9a9a9'
  },
  resultOwnerRow: {
    flex: 1, 
    flexDirection: 'row', 
    marginTop: 10
  },
  resultOwner: {
    fontSize: 15,
    color: '#009999',
    marginLeft: 10
  },
  resultOwnerImg: {
    width: 25, 
    height: 25
  }
});
