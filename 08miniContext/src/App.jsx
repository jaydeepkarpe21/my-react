
import './App.css'
import Login from './components/Login'
import Profile from './components/profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Jay and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
