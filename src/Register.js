import { useState } from 'react'
import { useParams } from 'react-router-dom';

const Register = () => {

  const { user } = useParams();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [book_link, setBook_Link] = useState('');
  const [isPending, setIsPending] = useState(false);

/*
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {username, email, password, book_link};

    // console.log(user);

    setIsPending(true);

    fetch("", {
      method: 'POST',
      headers: {'Content-Type': 'applications/json'},
      body: JSON.stringify(user)
    }).then(() => {
      setIsPending(false);
    }).catch((err) => {
      console.log(errr)
    })
  }
*/
  return (
    <div className="register">
      <div className="register-background"></div>
      <form enctype="multipart/form-data">
        <h1>Register</h1>
        <label>Username *</label>
        <input className="register-input" type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} required />
        <label>Email *</label>
        <input className="register-input" type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        <label>Password *</label>
        <input className="register-input" type="text" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
        {user === 'author' &&
          <div className="register-author-input">
          <label>Upload your book (PDF only) *</label>
          <input className="register-upload" type="file" name="file_upload" required/>
          </div>
        }
        {user === 'reader' &&
          <div className="register-author-input">
          <label>Book Link *</label>
          <input className="register-input" type="text" name="book_link" onChange={(e) => setBook_Link(e.target.value)} value={book_link} required/>
          </div>
        }
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Register;
