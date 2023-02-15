import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const TentangKami = () => {
    return(
        <div>
      <header class="w3-container w3-center" style={{paddingTop: '100px',height:"100%", background:"#02073E"}}>
        <img src="/Asisten.png"></img>
        </header>
        <div class="w3-container">
            <div class="w3-col l6">
                <img src="/gambar1.jpg" class="w3-block "/> {/*taruh gambar di sini */}
            </div>
            
        </div>
        <div class="w3-container w3-padding" style={{height:"700px"}}>
            <div class="w3-container w3-padding w3-text-white" style={{margin:"100px",height:"500px",borderRadius:"100px", background:"#02073E"}}>
                <h1 style={{marginTop:"50px",paddingLeft:"100px",paddingBottom:"50px"}}>
                    <b>visi</b>
                </h1>
                <h1 style={{marginTop:"50px",paddingLeft:"100px",paddingBottom:"50px"}}>
                    <b>misi</b>
                </h1>
            </div>
        </div>
        <div class="w3-container w3-padding" style={{height:"700px"}}>
            <h1 class="w3-text white w3-center"style={{paddingBottom:"50px",fontSize:"64px"}}>
                <b>pencapaian kami</b>
            </h1>
        </div>
        <div class="w3-container w3-center w3-padding" style={{margin: "100px"}}>
        <h1 class="w3-text white w3-center"style={{marginTop:"100px",paddingBottom:"50px",fontSize:"64px"}}>
                <b>Asisten Laboratorium</b>
        </h1>

        <div class="w3-col l4 w3-center">
            <div class="w3-card-4" style={{ width:"80%", borderRadius: '50px'}}>
            <img src="/mimiperi.jpg" alt="Avatar" style={{width:"100%"}}/>
                <div class="w3-container w3-center">
                        <h5>John Doe</h5>
                    <div class="w3-section">
                        <button class="w3-button w3-grey" style={{borderRadius: '50px'}}>lihat</button>
                        <button class="w3-button w3-grey" style={{borderRadius: '50px'}}>lihat</button>
                        <button class="w3-button w3-grey" style={{borderRadius: '50px'}}>lihat</button>
                    </div>
                </div>

            </div>
        </div>
        
        </div>
    </div>

    
    );
};
   
  export default TentangKami;