export const getFieldRequiredErrorMsg = (fieldName: string) =>
  `${fieldName} is required`;

export const getFieldInvalidErrorMsg = (fieldName: string) =>
  `${fieldName} is invalid`;

export const getFieldMinLengthErrorMsg = (
  fieldName: string,
  minLength: number,
  dataType: string,
) => `${fieldName} should contain at least ${minLength} ${dataType}`;

export const getFieldMaxLengthErrorMsg = (
  fieldName: string,
  maxLength: number,
  dataType: string,
) => `${fieldName} should contain less than ${maxLength} ${dataType}`;

export const getFieldExactLengthErrorMsg = (
  fieldName: string,
  exactLength: number,
  dataType: string,
) => `${fieldName} should exactly contain ${exactLength} ${dataType}`;
