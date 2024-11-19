const MaskFormatCpF = (value: string) => {
  value = value.replace(/\D/g, ''); // remove caracteres não numéricos
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  return value;
};
const MaskFormatCep = (valueCep: string) => {
  valueCep = valueCep.replace(/\D/g, '');
  valueCep = valueCep.replace(/^(\d{5})(\d{3})/, '$1-$2');
  return valueCep;
};
const MaskFormatCel = (valueCel: string) => {
  valueCel = valueCel.replace(/\D/g, '');
  valueCel = valueCel.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return valueCel;
};
const MasFormatAge = (valueAge: string) => {
  valueAge = valueAge.replace(/\D/g, '');
  valueAge = valueAge.replace(/^(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
  return valueAge;
};

export { MaskFormatCpF, MaskFormatCep, MaskFormatCel, MasFormatAge };
