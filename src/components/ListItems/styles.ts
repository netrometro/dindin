import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderColor: '#aaa',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texto: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});