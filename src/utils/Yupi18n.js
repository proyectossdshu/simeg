import * as Yup from "yup";
let Yupi18n = Yup;
Yupi18n.setLocale({
  mixed: {
    // eslint-disable-next-line
    default: "${path} es invalido",
    // eslint-disable-next-line
    required: "${path} es requerido",
    // eslint-disable-next-line
    oneOf: "${path} debe ser una de las opciones: ${values}",
    // eslint-disable-next-line
    notOneOf: "${path} no debe ser una de las opciones: ${values}",
  },
  string: {
    // eslint-disable-next-line
    length: "${path} debe ser exactamente ${length} caracteres",
    // eslint-disable-next-line
    min: "${path} debe tener al menos ${min} caracteres",
    // eslint-disable-next-line
    max: "${path} debe tener máximo ${max} caracteres",
    // eslint-disable-next-line
    matches: '${path} debe ser parecido a: "${regex}"',
    // eslint-disable-next-line
    email: "${path} debe ser un correo electrónico válido",
    // eslint-disable-next-line
    url: "${path} debe ser una URL válida",
    // eslint-disable-next-line
    uuid: "${path} debe ser un UUID válido",
    // eslint-disable-next-line
    trim: "${path} no debe contener espacios al inicio ni al final",
    // eslint-disable-next-line
    lowercase: "${path} debe estar en minúsculas",
    // eslint-disable-next-line
    uppercase: "${path} debe estar en mayúsculas",
  },
  number: {
    // eslint-disable-next-line
    min: "${path} debe ser mayor o igual a ${min}",
    // eslint-disable-next-line
    max: "${path} debe ser menor o igual ${max}",
    // eslint-disable-next-line
    lessThan: "${path} debe ser menor a ${less}",
    // eslint-disable-next-line
    moreThan: "${path} debe ser mayor a ${more}",
    // eslint-disable-next-line
    positive: "${path} debe ser un número positivo",
    // eslint-disable-next-line
    negative: "${path} debe ser un número negativo",
    // eslint-disable-next-line
    integer: "${path} debe ser un número entero",
  },
  date: {
    // eslint-disable-next-line
    min: "${path} debe ser después de ${min}",
    // eslint-disable-next-line
    max: "${path} debe ser antes de ${max}",
  },
  boolean: {
    // eslint-disable-next-line
    isValue: "${path} debe ser ${value}",
  },
  array: {
    // eslint-disable-next-line
    min: "${path} debe tener al menos ${min} elementos",
    // eslint-disable-next-line
    max: "${path} debe tener máximo ${max} elementos",
    // eslint-disable-next-line
    length: "${path} debe tener ${length} elementos",
  },
});

export default Yupi18n;
