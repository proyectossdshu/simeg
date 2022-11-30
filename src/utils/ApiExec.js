import Swal from "sweetalert2";
import { isEmptyOrNullObject } from "./validations";
import { URL_PUBLICA, setVars, getVars, encryptVars, decryptVars, DEBUG, TOKEN } from "./global";


export const ApiExec = (data, api, method = "POST") => {
  let headers = new Headers();
  headers.append("Authorization", TOKEN);
  /* if (!isEmptyOrNullObject(getVars("Token"))) {
    const userData = getVars("Token");
    headers.append("Authorization", `API ${TOKEN}`);
  } */
  
  if (DEBUG) {
    headers.append("Content-Type", "application/json");
  } else {
    headers.append("Content-Type", "text/plain;charset=UTF-8");
  }

  return new Promise((resolve, reject) => {
    let requestInfo = {
      method: method,
      body: DEBUG ? JSON.stringify(data) : encryptVars(JSON.stringify(data)),
      headers: headers,
    };
    let url = "";

    switch (method) {
      case "GET":
        url = new URL(URL_PUBLICA + api);
        delete requestInfo.body;
        if (!isEmptyOrNullObject(data)) {
          Object.keys(data).forEach((key) => {
            const value = data[key];
            if (value !== "") {
              url.searchParams.append(key, data[key]);
            }
          });
        }
        break;

      case "POST":
      case "PUT":
      case "DELETE":
      case "PATCH":
      default:
        url = URL_PUBLICA + api;
        break;
    }

    let errorMessage = "";
    fetch(url, requestInfo)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        switch (res.status) {
          case 401:
            Swal.fire({
              title: "Su sesión ha expirado!",
              text: "Inicie sesión nuevamente",
              icon: "warning",
              showCancelButton: false,
              focusConfirm: true,
              confirmButtonText: "Iniciar sesión",
              allowOutsideClick: false,
              allowEscapeKey: false,
              // customClass: {
              //     container: "modal-alert",
              // },
            }).then((res) => {
              if (res.isConfirmed) {
                // window.sessionStorage.removeItem("userData");
                setVars("Token", { access_token: null });
                window.location.href = "/";
              }
            });

            errorMessage = "Su sesión ha expirado!";
            break;

          case 403:
            errorMessage = "Error en la validación.";
            break;

          case 404:
            errorMessage = "Api no encontrada.";
            break;

          case 429:
            errorMessage =
              "Su cuenta ha sido suspendida por 1 hora por demasiados intentos inválidos. Por favor inténtelo más tarde.";
            break;

          case 500:
            errorMessage = "Ocurrió un error, contacte al administrador.";
            break;

          default:
            errorMessage = res.statusText;
            break;
        }
        throw new Error(errorMessage);
      })
      .then((dataRS) => {
        if (!dataRS.success) {
          reject({ ...dataRS, results: false });
        } else {
          resolve({
            ...dataRS,
            response: DEBUG ? dataRS.response : decryptVars(dataRS.response),
          });
        }
      })
      .catch((errors) => {
        reject({
          results: false,
          data: {},
          message: errors.message,
        });
      });
  });
}

export const downloadFile = ({
  data,
  api,
  method = "GET"
}) => {
  let fileName = '';
  let headers = new Headers();

  if (!isEmptyOrNullObject(window.sessionStorage.getItem("userData"))) {
    const userData = JSON.parse(window.sessionStorage.getItem("userData"));
    headers.append("Authorization", `Bearer ${userData.access_token}`);
  }

  if (DEBUG) {
    headers.append("Content-Type", "application/json");
  } else {
    headers.append("Content-Type", "text/plain;charset=UTF-8");
  }

  return new Promise((resolve, reject) => {
    let link = URL_PUBLICA + api;

    let requestInfo = {
      method: method,
      body: DEBUG ? JSON.stringify(data) : encryptVars(JSON.stringify(data)),
      headers: headers,
    };
    let url = "";

    if (method === 'GET') {
      url = new URL(URL_PUBLICA + api);
      delete requestInfo.body;
      if (!isEmptyOrNullObject(data)) {
        Object.keys(data).forEach((key) => {
          const value = data[key];
          if (value !== "") {
            url.searchParams.append(key, data[key]);
          }
        });
      }
    }

    fetch(link, requestInfo)
      .then((response) => {
        if (response.ok) {
          const header = response.headers.get('Content-Disposition');
          const parts = header.split(';');
          // fileName = parts[1].split('=')[1];
          fileName = parts[1].split('=')[1].replaceAll("\"", "");
          return response.blob()
        }
        throw new Error("Error=>[url]: ", response.statusText);
      }
      )
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;

        link.setAttribute("download", fileName.trim());

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
        resolve({ success: true });
      })
      .catch((e) => {
        reject({ success: false, error: e });
      });
  });
};

export const uploadFiles = ({
  api = "global/uploadFiles",
  data,
  token,
  method = "POST",
}) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    createFormData(formData, "data", data);
    fetch(URL_PUBLICA + api, {
      method: method,
      body: formData,
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Ocurrio un error: ${api}: ${response.statusText}`);
      })
      .then((dataRS) => {
        if (dataRS.success) {
          resolve(dataRS);
        } else {
          reject({
            results: false,
            data: {},
            error: dataRS.error,
          });
        }
      })
      .catch((error) => {
        reject({
          results: false,
          data: {},
          error: error.message,
        });
      });
  });
};

export const uploadAndDownloadFile = ({
  api = "global/uploadFiles",
  data,
  token,
  fileName,
  method = "POST",
}) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    createFormData(formData, "data", data);
    fetch(URL_PUBLICA + api, {
      method: method,
      body: formData,
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((response) => {
        if (response.ok) return response.blob();
        throw new Error("Error=>[url]: ", response.statusText);
      })
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
        resolve({ success: true });
      })
      .catch((e) => {
        reject({ success: false, error: e });
      });
  });
};

function createFormData(formData, key, data) {
  if (
    (data === Object(data) && !(data instanceof File)) ||
    Array.isArray(data)
  ) {
    for (var i in data) {
      createFormData(formData, key + "[" + i + "]", data[i]);
    }
  } else {
    formData.append(key, data);
  }
}

export default ApiExec;
