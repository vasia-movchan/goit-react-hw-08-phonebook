import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { current } from 'redux/auth/auth-operations';

import Header from 'components/Header/Header';
import PrivateRoute from 'components/Routes/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute/PublicRoute';

const Home = lazy(() => import('components/Home/Home'));
const Phonebook = lazy(() => import('components/Phonebook/Phonebook'));
const SignupForm = lazy(() => import('components/SignupForm/SignupForm'));
const LoginForm = lazy(() => import('components/LoginForm/LoginForm'));
// const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

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
            <Route path="/register" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
