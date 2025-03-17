import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Costom App | JSX</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank"
//   },
//   Children: 'Click me to visit google'
// }

const anotherUser = "chai aur code"


const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google React",
  anotherUser
)

createRoot(document.getElementById('root')).render(

  ReactElement
  //<App />

)
