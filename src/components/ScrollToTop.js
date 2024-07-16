import { useEffect} from 'react';
import { useLocation } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

const ScrollToTop = () => {

  // Scroll to top when path changes
  const location  = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


//   // Show Top button when scrolling 
//   const [showTop, setShowTop] = useState(false);

//   const showTopButton = () => {
//     const position = document.documentElement.scrollTop;

//     if (position > 300){
//         setShowTop(true);
//     }
//     else{
//         setShowTop(false);
//     }
//   };

//   window.addEventListener('scroll', showTopButton); 

//   return (
//     <Button></Button>
//   );

  return null;
};

export default ScrollToTop;
