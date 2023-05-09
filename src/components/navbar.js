import React,{Component} from 'react';
import './css/Navbar.css';
 
class Navbar extends Component{
    render(){
        return(
            <div className="Navbar">
            <a href="/" className="logo">Tru_Contender </a>
            <ul>
                <li className="active"><a href= "#Home">Home</a></li>
                <li ><a href= "#Services">Services</a></li>
                <li ><a href= "#Testimonies">Testimonies</a></li>
                <li ><a href= "#Contact">Contact</a></li>
            </ul>
            </div>
        );
    }
}

export default Navbar;