import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  default: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  buttonStyle: { marginLeft: 20, marginRight: 20, marginTop: 10 },
  inputItem: {
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  placeholder: { fontSize: 14, marginLeft: 12 },
  footer: { padding: 10 },
  homeImage: { height: 200, width: null, flex: 1 },
  notificationImage: { width: 50, height: 50 },
  homeHeaderStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
});