import './Login.css'
import { useNavigate } from 'react-router-dom'


function Login() {

  let navigate = useNavigate();
  const checkCredentials = () => {
    navigate('/Home')
  }


  return (

    <div class="maincontainer">
      {/* Left container  */}

      <div class="overlay-container">
        <div class="overlay">

          <div class="overlay-panel overlay-right">

            <h1 class="login_form__title">Muhammad Dental Clinic!</h1>
            <p class='login_page_subtitle'>A State-of-the-art Dental Care Unit</p>

          </div>
        </div>
      </div>


      {/* Right container */}
      <div class="form-container sign_in_container">
        <form class="login_form" id="login">
          <h1 class="login_form_title">Login</h1>
          <div class="form__input-group">
            <label >Username: </label>
            <input type="text" class="login_input" name="username" required />
          </div>
          <div class="form__input-group">
            <label >Password: </label>
            <input class="login_input" type="password" name="pass" required />
          </div>
          <div class="form__input-group">
            <button onClick={() => checkCredentials()} type="submit" class="login_form_button">Login</button>
          </div>
        </form>
      </div>



    </div>
  
  )
}

export default Login