import { React } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import Image from './components/Image'


function Login() {

  return (
    <div className="App">
      <Image>
          <LoginForm/>
      </Image>
    </div>
  )
}

export default Login