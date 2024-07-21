import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { userLogin } from '@app/features/user/userActions';

import { schema_signIn } from '@utils/authShema';

import TokenService from '@services/token.service';

import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
  const { loading, userInfo, error } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    // onSubmit
    resolver: yupResolver(schema_signIn),
  });

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate(fromPage, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, userInfo]);

  const submitForm = data => {
    dispatch(userLogin(data));
    TokenService.setUser(data);
    // Demonstration
    navigate(fromPage, { replace: true });
  };
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {error && <p>{error}</p>}
      {/* {errors && <Error msg={errors} />} */}
      <div className="form-group">
        {errors?.email?.message && <p>{errors.email.message}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-input"
          {...register('email')}
          required
        />
      </div>
      <div className="form-group">
        {errors?.password?.message && <p>{errors.password.message}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-input"
          {...register('password')}
          required
        />
      </div>
      <button type="submit" className="button" disabled={loading}>
        Login
      </button>
    </form>
  );
};

export default Login;
