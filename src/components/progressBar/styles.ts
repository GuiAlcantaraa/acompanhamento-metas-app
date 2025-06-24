import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
  },
  percent: {
    color: '#5bd1d7',
    fontWeight: 'bold',
  },
  barBackground: {
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#5bd1d7',
    borderRadius: 10,
  },
})