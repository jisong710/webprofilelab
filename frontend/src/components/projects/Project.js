import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Project = () => {
    return(
        <div>
      <header class="w3-container w3-center" style={{paddingTop: '100px',height:"300px",borderEndEndRadius:"100px",borderEndStartRadius:"100px", background:"#02073E"}}>
            <h1 class="w3-xxxlarge w3-text-white" style={{marginTop:"50px"}}>MBC Projects</h1>

        </header>
        <div class="w3-container w3-padding" style={{height:"1000px"}}>
        <h1 style={{marginTop:"50px",paddingLeft:"100px",fontSize:"50px"}}>
                <b>project yang masih berjalan</b>
            </h1>
        <div class="w3-container w3-padding" style={{margin:"100px",height:"500px",borderRadius:"100px", background:"#02073E"}}>
        </div>
        </div>
    </div>

    
    );
};
   
  export default Project;