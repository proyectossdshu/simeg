let nullable = false;

const validate = (value, validators, params) => {
  value = value === null ? "" : value;
  value = typeof value === "string" ? value.replace(/\s+/, "") : value;
  let validated = {
    valid: true,
    message: "",
  };
  validators.forEach((validator) => {
    const validationsResults = validator(value, params);
    validated.valid = validated.valid * validationsResults.valid === 1;
    validated.message = validationsResults.message;
  });
  return validated;
};

const required = (value, params) => {
  if (value === undefined) {
    return {
      valid: false,
      message: "Valor requerido",
    };
  }

  return {
    valid: value !== null ? value.length > 0 : false,
    message: "Valor requerido",
  };
};

const requiredSelect = (value, params) => {
  if (value === undefined || value === null) {
    return {
      valid: false,
      message: "Seleccione una opción",
    };
  }

  return {
    valid: value.label && value.label.length > 0 && value.value !== 0,
    message: "Seleccione una opción",
  };
};

const size = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  if (!nullable) {
    if (value !== undefined) {
      return {
        valid: value.length === params.size,
        message: `debe contener ${params.size} caracteres`,
      };
    } else {
      return {
        valid: false,
        message: `debe contener ${params.size} caracteres`,
      };
    }
  } else {
    return {
      valid: true,
      message: `debe contener ${params.size} caracteres`,
    };
  }
};

const min = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  if (!nullable) {
    if (value !== undefined) {
      return {
        valid: value.length >= params.minValue,
        message: `debe contener al menos ${params.minValue} caracteres`,
      };
    } else {
      return {
        valid: false,
        message: `debe contener al menos ${params.minValue} caracteres`,
      };
    }
  } else {
    return {
      valid: true,
      message: `debe contener al menos ${params.minValue} caracteres`,
    };
  }
};

const max = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  let minValue = params.minValue !== undefined ? params.minValue : 0;
  if (!nullable) {
    if (value !== undefined) {
      return {
        valid: value.length <= params.maxValue && value.length >= minValue,
        message: `debe contener máximo ${params.maxValue} caracteres`,
      };
    } else {
      return {
        valid: value.length >= minValue,
        message: `debe contener máximo ${params.maxValue} caracteres`,
      };
    }
  } else {
    return {
      valid: true,
      message: `debe contener máximo ${params.maxValue} caracteres`,
    };
  }
};

const sizeLength = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  if (!nullable) {
    if (value !== undefined) {
      return {
        valid: value.length === params.size,
        message: `debe contener ${params.size} caracteres`,
      };
    } else {
      return {
        valid: false,
        message: `debe contener ${params.size} caracteres`,
      };
    }
  } else {
    return {
      valid: true,
      message: `debe contener ${params.size} caracteres`,
    };
  }
};

const sizeValue = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  if (!nullable) {
    if (value !== undefined) {
      return {
        valid: value === params.size,
        message: `debe ser igual a ${params.size}`,
      };
    } else {
      return {
        valid: false,
        message: `debe ser igual a ${params.size}`,
      };
    }
  } else {
    return {
      valid: true,
      message: `debe ser igual a ${params.size}`,
    };
  }
};

const minLength = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  if (!nullable) {
    if (value !== undefined) {
      return {
        valid: value.length >= params.minValue,
        message: `debe contener al menos ${params.minValue} caracteres`,
      };
    } else {
      return {
        valid: false,
        message: `debe contener al menos ${params.minValue} caracteres`,
      };
    }
  } else {
    let isValid = true;
    if (value !== "" && value !== undefined && value.length < params.minValue)
      isValid = false;
    return {
      valid: isValid,
      message: `debe contener al menos ${params.minValue} caracteres`,
    };
  }
};

const maxLength = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  let minValue = params.minValue !== undefined ? params.minValue : 0;
  if (!nullable) {
    if (value !== undefined) {
      return {
        valid: value.length <= params.maxValue && value.length >= minValue,
        message: `debe contener máximo ${params.maxValue} caracteres`,
      };
    } else {
      return {
        valid: value.length >= minValue,
        message: `debe contener máximo ${params.maxValue} caracteres`,
      };
    }
  } else {
    return {
      valid: true,
      message: `debe contener máximo ${params.maxValue} caracteres`,
    };
  }
};

const minValue = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  if (!nullable) {
    if (value !== undefined) {
      return {
        valid: value >= params.minValue,
        message: `debe ser mayor o igual a ${params.minValue}`,
      };
    } else {
      return {
        valid: false,
        message: `debe ser mayor o igual a ${params.minValue}`,
      };
    }
  } else {
    return {
      valid: true,
      message: `debe ser mayor o igual a ${params.minValue}`,
    };
  }
};

const maxValue = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  let minValue = params.minValue !== undefined ? params.minValue : 0;
  if (!nullable) {
    if (value !== undefined) {
      return {
        valid: value <= params.maxValue && value >= minValue,
        message: `debe ser menor o igual a ${params.maxValue}`,
      };
    } else {
      return {
        valid: value >= minValue,
        message: `debe ser menor o igual a ${params.maxValue}`,
      };
    }
  } else {
    return {
      valid: true,
      message: `debe ser menor o igual a ${params.maxValue}`,
    };
  }
};

const email = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  let pattern = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
  return {
    valid: value.length > 0 ? pattern.test(value) : nullable,
    message: `debe ser una dirección de correo válida`,
  };
};

const date = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  // let pattern = "/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/";
  return {
    // valid: (value.length > 0)?pattern.test(value):nullable,
    valid: true,
    message: `no corresponde con una fecha válida`,
  };
};

const vpassword = (value, params) => {
  nullable = params.nullable !== undefined ? params.nullable : nullable;
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  let isValidPassword = passwordRegex.test(value);
  return {
    valid: value.length > 0 ? isValidPassword : nullable,
    message: `La contraseña debe contener un mínimo de ocho caracteres, letra mayúscula y minúcscula, y un número.`,
  };
};

const requieredLevels = (value, params) => {
  let isEmpty = 0;
  let validated = {
    valid: true,
    message: "",
  };
  value.forEach((respuesta, index) => {
    isEmpty += respuesta === undefined || respuesta === null;
  });
  if (isEmpty > 0) {
    validated.valid = false;
    validated.message = "Todas las preguntas deben ser respondidas";
  }
  return validated;
};

const requiredMultipleSelect = (value) => {
  let validated = {
    valid: true,
    message: "",
  };
  if (value.length === 0) {
    validated.valid = false;
    validated.message = "Seleccione al menos una opción";
  }
  return validated;
};

const isNullOrUndefined = (value) => {
  return value === null || value === undefined;
};

const isEmptyOrInvalidString = (value) => {
  return (
    value === null || value === undefined || value.split(/\s+/).join("") === ""
  );
};

const isEmptyOrInvalidArray = (value) => {
  return value === null || value === undefined || value.length === 0;
};

const isEmptyOrNullObject = (data) => {
  for (var key in data) {
    return false;
  }
  return true;
};

const isTypePhone = (data) => {
  const regex = /^[0-9]*$/;
  if (data.match(regex) && data.length <= 10) return true;
  else {
    return false;
  }
};

export {
  required,
  requiredSelect,
  min,
  max,
  minLength,
  maxLength,
  minValue,
  maxValue,
  size,
  sizeLength,
  sizeValue,
  email,
  date,
  vpassword,
  requieredLevels,
  validate,
  requiredMultipleSelect,
  isNullOrUndefined,
  isEmptyOrInvalidString,
  isEmptyOrInvalidArray,
  isEmptyOrNullObject,
  isTypePhone,
};
