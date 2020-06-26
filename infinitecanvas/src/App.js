import React, {useState} from 'react';
import './App.css';
import {Screen} from './Components/Styled-Components/styled-components';
import Modal from './Components/modal';
import Canvas from './Components/canvas';
import Palette from './Components/palette';
import AdminButtonArea from './Components/adminbuttonarea';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Screen>
      {!user && <Modal setUser={setUser} user={user} /> }
      <Canvas />
      {user && <Palette />}
      {user && <AdminButtonArea />}
    </Screen>
  );
}

export default App;
