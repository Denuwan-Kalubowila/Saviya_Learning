import './page.css';

export default function SignUp() {
  return (
    <main>
      <div className='signbox'>
        <h1 className='signtext'>Sign Up</h1>
        <p className='first-text'>Nice to meet you! Enter your details to register.</p>

        <form>
          <h3 className='boxes'>Your Name</h3>
          <input type='text' className='name-input' placeholder='Enter Your Name' />

          <h3 className='boxes'>Your Email</h3>
          <input type='email' className='name-input' placeholder='Enter Your Email' />

          <h3 className='boxes'>Password</h3>
          <input type='password' className='name-input' placeholder='Enter Your Password' />

          <div className="content-inline" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <input type="checkbox" className="cbox" />
            <p style={{ marginLeft: '8px' }}>I agree to the terms and conditions.</p>
          </div>

          <div className='signbutton'>
            <button type='submit'>SIGN UP</button>
          </div>
        </form>

        <p className='acc'>Already have an account?
        <button type='button'><u>Sign In</u></button></p><br/>
        <div className="divider">
  <hr className="line" />
  <span className="or-text">Sign up with</span>
  <hr className="line" />
</div>
      </div>
    </main>
  );
}
