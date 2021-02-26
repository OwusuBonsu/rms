import {Carousel} from 'react-bootstrap';
import './home.css'
import C1 from './C1.jpg'
import C2 from './C2.jpg'
import C3 from './C3.jpg'
import C4 from './C4.jpg'
import location from './location.svg'
import review from './review.svg'
import schedule from './schedule.svg'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
    <Carousel controls={false} interval={10000} indicators={false}>
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

    <div className= "whatIs">What is RateMyStylist?</div>
    <div className="parentDiv">
      <div className="C1">Find hairstylists near you.</div>
      <div className="C2"><img src={location} width="70%"/></div>

      <div className="C2"><img src={schedule} width="70%"/></div>
      <div className="C1">Schedule appointments with hairstylists.</div>

      <div className="C1">Leave reviews of your experiences.</div>
      <div className="C2"><img src={review} width="70%"/></div>
    </div>
    </Fragment>
  );
}

export default App;
