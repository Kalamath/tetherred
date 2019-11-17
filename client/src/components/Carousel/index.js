import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
// import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from "axios"; 
function makeRequest() {
  return axios.get('/api/news')
  
}
function TopCarousel() {
  const [articles, setData] = useState([]); 
  // async await is the same as .then but prettier
  // should wrap inside try catch 
  // to prevent errors and you need a catch
  // async MUST appear before callback function
  useEffect( () => {
    
      (async function() {

        try {

          const response = await makeRequest();
          console.log(response);
          // not sure why but we had to create collection of components or we got
          // stupid error...
          const componentCollection = response.data.map((item, index) => {
            return ( 
              <Carousel.Item key={index}>
                <img src={item.image} />
                <Carousel.Caption>
                  <p>{item.title}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          });
          setData(componentCollection);
          console.log('balfldsjfljsk', componentCollection);
        } catch(e) {
          console.log(e);
        } 

      })();


  }, []);

  return (
   <Jumbotron>
        
        <Carousel>
          
          {articles}
          
        </Carousel>
   
     </Jumbotron> 
  );
}

export default TopCarousel;