import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Avatar, Button, Layout, Space } from "antd";
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig'

// import LoginForm from "../components/LoginForm";
// import RegisterForm from "./components/RegisterForm";
import SearchBar from "./SearchBar";
import ModalSignIn from '../modals/ModalSignIn';
import { onAuthStateChanged } from 'firebase/auth';
import ModalLogin from '../modals/ModalLogin';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';

const { Header } = Layout

function HeaderComponent()
{

  const [isSingIn, setisSingIn] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [user, setUser] = useState();

  // const user = auth.currentUser

  useEffect(() =>
  {

    onAuthStateChanged(auth, user =>
    {
      if (user) {

        setUser(user)
      } else {
        setUser()
      }
    })
  }, [])


  return (
    <Header
      style={{ margin: 10, background: "#ffffff" }}
      className="rounded justify-between flex space-x-4 "
    >
      <Space className="left">
        {/* <button onClick={goBack}><ArrowBackIosNewIcon /></button> */}
        {/* <SearchBar
          onSearch={onSearch}
          searchVisible={searchVisible}
        /> */}
      </Space>
      {
        user ? <Space>
          <Avatar />
          <Button onClick={() => auth.signOut()}>Logout</Button>
        </Space> : <Space className="right">

          <Button onClick={() => setisSingIn(true)}>Sign in</Button>
          <Button onClick={() => setIsLogin(true)}>Login</Button>

        </Space>
      }


      <ModalSignIn isVisible={isSingIn} onClose={() => setisSingIn(false)} />
      <ModalLogin isVisible={isLogin} onClose={() => setIsLogin(false)} />
    </Header>
  )
}

export default HeaderComponent