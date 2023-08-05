import {
  getFieldExactLengthErrorMsg,
  getFieldInvalidErrorMsg,
  getFieldMinLengthErrorMsg,
  getFieldRequiredErrorMsg,
} from '@/app/lib/utils/common';
import { isPossibleNumber } from 'libphonenumber-js';
import * as yup from 'yup';

export const AdoptionFormValidation = yup.object({
  firstName: yup
    .string()
    .min(2, getFieldMinLengthErrorMsg('First Name', 2, 'characters'))
    .required(getFieldRequiredErrorMsg('First Name'))
    .test('firstName', getFieldInvalidErrorMsg('Spaces'), (value) => {
      return !!value.trim();
    }),
  lastName: yup
    .string()
    .min(2, getFieldMinLengthErrorMsg('Last Name', 2, 'characters'))
    .required(getFieldRequiredErrorMsg('Last Name'))
    .test('lastName', getFieldInvalidErrorMsg('Spaces'), (value) => {
      return !!value.trim();
    }),
  email: yup
    .string()
    .email(getFieldInvalidErrorMsg('Email'))
    .required(getFieldRequiredErrorMsg('Email')),
  phoneNumber: yup
    .string()
    .required(getFieldRequiredErrorMsg('Phone Number'))
    .test('phoneNumber', 'Invalid phone number', (value) => {
      return value.includes('+')
        ? isPossibleNumber(value, undefined)
        : isPossibleNumber(value, 'PH');
    }),
});
