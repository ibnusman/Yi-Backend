import React from "react";

let year = new Date().getFullYear();

function Footer(){
  return  <div>
    <footer>
        <p>copyright {year}</p>
        </footer>
    </div>
};


export default Footer;
