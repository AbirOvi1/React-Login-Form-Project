import './App.css';
import profile from './pics/a.png';
import email from './pics/email.jpg';
import pass from './pics/pass.png';

function App() {
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
              
             
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
            <img src={email} alt="email" className="email" />
            <input type="text" placeholder="user name" className="name" required/>
            </div>
            <div className="second-input">
            <img src={pass} alt="pass" className="pass" />
            <input type="password" placeholder="password" className="name" required/>
            </div>
            <div className="login-button">
            <button>Login</button>
            </div>
            
              <p className="link">
                <a href="/#">Forgot Password?</a> or <a href="/#">Sign Up</a>
              </p>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
