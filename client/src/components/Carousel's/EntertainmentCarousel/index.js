import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function makeRequest() {
  return axios.get('/api/entertainment')
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
          if (item.image) {
            return (
              <Carousel.Item key={index} className="containDiv">
                <img 
                className="d-block w-100 border border-secondary"
                src={item.image}
                style={{ width: "100%", height: 300, objectFit: "cover", opacity: 0.4 }}
                alt=""
                />
             <Carousel.Caption>
                  <h4
                  className="text"
                 >{item.title}</h4>
             </Carousel.Caption>
             </Carousel.Item>
         )
  }});
setData(componentCollection);
console.log('balfldsjfljsk', componentCollection);
     } catch (e) {
  console.log(e);
}
   }) ();
 }, []);
return (
  <Carousel>
    {articles}
  </Carousel>
);
}
export default TopCarousel;