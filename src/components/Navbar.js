import React from 'react'
import { Link } from 'react-router-dom'
import './style/Navbar.css'
import {auth} from '../redux-firebase/configFirebase'
import {useHistory} from  'react-router-dom'

export function Navbar() {
    const history=useHistory()
    function SignOut (){
        auth().signOut()
        .then(()=>{
            console.log('Sign out succed')
            history.push('/')
         } )
        .catch(()=>{console.log('Sign out succed')})
    }
    return (
        <div >
            <ul className='Navbar'>
                <li> <Link className='navLink' to='/' >Home</Link> </li>
                <li> <Link className='navLink' to='/SingUp' >SingUp</Link> </li>
                <li> <Link className='navLink' to='/SingIn' >SingIn</Link> </li>
                <li> <a className='navLink' onClick={SignOut} >SingOut</a> </li>

            </ul>
        </div>
    )
}