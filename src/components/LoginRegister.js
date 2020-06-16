import React from 'react';
class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.user = React.createRef();
    this.pass = React.createRef();
  }

  handleSubmit = (eve) => {
    eve.preventDefault();
    const { LoginAction } = this.props;
    console.log(this.user.current.value);
    LoginAction.loginAction(this.user.current.value, this.pass.current.value);
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('logout').style.display = 'block';
  };
  render() {
    return (
      <div id='loginForm'>
        <div className='container'>
          <h2 style={{ textAlign: 'center' }}>Register or Login</h2>
          <form action='/#' onSubmit={this.handleSubmit} method='post'>
            <div className='row'>
              <div className='vl'>
                <span className='vl-innertext'>or</span>
              </div>
              {/* <div className="col">
                <div className="hide-md-lg">
                  <p>Or sign in manually:</p>
                </div>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="password" name="repassword" placeholder="Repeat password" required />
                <input type="submit" value="Register" />
              </div> */}
              {/* <div className="col">
              <a href="#" className="fb btn">
                <i className="fa fa-facebook fa-fw"></i> Login with Facebook
              </a>
              <a href="#" className="twitter btn">
                <i className="fa fa-twitter fa-fw"></i> Login with Twitter
              </a>
              <a href="#" className="google btn"><i className="fa fa-google fa-fw">
              </i> Login with Google+
              </a>
            </div> */}

              <div className='col'>
                <div className='hide-md-lg'>
                  <p>Or sign in manually:</p>
                </div>
                <input
                  type='text'
                  name='uid'
                  placeholder='Username'
                  ref={this.user}
                  required
                />
                <input
                  type='password'
                  name='pwd'
                  placeholder='Password'
                  ref={this.pass}
                  required
                />
                <input type='submit' value='Login' />
              </div>
            </div>
          </form>
        </div>

        <div className='bottom-container'>
          <div className='row'>
            <div className='col'>
              <a
                href='google.com.vn'
                style={{ color: 'white' }}
                className='btn'
              >
                Điều khoản dịch vụ
              </a>
            </div>
            <div className='col'>
              <a
                href='google.com.vn'
                style={{ color: 'white' }}
                className='btn'
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginRegister;
