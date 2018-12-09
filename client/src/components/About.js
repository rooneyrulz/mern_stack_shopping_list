import React from 'react';

import Footer from "./layouts/Footer";

export default function About(props) {
  return (
    <div>
      <div className="container my-5">
        <h1>About Us</h1>
        <hr/>
        <div className="row mt-4">
          <div className="col col-sm-12">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur numquam debitis facilis libero praesentium repellat! Quos sapiente doloribus ipsum neque facere voluptatum similique magnam officiis eveniet, cum numquam accusantium nemo laborum optio quisquam debitis voluptates, veritatis consequuntur, deleniti libero? Qui facere eveniet, dolor quidem eaque ipsam magni vitae unde fugiat!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore alias repellat quod suscipit beatae quia adipisci facere fuga sunt! Cumque, explicabo? Dolore omnis accusantium saepe magni, consequuntur minima placeat cumque!</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
