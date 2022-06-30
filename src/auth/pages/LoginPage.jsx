import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


const LoginPage = () => {

  const navigateLogin = useNavigate()

  const { login } = useContext(AuthContext)

  const HandleLogOut = () => {
  
    login( 'Mario E' )

    navigateLogin('/', {
      replace: 
      true
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />

      <button
      onClick={ HandleLogOut }
      className="btn btn-primary">
        Login
      </button>
    </div>
  )
}

export default LoginPage