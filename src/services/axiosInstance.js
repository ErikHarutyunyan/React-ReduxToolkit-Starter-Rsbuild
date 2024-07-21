import axios from 'axios';

import { API_ENDPOINT } from '@configs';

import TokenService from './token.service';

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const authTokens = TokenService.getUser() || '';
    if (authTokens) {
      config.headers['Authorization'] = `Bearer ${authTokens.JwtToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    const originalConfig = err.config;

    if (
      originalConfig.url !== `${API_ENDPOINT}Account/Authorize` &&
      err.response
    ) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        const authTokens = TokenService.getUser() || '';

        try {
          const response = await axiosInstance.post(
            `${API_ENDPOINT}Account/RefreshToken`,
            {
              refreshToken: authTokens.RefreshToken,
            },
          );

          const newToken = response.data.item;
          TokenService.setUser({
            ...authTokens,
            JwtToken: newToken.jwtToken,
            JwtTokenExpiresUtc: newToken.jwtTokenExpiresUtc,
            RefreshToken: newToken.refreshToken,
            RefreshTokenExpiresUtc: newToken.refreshTokenExpiresUtc,
          });

          return axiosInstance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  },
);

export default axiosInstance;
