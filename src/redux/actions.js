/** @format */

export function setValoresCandendy(values) {
  return {
    type: "VALUES_CALENDY",
    payload: values,
  };
}


export function setValoresCandendyUser(values) {
  return {
    type: "VALUES_CALENDY_USER",
    payload: values,
  };
}

export function next() {
  return {
    type: "NEXT"
  };
}


export function close() {
  return {
    type: "CLOSE"
  };
}