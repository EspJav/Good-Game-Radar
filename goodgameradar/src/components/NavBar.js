import NavButton from './NavButton.js';

//creating an array for all of the sports that will be supported. Adding sport to list with append new button
const sports = ["Baseball", "BasketBall", "Soccer", "Football", "Hockey"]
function NavBar() {
    
    return(
        <div>
             
            <nav>
                <img src="./logo.svg"></img>
                <NavButton games={sports} />
                <button id="account-login">Login</button>
            </nav>
        </div>
    )
}

export default NavBar;