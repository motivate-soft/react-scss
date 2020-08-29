import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import "../../../styles/footer.scss"


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const year = new Date().getFullYear();
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <a href="#" className="logo-footer">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/logo.png" height="24" alt="Upgrade.Chat Discord Payment Gateway" />
                </a>
                <p className="mt-4">
                  Upgrade.Chat Disord PayPal Donatebot & Credit Card Payments Bot. Upgrade.Chat allows you to link PayPal and Stripe to Discord and Accept Credit Card Payments via Discord. Accept Donations via Discord with PayPal, Credit Cards, Stripe and more to Sell Subscriptions and products.
                </p>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://upgrade.chat/" alt="Discord PayPal" className="rounded">
                      <FeatherIcon icon="facebook" className="fea icon-sm fea-social" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://www.twitter.com/share?url=https://upgrade.chat/" className="rounded" alt="Discord Pay Pal">
                      <FeatherIcon icon="twitter" className="fea icon-sm fea-social" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://upgrade.chat/&title=Discord+Payment+Bot&summary=Turn+your+Discord+server+into+a+business!" className="rounded">
                      <FeatherIcon icon="linkedin" className="fea icon-sm fea-social" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Information</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <a href="https://upgrade.chat/checkout/544238107957133352" className="text-foot">
                      > Support us
                    </a>
                  </li>
                  <li>
                    <a href="https://stripe.com/partners/upgrade-chat" className="text-foot">
                      > Stripe
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Documentation</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <a href="https://docs.upgrade.chat/terms-of-service" className="text-foot">
                      > Terms of Services
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.upgrade.chat/acceptable-use-policy" className="text-foot">
                      > Acceptable Use Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.upgrade.chat/" className="text-foot">
                      > Frequent Questions
                    </a>
                  </li>
                  <li>
                    <a href="https://upgrade.chat/support/" className="text-foot">
                      > Support Server
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Support Us</h4>
                <a href="https://upgrade.chat/checkout/544238107957133352" className="text-foot">
                  <p className="mt-4">Click To Buy a Role!</p>
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/Icon.png" width="70%" height="70%" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-left">
                  <p className="mb-0">
                    © {year} Upgrade.Chat |{" "}
                    <a href="https://Automated.Consulting" target="_blank" className="text-reset" alt="Automated.Consulting Business Automation & Consulting">
                      We <i data-feather="heart"></i> Automated Consulting
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled payment-cards text-sm-right mb-0">
                  <li className="list-inline-item">
                    <a href="https://upgrade.chat/control-panel" alt="PayPal Discord Payments">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/paypal.png" width="45" height="30" title="Stripe Discord Bot" alt="PayPal Discord Bot" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://upgrade.chat/control-panel" alt="Venmo Discord Payments">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/venmo.png" width="45" height="30" title="Stripe Discord Bot" alt="Venmo Discord Bot" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://upgrade.chat/control-panel" alt="Stripe Discord Payments">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/stripe.png" width="45" height="30" title="Stripe Discord Bot" alt="Stripe Discord Bot" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://upgrade.chat/control-panel" alt="Visa Discord Payments">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/visa.png" width="45" height="30" title="Visa Discord Bot" alt="Visa Discord Bot" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://upgrade.chat/control-panel" alt="Mastercard Discord Payments">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/mastercard.png" width="45" height="30" title="Mastercard Discord Bot" alt="Mastercard Discord Bot" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://upgrade.chat/control-panel" alt="American Express Discord Payments">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/americanexpress.png" width="45" height="30" title="American Express Discord Bot" alt="American Express Discord Bot" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://upgrade.chat/control-panel" alt="Discover Discord Payments">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/discover.png" width="45" height="30" title="Discover Discord Bot" alt="Discover Discord Bot" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://upgrade.chat/control-panel" alt="Google Pay Discord Payments">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/googlepay.png" width="45" height="30" title="Google Pay Discord Bot" alt="Google Pay Discord Bot" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://upgrade.chat/control-panel" alt="Apple Pay Discord Payments">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/applepay.png" width="45" height="30" title="Apple Pay Discord Bot" alt="Apple Pay Discord Bot" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://upgrade.chat/control-panel" alt="Maestro Discord Payments">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/maestro.png" width="45" height="30" title="Maestro Pay Discord Bot" alt="Maestro Pay Discord Bot" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
