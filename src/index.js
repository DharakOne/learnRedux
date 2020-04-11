import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import  {whatCherUser} from './redux-firebase/service/whacherAuth'
import  {db} from './redux-firebase/configFirebase'

 
whatCherUser()


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

