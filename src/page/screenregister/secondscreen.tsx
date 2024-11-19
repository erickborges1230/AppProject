import React from 'react';
import { Container } from 'Container/Container';
import { Controller, useForm } from 'react-hook-form';
import { validationSchameSecondScreen } from '~/validationScheme/validationSchame';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'components/Buttons/Button';
import { z } from 'zod';
import {
  TextPropsHome,
  TextPropsMessageBox,
  TextMessageErrosBox,
} from '~/utils/TextStyleProps/TextStyleProps';
import { TextInputPropsBox } from '~/utils/TextInputProps/InputProps';
import { MaskFormatCep } from '~/utils/mask/Mask';
//type para fazer integração com typeScrip + generic
type validationSchema = z.infer<typeof validationSchameSecondScreen>;
export default function SecondRegisterScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<validationSchema>({
    resolver: zodResolver(validationSchameSecondScreen),
  });
  function handleScreen(data: validationSchema) {
    console.log(data);
  }

  //para buscar dados do servidor a função precisa ser assiscrona
  /*async function buscarCep() {
    console.log(buscarCep);
    try {
      //await => vai esperar a resposta vinda do servidor
      const response = await ApiCep.get(`/${cep}/json/`);
    } catch (error) {
      console.log('ERRO' + error);
    }
  }*/
  return (
    <Container>
      <TextPropsHome>Quase la!</TextPropsHome>
      <TextPropsMessageBox>Digite seu CEP</TextPropsMessageBox>
      <Controller
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInputPropsBox
            placeholder="CEP"
            maxLength={9}
            onBlur={onBlur}
            value={value}
            onChangeText={(textCep: string) => {
              const cep = MaskFormatCep(textCep);
              onChange(cep);
              console.log(cep);
            }}
          />
        )}
        name="cep"
      />
      {errors.street && <TextMessageErrosBox>{errors.cep?.message}</TextMessageErrosBox>}
      <TextPropsMessageBox>Cidade</TextPropsMessageBox>
      <Controller
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInputPropsBox
            placeholder="Cidade"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="city"
      />
      {errors.city && <TextMessageErrosBox>{errors.city?.message}</TextMessageErrosBox>}
      <TextPropsMessageBox>Digite seu endereço</TextPropsMessageBox>
      <Controller
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInputPropsBox
            placeholder="Rua"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="street"
      />
      {errors.street && <TextMessageErrosBox>{errors.street?.message}</TextMessageErrosBox>}
      <TextPropsMessageBox>Qual o nome do seu bairro?</TextPropsMessageBox>
      <Controller
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInputPropsBox
            placeholder="Bairro"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="neighborhood"
      />
      {errors.street && <TextMessageErrosBox>{errors.neighborhood?.message}</TextMessageErrosBox>}
      <TextPropsMessageBox>Coloque um complemento</TextPropsMessageBox>
      <Controller
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInputPropsBox
            placeholder="Número"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="complement"
      />
      {errors.complement && <TextMessageErrosBox>{errors.complement?.message}</TextMessageErrosBox>}

      <Button onPress={handleSubmit(handleScreen)} />
    </Container>
  );
}
