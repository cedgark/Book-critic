import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Achieve Product-market-fit with your book</h1>
        <h2>Write a book your readers will love, share, and recommend with better feedback.</h2>
        <Link to="/register/author">I'm an author</Link>
        <Link to="/register/reader">I'm a reader</Link>
      </div>
      <div className="home-img">
        <img src='home-image.jpg' width='300px'></img>
      </div>
    </div>
  );
}

export default Home;
