import {Link, useNavigate} from 'react-router-dom';

function LoginForm(props) {
  const navigate = useNavigate();
  // console.log(props)
  // console.log(props.nav)

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
    // props.setNavState("header standardh")
    // props.setNavState("standard")
    props.setStudentId(e.target.username.value)          
    
  }

  return (<div className="login-form">
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" autoFocus={true} name="username" placeholder='Username' required/>

        <input type="password" name="password"placeholder='Password' required/>
        <div id='submit-containter'>
        <input type="submit" id="login-btn" />
        <Link to="#">Forgot your password?</Link>
        </div>

    </form>

  </div>

  )
}

export default LoginForm