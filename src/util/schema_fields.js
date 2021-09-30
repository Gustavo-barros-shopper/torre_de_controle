import React from 'react';
import {FormattedMessage} from 'react-intl';
import * as Yup from 'yup';
import {cnpj, cpf, rg, phone, zip_code, driver_license, antt, license_plate} from './validators';

export const RequiredString = Yup.string()
    .required(<FormattedMessage id="general.forms_errors.required"/>);

export const RequiredNumber = Yup.number(<FormattedMessage id="general.forms_errors.number"/>)
    .required(<FormattedMessage id="general.forms_errors.required"/>);

export const RequiredBool = Yup.bool()
    .required(<FormattedMessage id="general.forms_errors.required"/>);

export const RequiredDate = Yup.date()
    .required(<FormattedMessage id="general.forms_errors.required"/>);

export const RequiredDateGTEToday = Yup.date()
    .min(new Date().toISOString(), <FormattedMessage id="general.form_errors.date_lt_today" />)
    .required(<FormattedMessage id="general.forms_errors.required"/>);

export const RequiredEmail = Yup.string()
        .email(<FormattedMessage id="general.forms_errors.invalid_email"/>)
        .required(<FormattedMessage id="general.forms_errors.required"/>);

export const RequiredCNPJ = Yup.string()
    .required(<FormattedMessage id="general.forms_errors.required"/>)
    .test('valid-cnpj', <FormattedMessage id="general.forms_errors.invalid_cnpj" />, cnpj);

export const RequiredCPF = Yup.string()
    .required(<FormattedMessage id="general.forms_errors.required"/>)
    .test('valid-cpf', <FormattedMessage id="general.forms_errors.invalid_cpf" />, cpf);

export const RequiredRG = Yup.string()
    .required(<FormattedMessage id="general.forms_errors.required"/>)
    .test('valid-rg', <FormattedMessage id="general.forms_errors.invalid_rg" />, rg);

export const RequiredPhone = Yup.string()
    .required(<FormattedMessage id="general.forms_errors.required"/>).max(16)
    .test('valid-phone', <FormattedMessage id="general.forms_errors.invalid_phone" />, phone);

export const RequiredZipCode = Yup.string()
    .required(<FormattedMessage id="general.forms_errors.required"/>).max(16)
    .test('valid-zip', <FormattedMessage id="general.forms_errors.invalid_zip" />, zip_code);

export const RequiredPlate = Yup.string()
    .required(<FormattedMessage id="general.forms_errors.required"/>).max(8).min(7)
    .test('valid-plate', <FormattedMessage id="general.forms_errors.invalid_plate" />, license_plate)
    .transform(function(value, rawValue) {
        return value !== null ? value.toUpperCase() : value
    });

export const RequiredANTT = Yup.string()
    .required(<FormattedMessage id="general.forms_errors.required"/>).max(14)
    .test('valid-antt', <FormattedMessage id="general.forms_errors.invalid_antt" />, antt);

export const RequiredDriverLicense= Yup.string()
    .required(<FormattedMessage id="general.forms_errors.required"/>).max(12)
    .test('valid-license', <FormattedMessage id="general.forms_errors.invalid_driver_license" />, driver_license);


export const ZipCode = Yup.string()
    .nullable().max(16)
    .test('valid-zip', <FormattedMessage id="general.forms_errors.invalid_zip" />, zip_code);

export const Phone = Yup.string()
    .nullable().max(16)
    .test('valid-phone', <FormattedMessage id="general.forms_errors.invalid_phone" />, phone);
