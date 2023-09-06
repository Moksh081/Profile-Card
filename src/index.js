import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);
function App(){
  return <>
    <div className='card'>
        <div id='img'>
          <img src='me.jpg' alt='me'></img>
        </div>
        <div>
          <h3>Moksh Sharma</h3>
          <p>Full-stack web developer and teacher at Study Warriors. When not coding or prepearing a course ,
           I like to play chess, to eat , or to just enjoy the movies.</p>
        </div>
       <div id='bt'>
        <button id='a'>HTML + CSS</button>
        <button id='b'>JavaScript</button>
        <button id='c'>PHP + SQL</button>
        <button id='d'>React</button>
       </div>
    </div>
  </>
}
