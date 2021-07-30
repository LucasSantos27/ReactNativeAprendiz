import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  resultImc:{
    flex: 1,
    marginTop: 20,
    paddingTop: 15,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  information:{
    fontSize: 24,
    color: "#FF0043",
    fontWeight: "bold",
  },
  number:{
    fontSize: 48,
    color: "#FF0043",
    fontWeight: "bold",
  },
  boxSharedButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  shared: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
});

export default styles