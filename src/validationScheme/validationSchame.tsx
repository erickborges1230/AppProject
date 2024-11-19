import { z } from 'zod';
//primeira tela de cadastro
const validationSchemaFirstScreen = z.object({
  cpf: z.string({ required_error: 'Compo obrigatório' }).min(11, 'O CPF deve conter 11 números'),
  firsName: z.string({ required_error: 'Compo obrigatório' }).min(3, 'Preencha o compro em branco'),
  lastName: z.string({ required_error: 'Compo obrigatório' }).min(3, 'Preencha o campo em branco'),
  age: z.string({ required_error: 'Compo obrigatório' }).min(8, 'Formato invalido'),
  celPhone: z.string({ required_error: 'Compo obrigatório' }).min(11, 'Formato invalido'),
});
//primeira tela de cadastro
const validationSchameSecondScreen = z.object({
  street: z.string({ required_error: 'Compo obrigatório' }).min(2, 'Required'),
  neighborhood: z.string({ required_error: 'Compo obrigatório' }).min(2, 'Required'),
  complement: z.string({ required_error: 'Compo obrigatório' }).min(2, 'Preencha o campo'),
  cep: z.string({ required_error: 'Compo obrigatório' }).min(8, 'Cep invalido'),
  city: z.string({ required_error: 'Compo obrigatório' }).min(3, 'Não encontrada'),
});
const validationSchameSingnIn = z.object({
  email: z.string({ required_error: 'obrigatório' }).email('Insira um e-mail válido'),
  password: z
    .string({ required_error: 'obrigatório' })
    .min(6, 'A senha deve ter no minímo 6 digitos'),
});

export { validationSchameSecondScreen, validationSchemaFirstScreen, validationSchameSingnIn };
