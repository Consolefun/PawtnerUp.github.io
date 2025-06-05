import React, { createElement } from 'react'
import './index.css'
import { render } from 'react-dom'
import { App } from './App'
// Add Google Fonts
const linkElement = document.createElement('link')
linkElement.rel = 'stylesheet'
linkElement.href =
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap'
document.head.appendChild(linkElement)
render(<App />, document.getElementById('root'))
