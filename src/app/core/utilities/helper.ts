import { MatTable } from '@angular/material';
import { Router } from '@angular/router';

export function isEmpty(args: any): boolean {
  return args === null || args === undefined || args === '' || args.length === 0;
}

export function isNotEmpty(args: any): boolean {
  return !isEmpty(args);
}

export function removeTheFirstChar(args: string): string {
  if (isEmpty(args)) {
    return '';
  }
  return args.substring(1, args.length);
}

export function removeTheLastChar(args: string): string {
  if (isEmpty(args)) {
    return '';
  }
  return args.substring(0, args.length - 1);
}

export function convertStringToISOS(args: string): string {
  if (!isEmpty(args)) {
    return new Date(args).toISOString();
  }
}

export function isString(object: any): boolean {
  return typeof object === 'string';
}

export function isDecimal(value: any) {
  const DECIMAL_REGEX = /^\d*\.{1}\d+$/;
  return DECIMAL_REGEX.test(value);
}

export function stringToBoolean(value: string) {
  return value === 'true';
}

export function booleanToString(value: boolean) {
  return value === true ? 'true' : 'false';
}

export function deepCopyObject(source, target) {
  Object.keys(source).forEach(property => {
    target[property] = source[property];
  });
}

export function refreshDataTable(table: MatTable<any>) {
  if (table && table.dataSource) {
    table.renderRows();
  }
}

export function deepCloneObject(source: any): Object {
  const result = {};
  Object.keys(source).forEach(property => {
    result[property] = source[property];
  });
  return result;
}

/**
 * Round decimal number with number of decimal
 * Because Number.toFixed() not meet expectation for round decimal number, so need create function to rounding decimal number.
 * @param originNumber decimal number
 * @param numberOfDecimal number of decimal
 */
export function roundingNumberDecimal(originNumber: number, numberOfDecimal: number): Number {
  let decimal = '1';
  for (let i = 0; i < numberOfDecimal; i++) {
    decimal = decimal + 0;
  }
  const decimalNum = Number(decimal);
  return Math.round(Number(originNumber) * decimalNum) / decimalNum;
}

export function subStringText(str: string, maxlength: number) {
  if (str.length > maxlength) {
    str = str.substring(0, maxlength);
    const n = str.lastIndexOf(';');
    str = str.substring(0, n);
  }
  return str;
}
const CHARATERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export function generateRandomCode(length: number = 12) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += CHARATERS.charAt(Math.floor(Math.random() * CHARATERS.length));
  }
  return result;
}
export function downLoadFile(response: any, filename: string = null) {
  if (window.navigator.msSaveOrOpenBlob) {
    // msSaveBlob only available for IE & Edge
    window.navigator.msSaveBlob(response, filename);
  } else {
    const downloadLink: any = document.createElement('a');
    downloadLink.download = filename;
    downloadLink.style1 = 'display: none';
    downloadLink.href = window.URL.createObjectURL(response);
    if (filename) {
      downloadLink.download = filename;
    }
    document.body.appendChild(downloadLink);
    downloadLink.click();
    window.URL.revokeObjectURL(downloadLink.href);
    downloadLink.parentNode.removeChild(downloadLink);
  }
}
