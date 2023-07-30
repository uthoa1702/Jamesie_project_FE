export default function MobileNav() {
    return(
        <>
            <div
                className="header-menu header-menu--folder-list
    bright




    "
                data-current-styles='{
  "layout": "brandingCenter",
  "action": {
    "buttonText": "Get Started",
    "newWindow": false
  },
  "showSocial": true,
  "socialOptions": {
    "socialBorderShape": "none",
    "socialBorderStyle": "outline",
    "socialBorderThickness": {
      "unit": "px",
      "value": 1.0
    }
  },
  "sectionTheme": "",
  "menuOverlayTheme": "bright",
  "menuOverlayAnimation": "fade",
  "cartStyle": "cart",
  "cartText": "Cart",
  "showEmptyCartState": true,
  "cartOptions": {
    "iconType": "solid-7",
    "cartBorderShape": "none",
    "cartBorderStyle": "outline",
    "cartBorderThickness": {
      "unit": "px",
      "value": 1.0
    }
  },
  "showButton": false,
  "showCart": true,
  "showAccountLogin": true,
  "headerStyle": "dynamic",
  "languagePicker": {
    "enabled": false,
    "iconEnabled": false,
    "iconType": "globe",
    "flagShape": "shiny",
    "languageFlags": [ ]
  },
  "mobileOptions": {
    "layout": "logoCenterNavLeft",
    "menuIcon": "doubleLineHamburger",
    "menuIconOptions": {
      "style": "doubleLineHamburger",
      "thickness": {
        "unit": "px",
        "value": 1.0
      }
    }
  },
  "dynamicOptions": {
    "border": {
      "enabled": false,
      "position": "allSides",
      "thickness": {
        "unit": "px",
        "value": 4.0
      }
    }
  },
  "solidOptions": {
    "headerOpacity": {
      "unit": "%",
      "value": 100.0
    },
    "border": {
      "enabled": false,
      "position": "allSides",
      "thickness": {
        "unit": "px",
        "value": 4.0
      }
    },
    "dropShadow": {
      "enabled": false,
      "blur": {
        "unit": "px",
        "value": 30.0
      },
      "spread": {
        "unit": "px",
        "value": 0.0
      },
      "distance": {
        "unit": "px",
        "value": 0.0
      }
    },
    "blurBackground": {
      "enabled": false,
      "blurRadius": {
        "unit": "px",
        "value": 12.0
      }
    }
  },
  "gradientOptions": {
    "gradientType": "faded",
    "headerOpacity": {
      "unit": "%",
      "value": 90.0
    },
    "border": {
      "enabled": false,
      "position": "allSides",
      "thickness": {
        "unit": "px",
        "value": 4.0
      }
    },
    "dropShadow": {
      "enabled": false,
      "blur": {
        "unit": "px",
        "value": 30.0
      },
      "spread": {
        "unit": "px",
        "value": 0.0
      },
      "distance": {
        "unit": "px",
        "value": 0.0
      }
    },
    "blurBackground": {
      "enabled": false,
      "blurRadius": {
        "unit": "px",
        "value": 12.0
      }
    }
  },
  "showPromotedElement": false
}'
                data-section-id="overlay-nav"
                data-show-account-login="true"
                data-test="header-menu"
            >
                <div className="header-menu-bg theme-bg--primary"/>
                <div className="header-menu-nav">
                    <nav className="header-menu-nav-list">
                        <div data-folder="root" className="header-menu-nav-folder">
                            {/* Menu Navigation */}
                            <div className="header-menu-nav-folder-content">
                                <div className="container header-menu-nav-item header-menu-nav-item--external">
                                    <a href="/shop/new-arrivals">New Arrivals</a>
                                </div>
                                <div className="container header-menu-nav-item header-menu-nav-item--external">
                                    <a href="/shop/baby">Baby</a>
                                </div>
                                <div className="container header-menu-nav-item header-menu-nav-item--external">
                                    <a href="/shop/kids">Kids</a>
                                </div>
                                <div className="container header-menu-nav-item header-menu-nav-item--external">
                                    <a href="/shop/sale">Sale</a>
                                </div>
                                <div className="container header-menu-nav-item header-menu-nav-item--collection">
                                    <a href="/about">
                                        <div className="header-menu-nav-item-content">About</div>
                                    </a>
                                </div>
                                <div
                                    className="user-accounts-link header-menu-nav-item header-nav-item--collection customerAccountLoginMobile"
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
                            </div>
                            <div className="header-menu-actions">
                                <div
                                    className="header-menu-actions-action header-menu-actions-action--social mobile">
                                    <a
                                        className="icon icon--lg icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"
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
                                </div>
                                <div
                                    className="header-menu-actions-action header-menu-actions-action--social mobile">
                                    <a
                                        className="icon icon--lg icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"
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
                                </div>
                                <div
                                    className="header-menu-actions-action header-menu-actions-action--social mobile">
                                    <a
                                        className="icon icon--lg icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline"
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
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            </>
    )

}