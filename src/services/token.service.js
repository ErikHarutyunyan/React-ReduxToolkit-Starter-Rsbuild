class TokenService {
  static getLocalRefreshToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.refresh;
  }

  static getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.access;
  }

  static updateLocalAccessToken(token) {
    const user = JSON.parse(localStorage.getItem('user'));
    user.access = token;
    localStorage.setItem('user', JSON.stringify(user));
  }

  static getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  static setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  static removeUser(user = 'user') {
    localStorage.removeItem(user);
  }
}

export default TokenService;
