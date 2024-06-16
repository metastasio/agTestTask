import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInPage } from './Components/Form/SignInPage';
import { SignUpPage } from './Components/Form/SignUpPage';
import { MainPage } from './Components/MainPage/MainPage';
import { NotFound } from './Components/NotFound';
import { User } from './Components/User/User';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<SignInPage />}></Route>
          <Route path='/register' element={<SignUpPage />}></Route>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='user/:id' element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
