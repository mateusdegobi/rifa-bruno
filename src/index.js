import React from 'react';
import ReactDOM from 'react-dom';
import './presets.css';
import App from './App';
import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: "AIzaSyCBSzzhNwgHMu65JkZe-VkhVGx0mh1y2X4",
  authDomain: "rifa-bruno.firebaseapp.com",
  databaseURL: "https://rifa-bruno-default-rtdb.firebaseio.com",
  projectId: "rifa-bruno",
  storageBucket: "rifa-bruno.appspot.com",
  messagingSenderId: "371803857015",
  appId: "1:371803857015:web:819b666fa4b47f5679e672"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
