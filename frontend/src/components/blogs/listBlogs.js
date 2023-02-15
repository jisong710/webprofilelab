import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListBlogs(){
    return(
    <section class="w3-container">

        <div class="w3-col s3 w3-card" style={{ padding:"30px",margin:"50px", borderRadius: '50px',background:"#02073E"}}>
                <div class="w3-container w3-center">
                    <img src="/gambar1.jpg" alt="Avatar" style={{marginTop:"50px",maxWidth:"200px"}}/>
                        <h5 class="w3-text-white">John Doe</h5>
                    <div class="w3-section">
                        <button class="w3-button w3-grey" style={{borderRadius: '50px'}}>lihat</button>
                    </div>
                </div>
            </div>
            <div class="w3-col s3 w3-card" style={{ padding:"30px",margin:"50px", borderRadius: '50px',background:"#02073E"}}>
                <div class="w3-container w3-center">
                    <img src="/gambar1.jpg" alt="Avatar" style={{marginTop:"50px",maxWidth:"200px"}}/>
                        <h5 class="w3-text-white">John Doe</h5>
                    <div class="w3-section">
                        <button class="w3-button w3-grey" style={{borderRadius: '50px'}}>lihat</button>
                    </div>
                </div>
            </div>
            <div class="w3-col s3 w3-card" style={{ padding:"30px",margin:"50px", borderRadius: '50px',background:"#02073E"}}>
                <div class="w3-container w3-center">
                    <img src="/gambar1.jpg" alt="Avatar" style={{marginTop:"50px",maxWidth:"200px"}}/>
                        <h5 class="w3-text-white">John Doe</h5>
                    <div class="w3-section">
                        <button class="w3-button w3-grey" style={{borderRadius: '50px'}}>lihat</button>
                    </div>
                </div>
            </div>
    </section>
    );
}
export default ListBlogs;