import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";

import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import "../../styles/home.scss"



class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <Header />
        <div className="home ">
          <section className="bg-half-170 d-table w-100" id="home">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7">
                  <div className="title-heading mt-2">
                    <h1 className="heading mb-3">
                      The only Discord <span className="text-primary">Payments Bot</span> you need.
                    </h1>
                    <p className="para-desc text-muted">
                      Upgrade.Chat is the only Discord bot <u>partnered</u> with PayPal, Venmo & Stripe. Upgrade.Chat is a complete member management and payment gateway for Discord. Turn your Discord server into a business with dozens of features to help you generate monthly recurring income
                      through donations and subscriptions.
                    </p>
                    <br />
                    <p>
                      <a href="https://stripe.com/partners/upgrade-chat">
                        <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/partner/paypal.png" width="50%" height="50%" alt="Upgrade.Chat PayPal Verified Partner" />
                      </a>
                    </p>
                    <p>
                      <a href="https://stripe.com/partners/upgrade-chat">
                        <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/partner/stripe.png" width="60%" height="60%" alt="Upgrade.Chat Stripe Verified Partner" />
                      </a>
                    </p>
                    <div className="mt-4">
                      <a href="https://upgrade.chat/control-panel" alt="PayPal Donatebot" className="btn btn-primary mt-2">
                        Invite Bot Now
                      </a>
                      <a href="https://upgrade.chat/support" alt="PayPal Donate bot" className="btn btn-outline-primary mt-2 mr-2">
                        Get Support
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5 mt-5 pt-2 mt-sm-0 pt-sm-0">
                  <div className="text-md-right text-center">
                    <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/UpgradeChatRoles.png" alt="Stripe PayPal Chat Bot" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="position-relative">
            <div className="shape overflow-hidden text-light">
              <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>

          <section className="section pt-0 bg-light">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <div className="section-title mb-4 pb-2">
                    <h4 className="title mb-4">
                      <br />
                      Why Use Upgrade.Chat For Your Chat?
                    </h4>
                    <p className="text-muted para-desc mb-0 mx-auto">
                      Join Thousands of Business Owners Creating<span className="text-primary font-weight-bold"> Automated Passive Income</span> with Upgrade.Chat using PayPal and Stripe. Accept Donations, Subscriptions and Creating Affiliate Referral Programs to Grow Recurring Revenue with Ease
                      While on Full Autopilot.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 col-12 text-center">
                <a href="https://upgrade.chat/control-panel">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/paypal.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="PayPal" alt="Upgrade.Chat Discord PayPal Payments" />
                </a>
                &ensp;
                <a href="https://upgrade.chat/control-panel">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/venmo.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Venmo" alt="Upgrade.Chat Discord Venmo Payments" />
                </a>
                &ensp;
                <a href="https://upgrade.chat/control-panel">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/stripe.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Stripe Payment Gateway" alt="Upgrade.Chat Discord Stripe Payments" />
                </a>
                &ensp;
                <a href="https://upgrade.chat/control-panel">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/visa.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Visa" alt="Upgrade.Chat Discord Visa Payments" />
                </a>
                &ensp;
                <a href="https://upgrade.chat/control-panel">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/mastercard.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Mastercard" alt="Upgrade.Chat Discord Mastercard Payments" />
                </a>
                &ensp;
                <a href="https://upgrade.chat/control-panel">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/americanexpress.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Amex" alt="Upgrade.Chat Discord American Express Payments" />
                </a>
                &ensp;
                <a href="https://upgrade.chat/control-panel">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/discover.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Discover Card" alt="Upgrade.Chat Discord Discover Card Payments" />
                </a>
                &ensp;
                <a href="https://upgrade.chat/control-panel">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/googlepay.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Google Pay" alt="Upgrade.Chat Accepts Google Pay" />
                </a>
                &ensp;
                <a href="https://upgrade.chat/control-panel">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/applepay.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Apple Pay" alt="Upgrade.Chat Accepts Apple Pay" />
                </a>
                &ensp;
                <a href="https://upgrade.chat/control-panel">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/maestro.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Maestro" alt="Upgrade.Chat Accepts Maestro" />
                </a>
              </div>
              <p></p>

              <div className="row align-items-center">
                <div className="col-lg-5 col-md-6 mt-4 pt-2">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/UpgradeChatCheckout.png" className="img-fluid mx-auto d-block" alt="Discord Accept Credit Cards" />
                </div>
                <div className="col-lg-7 col-md-6 mt-6 pt-2">
                  <div className="section-title ml-lg-5">
                    <h4 className="title mb-4">
                      Just a few <span className="text-primary"> Reasons</span> to start using Upgrade.Chat for your Discord.
                    </h4>
                    <p className="text-muted">Upgrade.Chat helps you turn your Discord server into a full membership service payment gateway with PayPal and Stripe for products, services, donations, subscriptions and more. Intergrate with Stripe for Discord and more in a few simple clicks.</p>
                    <ul className="list-unstyled feature-list text-muted">
                      <li>
                        <i data-feather="check-circle" className="fea icon-sm text-success mr-2"></i>
                        <b>
                          The <u>ONLY</u> PayPal Verified Partner for Discord
                        </b>
                      </li>
                      <li>
                        <i data-feather="check-circle" className="fea icon-sm text-success mr-2"></i>
                        <b>
                          The <u>ONLY</u> Stripe Verified Partner for Discord
                        </b>
                      </li>
                      <li>
                        <FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" />
                        Complete Automated Member Management for Your Server
                      </li>
                      <li>
                        <FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" />
                        Google Pay / Apple Pay & All Major Credit Cards Accepted
                      </li>
                      <li>
                        <FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" />
                        Rewards for Your Customers That Refer You New Business
                      </li>
                      <li>
                        <FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" />
                        Full PayWall & "Share Anywhere" Member Checkout Links
                      </li>
                      <li>
                        <FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" />
                        Complete PayPal Transaction Dashboard to track payments
                      </li>
                      <li>
                        <FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" />
                        Dozens of Features to Help You Generate More Income
                      </li>
                    </ul>
                    <a href="https://upgrade.chat/control-panel" className="mt-3 text-primary" alt="Discord Accept Payments">
                      <strong> One Click Easy Setup </strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <section className="section bg-light" id="features">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="mt-4 col-12 text-center">
                    <a href="https://upgrade.chat/control-panel">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/paypal.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="PayPal" alt="Upgrade.Chat Discord PayPal Payments" />
                    </a>
                    &ensp;
                    <a href="https://upgrade.chat/control-panel">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/venmo.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Venmo" alt="Upgrade.Chat Discord Venmo Payments" />
                    </a>
                    &ensp;
                    <a href="https://upgrade.chat/control-panel">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/stripe.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Stripe Payment Gateway" alt="Upgrade.Chat Discord Stripe Payments" />
                    </a>
                    &ensp;
                    <a href="https://upgrade.chat/control-panel">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/visa.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Visa" alt="Upgrade.Chat Discord Visa Payments" />
                    </a>
                    &ensp;
                    <a href="https://upgrade.chat/control-panel">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/mastercard.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Mastercard" alt="Upgrade.Chat Discord Mastercard Payments" />
                    </a>
                    &ensp;
                    <a href="https://upgrade.chat/control-panel">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/americanexpress.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Amex" alt="Upgrade.Chat Discord American Express Payments" />
                    </a>
                    &ensp;
                    <a href="https://upgrade.chat/control-panel">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/discover.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Discover Card" alt="Upgrade.Chat Discord Discover Card Payments" />
                    </a>
                    &ensp;
                    <a href="https://upgrade.chat/control-panel">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/googlepay.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Google Pay" alt="Upgrade.Chat Accepts Google Pay" />
                    </a>
                    &ensp;
                    <a href="https://upgrade.chat/control-panel">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/applepay.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Apple Pay" alt="Upgrade.Chat Accepts Apple Pay" />
                    </a>
                    &ensp;
                    <a href="https://upgrade.chat/control-panel">
                      <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/maestro.png" width="70" height="50" className="img-fluid avatar shadow" data-toggle="tooltip" data-placement="top" title="Maestro" alt="Upgrade.Chat Accepts Maestro" />
                    </a>
                  </div>
                  <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">
                        <br />
                        Upgrade.Chat Features
                      </h4>
                      <p className="text-muted para-desc mb-0 mx-auto">
                        Unmatched PayPal and Stripe features for your <span className="text-primary font-weight-bold">Discord Server</span> that will help you get the most donations and subscriptions as possible.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-8 col-md-8">
                    <div className="row mt-4 pt-2">
                      <div className="col-md-6 col-12">
                        <div className="media features pt-4 pb-4">
                          <div className="icon text-center rounded-circle text-primary mr-3 mt-2">
                            <a href="https://upgrade.chat/control-panel" alt="Discord PayPal Bot">
                              <FeatherIcon icon="dollar-sign" className="fea icon-ex-md text-primary" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="title">Donations & Subscriptions</h4>
                            <p className="text-muted para mb-0">Simply setup and accept payments with PayPal or credit cards for your Discord within minutes. One Click Install.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="media features pt-4 pb-4">
                          <div className="icon text-center rounded-circle text-primary mr-3 mt-2">
                            <a href="https://upgrade.chat/control-panel" alt="Discord Donations Bot">
                              <FeatherIcon icon="users" className="fea icon-ex-md text-primary" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="title">Referral Rewards</h4>
                            <p className="text-muted para mb-0">Offer incentives to your customers by giving them an account billing credit for inviting other customers.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="media features pt-4 pb-4">
                          <div className="icon text-center rounded-circle text-primary mr-3 mt-2">
                            <a href="https://upgrade.chat/control-panel" alt="PayPal Discord Bot">
                              <FeatherIcon icon="link" className="fea icon-ex-md text-primary" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="title">Shareable Checkout Links</h4>
                            <p className="text-muted para mb-0">Your customers can checkout from anywhere, not just on Discord. Use the link on social media or your website.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="media features pt-4 pb-4">
                          <div className="icon text-center rounded-circle text-primary mr-3 mt-2">
                            <a href="https://upgrade.chat/control-panel" alt="Discord Bot Payments">
                              <FeatherIcon icon="lock" className="fea icon-ex-md text-primary" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="title">Paywall Content Lock</h4>
                            <p className="text-muted para mb-0">Hide any content you want behind channels and grant easy automated access once payments are made.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="media features pt-4 pb-4">
                          <div className="icon text-center rounded-circle text-primary mr-3 mt-2">
                            <a href="https://upgrade.chat/control-panel" alt="Discord Bot PayPal">
                              <FeatherIcon icon="slash" className="fea icon-ex-md text-primary" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="title">Ban Users That Dispute</h4>
                            <p className="text-muted para mb-0">We protect your income and content by revoking full access to your server whenever your customer disputes.</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="media features pt-4 pb-4">
                          <div className="icon text-center rounded-circle text-primary mr-3 mt-2">
                            <a href="https://upgrade.chat/control-panel" alt="Discord Membership Bot">
                              <FeatherIcon icon="trending-up" className="fea icon-ex-md text-primary" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="title">Grow Your Income & MRR</h4>
                            <p className="text-muted para mb-0">With features like free trials, paid trials, coupons, limited redemption offers, custom subscription cycles and more!</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="media features pt-4 pb-4">
                          <div className="icon text-center rounded-circle text-primary mr-3 mt-2">
                            <a href="https://upgrade.chat/control-panel" alt="Discord Referral Bot">
                              <FeatherIcon icon="package" className="fea icon-ex-md text-primary" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="title">Full Storefront Included</h4>
                            <p className="text-muted para mb-0">Get a FREE digital store feature where you can sell digital and physical goods. Stop paying monthly fees!</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="media features pt-4 pb-4">
                          <div className="icon text-center rounded-circle text-primary mr-3 mt-2">
                            <a href="https://upgrade.chat/control-panel" alt="PayPal Discord Bot">
                              <FeatherIcon icon="heart" className="fea icon-ex-md text-primary" />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="title">Customers Love It</h4>
                            <p className="text-muted para mb-0">Being able to pay with credit card or PayPal at any time and gain access makes it a customer's choice.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-12 mt-4 pt-2 text-center text-md-right">
                    <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/UpgradeChatFeatures.png" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </section>

            <div className="container mt-60">
              <div className="row justify-content-center">
                <div className="row align-items-center">
                  <img src="https://upgrade-chat.nyc3.cdn.digitaloceanspaces.com/landing/images/upgradechatleaderboard.png" width="85%" height="80%" className="img-fluid mx-auto d-block" alt="Discord Invite Referral Tracker" />
                </div>
                <div className="section-title ml-lg-5 mt-5">
                  <h4 className="title mb-4 text-center">
                    Grow Your Server With a Full
                    <span className="text-primary">
                      <a href="https://upgrade.chat/referrals"> Referral Dashboard</a>
                    </span>{" "}
                    and Analytics.
                  </h4>
                  <p className="text-muted text-center">
                    Upgrade.Chat offers affiliate referral tracking for your Discord server. Reward your members with account credits for each new member they refer to your server. Track invites and credits all from the dashboard! Perfect for creating contests and reaching more users organically.
                  </p>
                </div>
              </div>
            </div>

            <section className="section bg-white rounded" id="why">
              <div className="container bg-white rounded">
                <div className="row justify-content-center bg-white rounded">
                  <div className="col-12 text-center">
                    <div className="section-title mb-4 pb-2">
                      <h4 className="title mb-4">See Why People Are Switching to Upgrade.Chat</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">
                        Not only do we offer <span className="text-primary font-weight-bold">Lower Rates</span>, PayPal and Stripe, we are constantly adding new features to help maximize your server automation, passive income, and reduction in marketing costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-md-4 col-12 mt-4 pt-2">
                    <div className="card pricing-rates starter-plan bg-light py-5 border-0 rounded text-center">
                      <div className="card-body">
                        <h2 className="title text-uppercase text-primary mb-4">Upgrade.Chat</h2>
                        <div className="text-center">
                          <h1 className="price mb-0">6%</h1>
                          <h6 className="text-muted" style={{ fontSize: "xx-small" }}>
                            *fee on top of merchant processing
                          </h6>
                          <p></p>
                        </div>

                        <ul className="feature list-unstyled pl-0">
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>Full Discord Server Management
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>Affiliate Program with Dashboard
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>Free & Paid Trials for Members
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>Coupons & Limited Redemptions
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>Auto-Ban Members on Dispute
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>Full Digital Store Included
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>Instant Access to Payments
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>No Payout Fee on Your Earnings
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>Pay-What-You-Want Access
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>Any Length Subscriptions
                          </li>
                        </ul>
                        <a href="https://upgrade.chat/invite" className="btn btn-primary mt-4">
                          One Click Signup
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-12 mt-4 pt-2">
                    <div className="card pricing-rates bg-light py-5 border-0 rounded text-center">
                      <div className="card-body">
                        <h2 className="title text-uppercase mb-4">Patreon</h2>
                        <div className="text-center">
                          <h1 className="price mb-0">12%</h1>
                          <h6 className="text-muted" style={{ fontSize: "xx-small" }}>
                            *fee on top of merchant processing
                          </h6>
                          <p></p>
                        </div>

                        <ul className="feature list-unstyled pl-0">
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Full Discord Server Management
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Affiliate Program with Dashboard
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Free & Paid Trials for Members
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Coupons & Limited Redemptions
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Auto-Ban Members on Dispute
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Full Digital Store Included
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>Instant Access to Payments
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>No Payout Fee on Your Earnings
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Pay-What-You-Want Access
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Any Length Subscriptions
                          </li>
                        </ul>
                        <a href="https://www.patreon.com/product/pricing" className="btn btn-primary mt-4">
                          View Prices
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-12 mt-4 pt-2">
                    <div className="card pricing-rates bg-light py-5 border-0 rounded text-center">
                      <div className="card-body">
                        <h2 className="title text-uppercase mb-4">OnlyFans</h2>
                        <div className="text-center">
                          <h1 className="price mb-0">20%</h1>
                          <h6 className="text-muted" style={{ fontSize: "xx-small" }}>
                            *fee on top of merchant processing
                          </h6>
                          <p></p>
                        </div>

                        <ul className="feature list-unstyled pl-0">
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Full Discord Server Management
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Affiliate Program with Dashboard
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Free & Paid Trials for Members
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Coupons & Limited Redemptions
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Auto-Ban Members on Dispute
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Full Digital Store Included
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Instant Access to Payments
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="check" className="fea icon-sm text-success mr-2"></i>No Payout Fee on Your Earnings
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Pay-What-You-Want Access
                          </li>
                          <li className="feature-list text-muted">
                            <i data-feather="x" className="fea icon-sm text-warning mr-2"></i>Any Length Subscriptions
                          </li>
                        </ul>
                        <a href="https://onlyfans.com/faq/2/14" className="btn btn-primary mt-4">
                          View Prices
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="container">
              <div className="row mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-1 justify-content-center">
                <div className="col-12 text-center">
                  <div className="section-title">
                    <h4 className="title mb-4">Install Upgrade.Chat Now!</h4>
                    <p className="text-muted para-desc mx-auto">
                      Get Started in a few <span className="text-primary font-weight-bold">minutes</span> by clicking below to setup the Discord bot to turn your server into a PayPal and Credit Card payment gateway and accept donations, subscriptions and more!
                    </p>
                    <div className="mt-4">
                      <a href="https://upgrade.chat/control-panel" className="btn btn-primary mt-2 mr-2" alt="Discord Donatebot">
                        Invite Bot Now
                      </a>
                      <a href="https://upgrade.chat/support" className="btn btn-outline-primary mt-2" alt="Discord Donate bot">
                        Get Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="position-relative">
            <div className="shape overflow-hidden text-footer">
              <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default HomePage;
