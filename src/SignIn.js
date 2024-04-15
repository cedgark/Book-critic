const SignIn = () => {
  return (
    <div className="signin">
      <div className="signin-background"></div>
      <form enctype="multipart/form-data">
        <h1>Sign In</h1>
        <label>Email *</label>
        <input className="signin-input" type="text" name="email" required/>
        <label>Password *</label>
        <input className="signin-input" type="text" name="password" required/>
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SignIn;
