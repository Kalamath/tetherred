import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel'
// import Container from 'react-bootstrap/Container'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
// import GridContainer from "../../components/Grid/GridContainer.js";
// import GridItem from "../../components/Grid/GridItem.js";

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
  useEffect(() => {

    (async function () {

      try {

        const response = await makeRequest();
        console.log(response);
        // not sure why but we had to create collection of components or we got
        // stupid error...
        const componentCollection = response.data.map((item, index) => {
          if(item.image){
          return (
            <Carousel.Item key={index} className="containDiv"
            // style={{ position: "relative", width: "100%" }}
            >
              <img
                className="d-block w-100"
                src={item.image}
                style={{ width: "100%", height: 300, objectFit: "cover", opacity: 1 }} 
                alt=""
              />
              <Carousel.Caption>
                  <h1
                    className="text"
                  >{item.title}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          )
        }});
        setData(componentCollection);
        console.log('balfldsjfljsk', componentCollection);
      } catch (e) {
        console.log(e);
      }

    })();

  }, []);

  return (

    
        <Carousel>

          {articles}

        </Carousel>

      
    
  );
}

export default TopCarousel;