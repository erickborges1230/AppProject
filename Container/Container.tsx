import { StyleSheet, SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView style={stylesContainer.container}>{children}</SafeAreaView>;
};
export const ViewHearder = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView style={stylesContainer.containerHearder}>{children}</SafeAreaView>;
};

const stylesContainer = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  containerHearder: {
    marginTop: '7%',
  },
});

export default stylesContainer;
