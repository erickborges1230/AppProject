import React, { forwardRef } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

type InputProps = {
  input?: string;
} & TextInputProps;

const TextInputPropsBox = forwardRef<TextInput, InputProps>(({ input, ...textInputProps }, ref) => {
  return (
    <TextInput
      ref={ref}
      {...textInputProps}
      style={[styles.inputText, textInputProps.style]}></TextInput>
  );
});

const styles = StyleSheet.create({
  inputText: {
    fontSize: 18,
    backgroundColor: '#fff',
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    padding: 10,
    color: '#000000',
    borderColor: '#0C81F5',
    borderRadius: 12,
    marginTop: 5,
  },
});

export { TextInputPropsBox };
