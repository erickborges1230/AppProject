import { forwardRef } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type TextPropsHome = {
  text?: string;
} & TextProps;

export const TextPropsMessageBox = forwardRef<Text, TextPropsHome>(
  ({ text, ...TextPropsRegister }, ref) => {
    return <Text ref={ref} {...TextPropsRegister} style={[stylesProps.textHomeBox]}></Text>;
  }
);
export const TextPropsHome = forwardRef<Text, TextPropsHome>(
  ({ text, ...TextPropsRegister }, ref) => {
    return <Text ref={ref} {...TextPropsRegister} style={[stylesProps.titleHome]}></Text>;
  }
);
export const TextMessageErrosBox = forwardRef<Text, TextPropsHome>(
  ({ text, ...TextPropsRegister }, ref) => {
    return <Text ref={ref} {...TextPropsRegister} style={[stylesProps.messageErrosBox]}></Text>;
  }
);
const stylesProps = StyleSheet.create({
  textHomeBox: {
    fontSize: 17,
    fontFamily: 'Montserrat_500Medium',
    color: '#000000',
    marginStart: 12,
    marginTop: '-2%',
    fontWeight: 'bold',
  },
  titleHome: {
    fontSize: 24,
    color: '#0C81F5',
    fontFamily: 'MontserratBold',
    margin: '3%',
    marginTop: '6%',
  },
  messageErrosBox: {
    color: 'red',
    marginTop: '-3%',
    marginVertical: '2%',
    marginStart: '4%',
    fontSize: 15,
  },
});
