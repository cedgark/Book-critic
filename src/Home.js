import { Link } from 'react-router-dom';
import ReactPannellum, { getConfig } from "react-pannellum";


const Home = () => {

  const config = {
      autoRotate: -2,
      autoLoad: true,
      preview: 'library-interior-w9oempie.jpeg',
      showZoomCtrl: false,
      showControls: false
    };

  return (
    <div className="home">
      <div className="home-content">
        <h1>Achieve Product-market-fit with your book</h1>
        <h2>Write a book your readers will love, share, and recommend with better feedback.</h2>
        <Link to="/register/author">I'm an author</Link>
        <Link to="/register/reader">I'm a reader</Link>
      </div>
      <div className="panorama">
      <ReactPannellum
          style={{width: '1440px', height: '782px', right: '40px', bottom: '110px'}} /* 41*/
          id="1"
          sceneId="firstScene"
          imageSource="library-interior-w9oempie.jpeg"
          config={config}
        />
      </div>
    </div>
  );
}

export default Home;
