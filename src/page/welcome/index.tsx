import * as React from 'react';
import { Container } from 'Container/Container';
import stylesWelcome from '~/page/welcome/StylesWelcome';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from 'navigation';
import { StackScreenProps } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';

type Props = StackScreenProps<RootStackParamList, 'Welcome'>;

export default function Welcome({ navigation }: Props) {
  return (
    <Container>
      <View style={stylesWelcome.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../../assets/logoWelcome.png')}
          style={{ width: '70%' }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View delay={600} animation="fadeInUp" style={stylesWelcome.containerForm}>
        <Text style={stylesWelcome.title}>Tranquilidade e segurança que você merece</Text>
        <Text style={stylesWelcome.textLogin}>Faça login para começar</Text>

        <TouchableOpacity
          style={stylesWelcome.buttonCreate}
          onPress={() => navigation.navigate('FirstRegisterScreen')}>
          <Text style={stylesWelcome.CriarConta}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesWelcome.buttonAcess}
          onPress={() => navigation.navigate('SingnIn')}>
          <Text style={stylesWelcome.CriarConta}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </Container>
  );
}
