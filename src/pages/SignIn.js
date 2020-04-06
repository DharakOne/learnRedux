import React, { useState } from 'react'
import { auth } from '../redux-firebase/configFirebase'

export default function SignIn() {

    const [state, setState] = useState(
        { email: ''
        , password: '' })

    function createUser(e) {
        e.preventDefault()

        auth().signInWithEmailAndPassword(state.email, state.password)
            .then(()=>(console.log('The sign in succeded')))
            .catch(error=>console.log('The sign in   failed',error))
        setState({email:'',password:''})

    }
    function handlechangevalue(e) {
        const name = e.target.name
        setState({ ...state, [name]: e.target.value })
        console.log(state)
    }
    return (
        <div className='SignIn' >
            <h2 style ={{display:'block'}}>Sing In</h2>
            <form   onSubmit={createUser} action="">
                <h4>Email</h4>
                <input type="text" name="email" id="email"
                    placeholder="please write your email"
                    onChange={handlechangevalue}
                    value={state.email} />
                <h4>Password</h4>
                <input type="password" name="password" id="password"
                    placeholder="please write your password"
                    onChange={handlechangevalue}
                    value={state.password} />
                <button  type="submit" style={{ display: 'block', marginTop: '15px' }}>Submit </button>
            </form>
        </div>
    )
}