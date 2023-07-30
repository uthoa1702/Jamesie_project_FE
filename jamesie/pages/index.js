import HeaderHome from "../component/header/HeaderHome";
import Content from "../component/main/Content";

function Home() {

    const firstSection = document.querySelector('.page-section');
    const header = document.querySelector('.header');
    const mobileOverlayNav = document.querySelector('.header-menu');
    const sectionBackground = firstSection ? firstSection.querySelector('.section-background') : null;
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const firstSectionHasBackground = firstSection ? firstSection.className.indexOf('has-background') >= 0 : false;
    const isFirstSectionInset = firstSection ? firstSection.className.indexOf('background-width--inset') >= 0 : false;
    const isLayoutEngineSection = firstSection ? firstSection.className.indexOf('layout-engine-section') >= 0 : false;

    if (firstSection) {
        firstSection.style.paddingTop = headerHeight + 'px';
    }
    if (sectionBackground && isLayoutEngineSection) {
        if (isFirstSectionInset) {
            sectionBackground.style.top = headerHeight + 'px';
        } else {
            sectionBackground.style.top = '';
        }
    }
    return(
        <>

                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="https://assets.squarespace.com/universal/default-favicon.ico"
                />
                <link rel="canonical" href="https://skyloop-fluid-demo.squarespace.com" />
                <meta property="og:site_name" content="Skyloop" />
                <meta property="og:title" content="Skyloop" />
                <meta
                    property="og:url"
                    content="https://skyloop-fluid-demo.squarespace.com"
                />
                <meta property="og:type" content="website" />
                <meta itemProp="name" content="Skyloop" />
                <meta itemProp="url" content="https://skyloop-fluid-demo.squarespace.com" />
                <meta name="twitter:title" content="Skyloop" />
                <meta
                    name="twitter:url"
                    content="https://skyloop-fluid-demo.squarespace.com"
                />
                <meta name="twitter:card" content="summary" />
                <meta name="description" content="" />
                <link rel="preconnect" href="https://images.squarespace-cdn.com" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://static1.squarespace.com/static/versioned-site-css/624b5039155a6b00f0e1f5f5/13/5c5a519771c10ba3470d8101/624b503a155a6b00f0e1f629/1417/site.css"
                />
                {/* End of Squarespace Headers */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/versioned-assets/1690406052257-HFCA2VVR8R1QMYFLAT56/static.css"
                />
                <link rel="stylesheet" href="css.css" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="//assets.squarespace.com/universal/styles-compressed/commerce-d52be4507e94117105942-min.en-US.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="//assets.squarespace.com/universal/styles-compressed/sign-up-pill-78cacc0fc7213a9352c0d-min.en-US.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="//assets.squarespace.com/universal/styles-compressed/user-account-core-68c2f27a2a82c80680342-min.en-US.css"
                />




                <HeaderHome>


                </HeaderHome>
            <Content/>


        </>
            )

}
export default Home