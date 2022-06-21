import { Route, Routes } from 'react-router-dom';
import './App.css';
import MessagesContainer from './components/pages/Chat/MessagesContainer';
import Login from './components/pages/login/Login';
import Posts from './components/pages/posts/Posts';
import ProfileContainer from './components/pages/Profile/ProfileContainer';
import Register from './components/pages/registration/Register';
import Settings from './components/pages/settings/Settings';
import UserContainer from './components/pages/users/UserContainer';
import { NavBar } from './components/SideBar/navbar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="profile" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="messages" element={<MessagesContainer />} />
          <Route path="users" element={<UserContainer />} />
          <Route path="posts" element={<Posts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
