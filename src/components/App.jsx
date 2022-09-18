import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthError } from 'redux/auth/auth-selectors';

import Header from 'components/Header/Header';

const Home = lazy(() => import('components/Home/Home'));
const Phonebook = lazy(() => import('components/Phonebook/Phonebook'));
const SingupForm = lazy(() => import('components/SingupForm/SingupForm'));
// const Cast = lazy(() => import('components/Cast/Cast'));
// const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  const { status: statusError, message: messageError } =
    useSelector(getAuthError);

  return (
    <>
      <Header />
      <Suspense fallback={<p>...Load page</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Phonebook />} />
          <Route
            path="/register"
            element={
              <SingupForm>
                {statusError &&
                  alert(`User ${messageError} is already registered`)}
              </SingupForm>
            }
          />
          {/* <Route path="/login" element={}></Route> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
