import {Carousel} from 'react-bootstrap';
import './home.css'
import C1 from './C1.jpg'
import C2 from './C2.jpg'
import C3 from './C3.jpg'
import C4 from './C4.jpg'

function App() {
  return (
    <Carousel controls={false} interval={1000} indicators={false}>
      <Carousel.Item>
        <img 
        className="d-block w-100" 
        src={C1} 
        />
      </Carousel.Item>

      <Carousel.Item>
        <img 
        className="d-block w-100" 
        src={C2} 
        />
      </Carousel.Item>

      <Carousel.Item>
        <img 
        className="d-block w-100" 
        src={C3} 
        />
      </Carousel.Item>

      <Carousel.Item>
        <img 
        className="d-block w-100" 
        src={C4} 
        />
      </Carousel.Item>
    </Carousel>

  );
}

export default App;
