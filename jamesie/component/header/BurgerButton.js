import {useState} from "react";

export default function BurgerButton() {

    return(
        <>
            <div className="header-display-mobile" data-content-field="site-title" >

                {/* Social */}
                {/* Burger */}
                <div
                    className="header-burger

  menu-overlay-has-visible-non-navigation-items

"
                    data-animation-role="header-element"
                >
                    <button
                        className="header-burger-btn burger"
                        data-test="header-burger"
                    >
            <span
                hidden=""
                className="js-header-burger-open-title visually-hidden"
            >
              Open Menu
            </span>
                        <span
                            hidden=""
                            className="js-header-burger-close-title visually-hidden"
                        >
              Close Menu
            </span>
                        <div className="burger-box">
                            <div className="burger-inner header-menu-icon-doubleLineHamburger">
                                <div className="top-bun"/>
                                <div className="patty"/>
                                <div className="bottom-bun"/>
                            </div>
                        </div>
                    </button>
                </div>
                {/* Title and nav wrapper */}

                <div className="header-title-nav-wrapper" >
                    {/* Nav */}
                    <div className="header-nav">
                        <div className="header-nav-wrapper">
                            <nav className="header-nav-list">
                                <div className="header-nav-item header-nav-item--external">
                                    <a
                                        href="/shop/new-arrivals"
                                        data-animation-role="header-element"
                                    >
                                        New Arrivals
                                    </a>
                                </div>
                                <div className="header-nav-item header-nav-item--external">
                                    <a href="/shop/baby" data-animation-role="header-element">
                                        Baby
                                    </a>
                                </div>
                                <div className="header-nav-item header-nav-item--external">
                                    <a href="/shop/kids" data-animation-role="header-element">
                                        Kids
                                    </a>
                                </div>
                                <div className="header-nav-item header-nav-item--external">
                                    <a href="/shop/sale" data-animation-role="header-element">
                                        Sale
                                    </a>
                                </div>
                                <div className="header-nav-item header-nav-item--collection">
                                    <a href="/about" data-animation-role="header-element">
                                        About
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* Title */}
                    <div
                        className="
              header-title

            "
                        data-animation-role="header-element"
                    >
                        <div className="header-title-text">
                            <a id="site-title" href="/" data-animation-role="header-element">
                                Jamesie
                            </a>
                        </div>
                    </div>
                </div>
                {/* Actions */}
                <div className="header-actions header-actions--right">
                    <div
                        className="user-accounts-link header-nav-item header-nav-item--collection customerAccountLoginDesktop"
                        data-controller="UserAccountLink"
                        data-animation-role="header-element"
                    >
                        <a
                            className="user-accounts-text-link header-nav-item"
                            href="#"
                            data-animation-role="header-element"
                        >
                            <span className="unauth">Login</span>
                            <span className="auth">Account</span>
                        </a>
                    </div>
                    <div className="header-actions-action header-actions-action--social">
                        <a
                            className="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"
                            href="http://facebook.com/squarespace"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <svg viewBox="23 23 64 64">
                                <use
                                    xlinkHref="#facebook-unauth-icon"
                                    width={110}
                                    height={110}
                                />
                            </svg>
                        </a>
                        <a
                            className="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"
                            href="http://twitter.com/squarespace"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <svg viewBox="23 23 64 64">
                                <use
                                    xlinkHref="#twitter-unauth-icon"
                                    width={110}
                                    height={110}
                                />
                            </svg>
                        </a>
                        <a
                            className="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"
                            href="http://instagram.com/squarespace"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <svg viewBox="23 23 64 64">
                                <use
                                    xlinkHref="#instagram-unauth-icon"
                                    width={110}
                                    height={110}
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="showOnMobile">
                        <div className="header-actions-action header-actions-action--cart">
                            <a
                                href="/cart"
                                className="cart-style-icon icon--stroke icon--fill icon--cart sqs-custom-cart  header-icon  show-empty-cart-state cart-quantity-zero header-icon-border-shape-none header-icon-border-style-outline"
                            >
                <span className="Cart-inner">
                  <svg
                      className="icon icon--cart"
                      width={61}
                      height={49}
                      viewBox="0 0 61 49"
                  >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H13.6362C14.3878 0.5 15.0234 1.05632 15.123 1.80135L16.431 11.5916H59C59.5122 11.5916 59.989 11.8529 60.2645 12.2847C60.54 12.7165 60.5762 13.2591 60.3604 13.7236L50.182 35.632C49.9361 36.1614 49.4054 36.5 48.8217 36.5H18.0453C17.2937 36.5 16.6581 35.9437 16.5585 35.1987L12.3233 3.5H2C1.17157 3.5 0.5 2.82843 0.5 2ZM16.8319 14.5916L19.3582 33.5H47.8646L56.6491 14.5916H16.8319Z"
                    />
                    <path d="M18.589 35H49.7083L60 13H16L18.589 35Z"/>
                    <path
                        d="M21 49C23.2091 49 25 47.2091 25 45C25 42.7909 23.2091 41 21 41C18.7909 41 17 42.7909 17 45C17 47.2091 18.7909 49 21 49Z"/>
                    <path
                        d="M45 49C47.2091 49 49 47.2091 49 45C49 42.7909 47.2091 41 45 41C42.7909 41 41 42.7909 41 45C41 47.2091 42.7909 49 45 49Z"/>
                  </svg>
                  <div className="icon-cart-quantity">
                    <span className="cart-quantity-container">
                      <span className="sqs-cart-quantity">0</span>
                    </span>
                  </div>
                </span>
                            </a>
                        </div>
                    </div>
                    <div className="showOnDesktop">
                        <div className="header-actions-action header-actions-action--cart">
                            <a
                                href="/cart"
                                className="cart-style-icon icon--stroke icon--fill icon--cart sqs-custom-cart  header-icon  show-empty-cart-state cart-quantity-zero header-icon-border-shape-none header-icon-border-style-outline"
                            >
                <span className="Cart-inner">
                  <svg
                      className="icon icon--cart"
                      width={61}
                      height={49}
                      viewBox="0 0 61 49"
                  >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H13.6362C14.3878 0.5 15.0234 1.05632 15.123 1.80135L16.431 11.5916H59C59.5122 11.5916 59.989 11.8529 60.2645 12.2847C60.54 12.7165 60.5762 13.2591 60.3604 13.7236L50.182 35.632C49.9361 36.1614 49.4054 36.5 48.8217 36.5H18.0453C17.2937 36.5 16.6581 35.9437 16.5585 35.1987L12.3233 3.5H2C1.17157 3.5 0.5 2.82843 0.5 2ZM16.8319 14.5916L19.3582 33.5H47.8646L56.6491 14.5916H16.8319Z"
                    />
                    <path d="M18.589 35H49.7083L60 13H16L18.589 35Z"/>
                    <path
                        d="M21 49C23.2091 49 25 47.2091 25 45C25 42.7909 23.2091 41 21 41C18.7909 41 17 42.7909 17 45C17 47.2091 18.7909 49 21 49Z"/>
                    <path
                        d="M45 49C47.2091 49 49 47.2091 49 45C49 42.7909 47.2091 41 45 41C42.7909 41 41 42.7909 41 45C41 47.2091 42.7909 49 45 49Z"/>
                  </svg>
                  <div className="icon-cart-quantity">
                    <span className="cart-quantity-container">
                      <span className="sqs-cart-quantity">0</span>
                    </span>
                  </div>
                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            </>
    )

}