export const getAuthError = state => state.auth.error || {};

export const isAuth = state => state.auth.isLogin;

export const user = state => state.auth.user;
