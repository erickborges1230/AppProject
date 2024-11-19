import * as React from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Container } from 'Container/Container';
import { styleSingnIn } from './styleSingnIn';
import { RootStackParamList } from 'navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { validationSchameSingnIn } from '~/validationScheme/validationSchame';
import { useForm, Controller } from 'react-hook-form';
import { TextMessageErrosBox } from '~/utils/TextStyleProps/TextStyleProps';

type Props = StackScreenProps<RootStackParamList, 'SingnIn'>;
type validationSchema = z.infer<typeof validationSchameSingnIn>;

export default function SingnIn({ navigation }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<validationSchema>({
    resolver: zodResolver(validationSchameSingnIn),
  });
  function handleScreen(data: validationSchema) {
    console.log(data);
  }
  return (
    <Container>
      <Animatable.View animation="fadeInLeft" delay={500}>
        <Text style={styleSingnIn.herder}>Bem-vindo(a)</Text>
        <Text style={styleSingnIn.tittle}>Para acessar sua conta</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp">
        <Text style={styleSingnIn.EmailAndPass}>E-mail</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styleSingnIn.styleInputBox}
              placeholder="Digite o seu e-mail"
              maxLength={50}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="email"
        />
        {errors.email && <TextMessageErrosBox>{errors.email?.message}</TextMessageErrosBox>}
        <Text style={styleSingnIn.EmailAndPass}>Senha</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styleSingnIn.styleInputBox}
              placeholder="Digite o sua senha"
              maxLength={24}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="password"
        />
        {errors.password && <TextMessageErrosBox>{errors.password?.message}</TextMessageErrosBox>}
        <TouchableOpacity>
          <Text style={styleSingnIn.forgotPass}>Esqueci a senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleSingnIn.buttonEnter} onPress={handleSubmit(handleScreen)}>
          <Text style={styleSingnIn.textLogin}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleSingnIn.buttonfirstAcess}
          onPress={() => navigation.navigate('FirstRegisterScreen')}>
          <Text style={styleSingnIn.textFirstAcess}>Meu primeiro acesso</Text>
        </TouchableOpacity>
      </Animatable.View>
    </Container>
  );
}
