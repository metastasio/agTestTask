import { BrowserRouter, Route } from 'react-router-dom';
import { SingInPage } from './Components/SignIn/SignInPage';
import { SignUpPage } from './Components/SignUp/SignUpPage';
import { MainPage } from './Components/MainPage/MainPage';
import { NotFound } from './Components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path='/login' element={<SingInPage />}></Route>
        <Route path='/register' element={<SignUpPage />}></Route>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
