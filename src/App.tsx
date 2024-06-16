import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInPage } from './Components/Form/SignInPage';
import { SignUpPage } from './Components/Form/SignUpPage';
import { MainPage } from './Components/MainPage/MainPage';
import { NotFound } from './Components/NotFound/NotFound';
import { User } from './Components/User/User';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { UserNotFound } from './Components/NotFound/UserNotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<SignInPage />}></Route>
          <Route path='/register' element={<SignUpPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/404' element={<UserNotFound />}></Route>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='user/:id'
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
