import './page.css';
import Link from 'next/link';

export default function SignUp() {
  return (
    <main>
      <div className='head'>Welcome to Saviya!</div>
      <div className='signbox'>
        <h1 className='signtext'>Sign In</h1>
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
            <button type='submit'>SIGN IN</button>
          </div>
        </form>

        <p className='acc'>Already have an account?
       <Link href='SignIn'><button type='button' ><u>Sign Up</u></button></Link> </p>

        <div className="divider">
          <hr className="line" />
          <span className="or-text">Sign in with</span>
          <hr className="line" />
        </div>
        
        <br/>
        
        <div className='btns'>
          
          <button className='fbbtn' type='button'><img src='./Images/fb.png' className='btnimg' alt='Facebook Image'></img><div className='btntext'>FaceBook</div></button>
          <button className='fbbtn' type='button'><img src='./Images/google.png' className='btnimg' alt='Google Image'></img><div className='btntext'>Google</div></button>
          <button className='fbbtn' type='button'><img src='./Images/micros.png' className='btnimg' alt='Microsoft Image'></img><div className='btntext'>Microsoft</div></button>
          </div>
       
      </div>
    </main>
  );
}
