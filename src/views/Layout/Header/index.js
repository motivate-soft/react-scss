import React, { Component } from "react";
import "../../../styles/header.scss"


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  componentDidUpdate() { }

  render() {
    return (
      <div>
        <div className="top-nav">
          <header id="topnav" className="defaultscroll sticky">
            <div className="container">
              <div>
                <a className="logo" href="https://upgrade.chat/">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/logo.png" height="30" alt="PayPal & Stripe Partner Bot for Chats" />
                </a>
              </div>
              <div className="buy-button">
                <a href="https://upgrade.chat/control-panel" target="_blank" alt="PayPal & Stripe Partner Bot for Chats" className="btn btn-primary">
                  Sign in
              </a>
              </div>
              <div className="menu-extras">
                <div className="menu-item">
                  <a className="navbar-toggle">
                    <div className="lines">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </a>
                </div>
              </div>

              <div id="navigation">
                <ul className="navigation-menu">
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#why">Why UC?</a>
                  </li>
                  <li>
                    <a href="https://upgrade.chat/support" target="_blank" alt="Upgrade.Chat PayPal Stripe Chat Bot">
                      Support
                  </a>
                  </li>
                  <li className="has-submenu">
                    <a href="#">FAQ & Docs</a>
                    <span className="menu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <a href="https://docs.upgrade.chat/" alt="Upgrade.Chat FAQ">
                          Frequent Questions
                      </a>
                      </li>
                      <li>
                        <a href="https://docs.upgrade.chat/terms-of-service" alt="Upgrade.Chat Discord Bot Terms">
                          Terms of Service
                      </a>
                      </li>
                      <li>
                        <a href="https://docs.upgrade.chat/acceptable-use-policy">Acceptable Use</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="buy-menu-btn d-none">
                  <a href="https://upgrade.chat/control-panel" target="_blank" alt="Upgrade.Chat PayPal Stripe Chat Bot" className="btn btn-primary">
                    Invite Bot
                </a>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
