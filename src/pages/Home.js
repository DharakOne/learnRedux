import React, { useEffect, useState } from 'react'
import { db } from '../redux-firebase/configFirebase'

export default function Home() {
      const [projects, setProjects] = useState([])

    useEffect(() => {
        db.collection('projects').get().then(function (querySnapshot) {
            const dataProjects = []
            querySnapshot.forEach(function (doc) {
                const dataProject={...doc.data() ,id:doc.id}
                dataProjects.push(dataProject)
                
            })
            setProjects(dataProjects)
        });
    }, [])
    console.log(projects)

    return (
        <div className='Home'>
            <h2>Projectos</h2>
            {projects.map(project=>(
                <div className='project' key={project.id}>
                <h5>{project.title}</h5>
                <p>{project.content}</p>
                </div>
            ))}
        </div>
    )
}