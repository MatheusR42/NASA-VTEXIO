import React, { Component } from "react";
import { AuthService } from 'vtex.react-vtexid';
import { Link } from "vtex.render-runtime";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <header>
        Header
        <ul>
          <li>
            <Link page="store.home">
              Home
            </Link>
          </li>
          <li>
            <Link page="store.nasa">
              NASA
            </Link>
          </li>
          <li>
            <AuthService.RedirectLogout returnUrl="/">
              {({ action: logout }) => (
                <a href="javascript:void(0);" title="Sair" onClick={logout}>Sair</a>
              )}
            </AuthService.RedirectLogout>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header
