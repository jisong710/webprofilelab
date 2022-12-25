import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TentangKami = () => {
    return(
        <div>
        <div class="w3-top">
        <div class="w3-row w3-container w3-padding" style={{background: "#02073E"}}></div>
        <div class="w3-container" style={{background: "#02073E"}}>
          <div class="w3-col l2">
          <img src="/download.png" class="w3-block "/>
          </div>
          <div class="w3-col l2">
            <a href="/" class="w3-button w3-block w3-text-white">Beranda</a>
          </div>
          <div class="w3-col l2">
            <a href="/Blogs" class="w3-button w3-block w3-text-white">Blog</a>
          </div>
          <div class="w3-col l2">
            <a href="/Projek" class="w3-button w3-block w3-text-white">Projek</a>
          </div>
          <div class="w3-col l2">
            <a href="/tentangKami" class="w3-button w3-block w3-text-white">Tentang kami</a>
          </div>
        </div>
      </div>
      <header class="w3-container w3-center" style={{paddingTop: '100px',height:"650px", background:"#02073E"}}>
        </header>
        <div class="w3-container">
            <div class="w3-col l6">
                <img src="/mimiperi.jpg" class="w3-block "/> {/*taruh gambar di sini */}
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
        <div class="w3-container w3-padding" style={{height:"300px"}}>
            <div class="w3-container w3-padding w3-text-white" style={{margin:"50px",height:"120px", background:"#183656"}}>
                <div class="w3-col l6 w3-block">
                    <h3>Do you have any question?<br></br> Feel free to contact us</h3>
                </div>
                <div class="w3-col l3 w3-block" style={{marginTop:"30px"}}>

                </div>
                <div class="w3-col l2 w3-block" style={{marginTop:"15px"}}>
                    <a href="/" class="w3-button w3-white w3-block" >contact us <br></br>now</a>
                </div>
            </div>
            <div class="w3-container w3-padding" style={{margin: "100px",height:"350px"}}>
            <div class="w3-col l2 w3-block" style={{marginTop:"20px"}}>
            <img src="/download.png" class="w3-block"/>
            </div>
            <div class="w3-col l2 w3-block">
                <h2 class="w3-center">
                    About Us
                </h2>
                <a href="/" class="w3-button w3-block">Support</a>
                <a href="/" class="w3-button w3-block">Center</a>
                <a href="/" class="w3-button w3-block">Customer</a>
                <a href="/" class="w3-button w3-block">About Us</a>
                <a href="/" class="w3-button w3-block">Copyright</a>
            </div>
            <div class="w3-col l3 w3-block">
                <h2 class="w3-center">
                    Our Information
                </h2>
                <a href="/" class="w3-button w3-block">Return</a>
                <a href="/" class="w3-button w3-block">Policy</a>
                <a href="/" class="w3-button w3-block">Privacy</a>
                <a href="/" class="w3-button w3-block">Terms & conditions</a>
                <a href="/" class="w3-button w3-block">Site Map</a>
            </div>
            <div class="w3-col l2 w3-block">
                <h2 class="w3-center">
                    My Account
                </h2>
                <a href="/" class="w3-button w3-block">Press</a>
                <a href="/" class="w3-button w3-block">Inquiries</a>
                <a href="/" class="w3-button w3-block">Social Media</a>
                <a href="/" class="w3-button w3-block">Directories</a>
                <a href="/" class="w3-button w3-block">Images & B-Roll</a>
            </div>
            <div class="w3-col l2 w3-block">
                <h2 class="w3-center">
                    Connect
                </h2>
                <a href="/" class="w3-button w3-block">Faebook</a>
                <a href="/" class="w3-button w3-block">GitHub</a>
                <a href="/" class="w3-button w3-block">Twitter</a>
                <a href="/" class="w3-button w3-block">Dribble</a>

            </div>
            </div>
        </div>
    </div>

    
    );
};
   
  export default TentangKami;