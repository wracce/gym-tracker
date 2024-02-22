import { baseApi } from 'shared/api';
import { RequestLogin } from '../model/request-login';
import { User } from '../model/user';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.query<User, RequestLogin>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    register: build.query<User, User>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLazyLoginQuery, useLazyRegisterQuery} = authApi;
