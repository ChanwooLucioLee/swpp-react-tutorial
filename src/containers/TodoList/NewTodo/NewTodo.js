import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import './NewTodo.css'
import history from '../../../history'

const NewTodo = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const postTodoHandler = () => {
    const data = { title, content }
    alert('Submitted\n' + title + '\n' + content)
    setSubmitted(true)
    history.push('/todos')
  }

  if (submitted) {
    return <Redirect to="todos" />
  }

  return (
    <div className="NewTodo">
      <h1>Add a Todo</h1>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Content</label>
      <textarea
        rows="4"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={postTodoHandler}>Submit</button>
    </div>
  )
}

export default NewTodo
