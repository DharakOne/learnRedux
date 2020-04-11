import React, {useState} from "react"
import { db } from '../redux-firebase/configFirebase'


export default function CreateProject() {
    const [state, setState] = useState(
        {
            title: ''
            , content: '',
        })

    function createProject(e) {
        e.preventDefault()
        db.collection("projects").add({
            title: state.title,
            content: state.content,
        }).then(function (){
            console.log('projects added')
        }).catch((e)=>console.log('A error ocurrido:',e))

        setState({ title: '', content: '' })

    }
    function handlechangevalue(e) {
        const name = e.target.name
        setState({ ...state, [name]: e.target.value })
        console.log(state)
    }
    return (
        <div className="createProject">
            <h2 style={{ display: 'block' }}>Create Project</h2>
            <form onSubmit={createProject} action="">
                <h4>Title</h4>
                <input type="text" name="title" id="title"
                    placeholder="please write your title"
                    onChange={handlechangevalue}
                    value={state.title} />
                <h4>Content</h4>
                <input type="text" name="content" id="content"
                    placeholder="please write your content"
                    onChange={handlechangevalue}
                    value={state.content} />
                <button type="submit" style={{ display: 'block', marginTop: '15px' }}>Submit </button>
            </form>
        </div>
    )
}