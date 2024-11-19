import { StyleSheet } from 'react-native';

const stylesWelcome = StyleSheet.create({
  containerLogo: {
    flex: 1.5,
    backgroundColor: '#0CC5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 25,
    fontFamily: 'MontserratBold',
    marginTop: 15,
    justifyContent: 'center',
  },
  textLogin: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 12,
  },
  buttonCreate: {
    position: 'relative',
    backgroundColor: '#0C81F5',
    borderRadius: 20,
    paddingVertical: 16,
    width: '90%',
    alignSelf: 'center',
    bottom: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  CriarConta: {
    fontFamily: 'MontserratRegular',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  buttonAcess: {
    position: 'relative',
    backgroundColor: '#0CD3F5',
    borderRadius: 20,
    paddingVertical: 16,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
  },
});

export default stylesWelcome;
