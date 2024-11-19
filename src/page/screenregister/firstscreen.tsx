import { useForm, Controller } from 'react-hook-form';
import { Button } from 'components/Buttons/Button';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation';
import { validationSchemaFirstScreen } from '~/validationScheme/validationSchame';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import * as Animatable from 'react-native-animatable';
import { Container } from 'Container/Container';
import {
  TextPropsHome,
  TextPropsMessageBox,
  TextMessageErrosBox,
} from '~/utils/TextStyleProps/TextStyleProps';
import { TextInputPropsBox } from '~/utils/TextInputProps/InputProps';
import { MasFormatAge, MaskFormatCel, MaskFormatCpF } from '~/utils/mask/Mask';

type Props = StackScreenProps<RootStackParamList, 'FirstRegisterScreen'>;
//type para fazer integração com typeScrip + generic
type validationSchema = z.infer<typeof validationSchemaFirstScreen>;

export default function FirstRegisterScreen({ navigation }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<validationSchema>({
    resolver: zodResolver(validationSchemaFirstScreen),
    defaultValues: {
      cpf: '',
    },
  });

  function HanderhandleScreen(data: validationSchema) {
    console.log(data);
  }
  return (
    <Container>
      <Animatable.View>
        <TextPropsHome>Criar conta</TextPropsHome>
        <TextPropsMessageBox>CPF</TextPropsMessageBox>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputPropsBox
              maxLength={14}
              placeholder="Digite seu CPF"
              value={value}
              onBlur={onBlur}
              onChangeText={(text: string) => {
                const cpf = MaskFormatCpF(text);
                onChange(cpf);
              }}
            />
          )}
          name="cpf"
        />
        {errors.cpf && <TextMessageErrosBox>{errors.cpf?.message}</TextMessageErrosBox>}
        <TextPropsMessageBox>Qual seu primeiro nome?</TextPropsMessageBox>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputPropsBox
              placeholder="Primeiro nome"
              maxLength={33}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
          name="firsName"
        />
        {errors.firsName && <TextMessageErrosBox>{errors.firsName?.message}</TextMessageErrosBox>}
        <TextPropsMessageBox>Qual seu sobrenome?</TextPropsMessageBox>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputPropsBox
              placeholder="Sobrenome"
              maxLength={50}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="lastName"
        />
        {errors.lastName && <TextMessageErrosBox>{errors.lastName?.message}</TextMessageErrosBox>}
        <TextPropsMessageBox>Qual sua data de nascimento?</TextPropsMessageBox>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputPropsBox
              placeholder="DD/MM/AAAA"
              maxLength={10}
              onChangeText={(Age: string) => {
                const age = MasFormatAge(Age);
                onChange(age);
              }}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="age"
        />
        {errors.age && <TextMessageErrosBox>{errors.age?.message}</TextMessageErrosBox>}
        <TextPropsMessageBox>Qual seu número de telefone?</TextPropsMessageBox>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInputPropsBox
              maxLength={15}
              placeholder="(99) 99999-9999"
              onChangeText={(celphone: string) => {
                const cel = MaskFormatCel(celphone);
                onChange(cel);
              }}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="celPhone"
        />
        {errors.celPhone && <TextMessageErrosBox>{errors.celPhone?.message}</TextMessageErrosBox>}
        <Button onPress={handleSubmit(() => navigation.navigate('SecondRegisterScreen'))} />
      </Animatable.View>
    </Container>
  );
}
