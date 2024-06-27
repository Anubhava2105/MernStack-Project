import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider,Navigate} from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Nav from'./components/navbar/Nav.jsx';
import Body from './components/body/Body.jsx';
import Sign from './components/signup/Sign.jsx';
import Market from './components/marketplace/Market.jsx';
import GameInfo from './components/marketplace/gameInfo.jsx';
import { UseAuthContext } from './hooks/useAuthContext.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<Body/>} />
      <Route path="login" element ={<Login />} />
      <Route path="signup" element ={<Sign />} />
      <Route path="games" element={< Market />} />
      <Route path="games/gameinfo/:id" element={< GameInfo />} />
    </Route>
  )
)
function App() {
  const {user}=UseAuthContext();
  return(
    <RouterProvider router={router} />
  );
}

export default App
