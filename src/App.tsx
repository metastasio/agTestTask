import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SingInPage } from './Components/SignIn/SignInPage';
import { SignUpPage } from './Components/SignUp/SignUpPage';
import { MainPage } from './Components/MainPage/MainPage';
import { NotFound } from './Components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<SingInPage />}></Route>
          <Route path='/register' element={<SignUpPage />}></Route>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
