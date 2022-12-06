var CryptoJS = require("crypto-js");
const { 
  REACT_APP_BASE_URL,
  REACT_APP_BASE_VERSION,
  REACT_APP_SECRET_KEY,
  REACT_APP_DEBUG,
  REACT_APP_RECAPTCHA_SITE_KEY,
  REACT_APP_API_KEY
} = process.env;

export const Version = `Ver ${REACT_APP_BASE_VERSION}`;

export const RECAPTCHA_SITE_KEY = REACT_APP_RECAPTCHA_SITE_KEY;

export const BASE_GEOCODE_URL =
  "https://maps.googleapis.com/maps/api/geocode/json?key=";

export const GOOGLE_MAPS_KEY = "Llave de maps";

export const URL_PUBLICA = `${REACT_APP_BASE_URL}/`;

export const TOKEN = REACT_APP_API_KEY;

export const DEBUG = (REACT_APP_DEBUG.toLowerCase() === "true");

export const numberWithCommas = (x) => {
  if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  else return "-";
};

export const setVars = (id, Value) => {
  var ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(Value),
    REACT_APP_SECRET_KEY
  ).toString();

  sessionStorage.setItem(id, ciphertext);

  var bytes = CryptoJS.AES.decrypt(ciphertext, REACT_APP_SECRET_KEY);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  return originalText;
};

export const getVars = (id, defaultvar = {}) => {
  const data = sessionStorage.getItem(id);

  let originalText = null;
  if (data !== null) {
    var bytes = CryptoJS.AES.decrypt(data, REACT_APP_SECRET_KEY);
    originalText = bytes.toString(CryptoJS.enc.Utf8);
  }

  return originalText !== null ? JSON.parse(originalText) : defaultvar;
};

const substitutionsAfterEncryption = new Map([
  ['+', '-'],
  ['/', '_'],
  ['=', '~'],
]);
const substitutionsBeforeDecryption = new Map([
  ['-', '+'],
  ['_', '/'],
  ['~', '='],
]);

export const encryptVars = (text) => {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(text),
    REACT_APP_SECRET_KEY
  ).toString();

  return encrypted.replace(
    /[+/=]/g,
    (match) => substitutionsAfterEncryption.get(match) ?? match
  );
}

export const decryptVars = (text, defaultvar) => {
  let decrypted = null;

  const toDecrypt = text.replace(
    /[-_~]/g,
    (match) => substitutionsBeforeDecryption.get(match) ?? match
  );

  if (toDecrypt !== null) {
    const bytes = CryptoJS.AES.decrypt(toDecrypt, REACT_APP_SECRET_KEY);
    decrypted = bytes.toString(CryptoJS.enc.Utf8);
  }

  return decrypted !== null ? JSON.parse(decrypted) : defaultvar;
}
