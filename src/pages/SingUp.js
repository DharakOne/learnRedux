import React, { useState } from 'react'
import { auth } from '../redux-firebase/configFirebase'

export default function SingUp() {

    const [state, setState] = useState(
        { email: ''
        , password: '' })

    function createUser(e) {
        e.preventDefault()

        auth().createUserWithEmailAndPassword(state.email, state.password)
            .then(()=>(console.log('The register is succed')))
            .catch(error=>console.log('The register is failed',error))
        setState({email:'',password:''})

    }
    function handlechangevalue(e) {
        const name = e.target.name
        setState({ ...state, [name]: e.target.value })
        console.log(state)
    }
    return (
        <div className='Register' >
            <h2 style ={{display:'block'}}>Register</h2>
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