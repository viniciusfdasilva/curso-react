import './App.css';
import React from 'react'
import Cart from './components/Cart'

function App() {
  return (
    <div className="main">
      <Cart borderColor='#A52A2A' backgroundColor='#FA8072'/>
      <Cart borderColor='#2E8B57' backgroundColor='#E0FFFF'/>
      <Cart borderColor='#8B008B' backgroundColor='#DDA0DD'/>
      <Cart borderColor='#191970' backgroundColor='#836FFF'/>
    </div>
  );
}

export default App;