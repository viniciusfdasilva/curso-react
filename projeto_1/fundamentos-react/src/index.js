import React from 'react'
import ReactDOM from 'react-dom'

const tag = <strong>Olá React!!!!</strong>

ReactDOM.render(
  <div>
    { tag }
  </div> ,
  document.getElementById('root')
)