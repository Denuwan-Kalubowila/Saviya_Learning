import './page.css'

export default function SignUp() {
  return (
    <main>
      <div className='signbox'>
        <h1 className='signtext'>
          Sign Up
        </h1>
        <p className='first-text'>
          Nice to meet you! Enter your details to register.
        </p>
        <h3 className='boxes'>
          Your Name
        </h3>
        <input type='text' className='name-input' placeholder='Enter Your Name'/>
        <h3 className='boxes'>
          Your Email
        </h3>
        <input type='text' className='name-input' placeholder='Enter Your Email'/>
        <h3 className='boxes'>
          Password
        </h3>
        <input type='text' className='name-input' placeholder='Enter Your Password'/><br/>
        <div className="content-inline" style={{ display: 'inline-flex', alignItems: 'center' }}>
  <input type="checkbox" className="cbox" />
  <p style={{ marginLeft: '8px' }}>I agree to the terms and conditions.</p>
</div>
<br/>
<div className='signbutton'>
  SignUp
</div>
<p className='acc'>Already have an acount? </p>
      </div>
    </main>
  );
}
