//RCFE
import React, { Fragment } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";

import Media from "react-media";

function Header() {
  const history = useHistory();

  return (
      <>
    <div className="header">
      <img
        onClick={() => history.push("/")}
        className="header__icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt=""
      />

      <Media
        query="(min-width: 500px)"
        style={{ display: "none" }}
        render={() => (
          <div className="header__center">
            <input placeholder="Where are you going ?" type="text" />
            <SearchIcon />
          </div>
        )}
      />

      

      <div className="header__right">
        {/* <p>Become a host</p> */}
        <LanguageIcon />
        <ExpandMoreIcon className='header__expandMore' />
        <Avatar />
      </div>


    </div>
    <div className="header__center__mobile">
        <input placeholder="Where are you going ?" type="text" />
        <SearchIcon />
      </div>

    </>
  );
}

export default Header;
