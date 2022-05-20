function saveUserToCookie(value) {
  document.cookie = `til_user=${value}`;
}

function saveAuthToCookie(value) {
  document.cookie = `til_auth=${value}`;
}

function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  );
}

function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveUserToCookie,
  saveAuthToCookie,
  getUserFromCookie,
  getAuthFromCookie,
  deleteCookie,
};
