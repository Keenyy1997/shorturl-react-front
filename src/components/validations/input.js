import validator from 'validator';

export function ValidateURL(value) { 
  return validator.isURL(value);
};

export function ValidateShorterId(value) { 
  value = String(value).replace(/-/g, '');
  return validator.isAlphanumeric(value);
}
