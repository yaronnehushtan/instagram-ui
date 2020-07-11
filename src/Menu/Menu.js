import React, { useContext } from 'react';
import './Menu.scss'
import { Link } from "react-router-dom";
import logo from '../images/Instagram-logo3.png';
import { UserContext } from '../user-context';
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome,faPlusSquare, faCompass, faHeart} from '@fortawesome/free-solid-svg-icons';

import MenuAvatar from "../MenuAvatar/MenuAvatar";


function Menu(props) {


    const {user}= useContext(UserContext)

    return (


      <nav className="navbar
       w-100 border-bottom border-top d-flex space-between Menu">
        <div className="col-12 col-md-2 d-flex justify-content-center justify-content-md-start">
          <Link className="navbar-brand" to="/">
              <div className="header-logo"></div>
          </Link>
        </div>
        {/*<form className="form-inline">*/}
        {/*    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>*/}
        {/*</form>*/}
          <div  className="col ">
        <ul className="navbar-nav d-flex flex-row mr-auto justify-content-center justify-content-md-end">
            <li className="nav-item active">
                <Link className="nav-link ml-0" to="/">
                    <FontAwesomeIcon icon={faHome} />
                    <span className="sr-only">(current)</span>
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/post/create">
                    <FontAwesomeIcon icon={faPlusSquare} />
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/">
                    <FontAwesomeIcon icon={faCompass} />
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/">
                    <FontAwesomeIcon icon={faHeart} />
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/register">
                    <MenuAvatar/>
                </Link>
            </li>
        </ul>
          </div>

          {/* <div className="form-inline my-2 my-lg-0 color text-white"> */}
            {/* if we are conected dont show register and login--> if we dont have user - presenr */}
            {/* <Link to="/register" className="nav-link">Register</Link>
            <Link to="/login" className="nav-link">log In</Link>
          </div> */}
        {/*</div>*/}
      </nav>
    );
}

export default Menu;
