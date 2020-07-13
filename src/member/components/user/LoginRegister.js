import React from 'react';
class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.user = React.createRef();
    this.pass = React.createRef();
  }

  registerAccount = () => {
    const { register } = this.props;
    register.registerAction(this.user.current.value, this.pass.current.value);
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('logout').style.display = 'block';
  };
  handleSubmit = () => {
    const { LoginAction } = this.props;
    LoginAction.loginAction(this.user.current.value, this.pass.current.value);
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('logout').style.display = 'block';
  };
  render() {
    return (
      <div id='loginForm' className="hiddenForm">
        <div className='container'>
          <h2 style={{ textAlign: 'center' }}>Register or Login</h2>
          <div className='row'>
            <div className='col'>
              <div className="row">
                <input type='text' className="col-md-5" name='uid' placeholder='Username' ref={this.user} required />
                <span className="col-md-1"></span>
                <input type='password' className="col-md-5" name='pwd' placeholder='Password' ref={this.pass} required />
              </div><br />
              <div className="row">
                <button className="btn btn-success col-md-5" onClick={this.registerAccount} >Register</button>
                <p className="col-md-1" style={{ textAlign: "center" }}></p>
                <button className="btn btn-success btnLogin col-md-5" onClick={this.handleSubmit} >Login</button>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-container'>
          <div className='row'>
            <div className='col'>
              <a href='/#' style={{ color: 'white' }} className='btn'>
                Điều khoản dịch vụ
              </a>
            </div>
            <div className='col'>
              <a href='/#' style={{ color: 'white' }} className='btn'>
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
