import React from "react";


function NavbarLoggedIn() {
        return(
            <nav class="w3-bar w3-black">
            <a href="/" class="w3-bar-item w3-button"><i class="fa fa-home"></i></a>
            <a href="/logout" class="w3-bar-item w3-button w3-right"><i class="fa fa-sign-out"></i></a>
            </nav>
        );
            
    }
export default NavbarLoggedIn;