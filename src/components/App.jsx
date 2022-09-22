import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthError } from 'redux/auth/auth-selectors';

import Header from 'components/Header/Header';
import PrivateRoute from 'components/Routes/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute/PublicRoute';

const Home = lazy(() => import('components/Home/Home'));
const Phonebook = lazy(() => import('components/Phonebook/Phonebook'));
const SignupForm = lazy(() => import('components/SignupForm/SignupForm'));
const LoginForm = lazy(() => import('components/LoginForm/LoginForm'));
// const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  const { status: statusError, message: messageError } =
    useSelector(getAuthError);

  // const error = useSelector(getAuthError);

  return (
    <>
      <Header />
      <Suspense fallback={<p>...Load page</p>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Phonebook />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route
              path="/register"
              element={
                <SignupForm>
                  {statusError &&
                    messageError &&
                    alert(`User ${messageError} is already registered`)}
                </SignupForm>
              }
            />
            <Route
              path="/login"
              element={
                <LoginForm>
                  {statusError &&
                    !messageError &&
                    alert('Invalid login or password')}
                </LoginForm>
              }
            />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
