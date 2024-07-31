import { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const ScrollToTop = () => {

  const location  = useLocation();
  const [showTop, setShowTop] = useState(false); 


  // Scroll to Top behavior for Routing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);



  // Scroll to Top Button for Scrolling
  useEffect(() => {

    const showTopButton = () => {
      const scrollPosition = document.documentElement.scrollTop;

      if (scrollPosition > 300){
          setShowTop(true);
      }
      else{
          setShowTop(false);
      }
    };

    const handleScrollTop = () => {
      window.scrollTo(0);

    };

    window.addEventListener('scroll', showTopButton); 

    return (
      <Button onClick={() => window.scrollTo(0)} className='scrollToTopBtn'> To Top </Button>
    );
  }, []);

    

};

export default ScrollToTop;
