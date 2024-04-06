import {Image} from 'react-bootstrap';
import '../style/Background.css';


const Background = () => {
    return(
        <div className='background-cover'>
            <Image src="./assets/background.png" className="background-image w-100"/>
        </div>
    );

};


export default Background;