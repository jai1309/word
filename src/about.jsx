import React from 'react'
import { Link } from 'react-router-dom';
const about = (props) => {
  return (
    <div className="card my-5 mx-2" style={{backgroundColor:props.text==='Dark'?'black':'white',color:props.text==='Dark'?'white':'black'}}>
  <div className="card-body">
    <p className="card-text">
    Welcome to Text Utils, your simple yet powerful text management tool! Whether you're a writer, student, developer, or anyone working with text, our tools help you edit, analyze, and transform your content effortlessly. 
    With features like text conversion, word count, and customization modes, we ensure you can focus on your task with ease and precision.
    At Text Utils, simplicity meets functionality. Dive in, edit text your way, and make every word count!
    </p>
    <Link to="/" className="btn btn-primary">Go Home</Link>
  </div>
</div>
  )
}

export default about
