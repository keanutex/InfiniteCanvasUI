import React, {useState} from 'react';
import './App.css';
import {Screen} from './Components/Styled-Components/styled-components';
import Modal from './Components/modal';
import Canvas from './Components/canvas';
import Palette from './Components/palette';
import AdminButtonArea from './Components/adminbuttonarea';

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({ userId: null, typeId: null, statusId: null });

  return (
    <Screen>
      {!user && <Modal setUser={setUser} user={user} userData={userData} setUserData={setUserData} /> }
      <Canvas />
      {user && <Palette />}
      {(userData.typeId===2) && <AdminButtonArea setUser={setUser} user={user} userData={userData} setUserData={setUserData} />}
    </Screen>
  );
}

export default App;
