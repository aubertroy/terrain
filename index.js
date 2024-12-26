import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

// import commencons from './pages/commencons.html'


// const link = document.createElement("a");
// link.setAttribute("href", commencons);
// link.textContent = "Commencons";
// document.body.appendChild(link);

// const appEL = document.getElementById('app')
// ReactDOM.render (<App />, appEL)

window.onload=function() {
    document.getElementById('but').onclick=function() {
      var w = window.open('localhost:1234/pages/commencons.html');
       return (!w); // opens in new window/tab if allowed
       console.log('index.js')
     }
   }