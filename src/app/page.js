// import Image from "next/image";

export default function Home() {
  return (
    <>
      <header id="frn-header" className="frn-header">
        <div
          className="title-bar grid-x grid-padding-x align-justify hide-for-large"
          data-responsive-toggle="responsive-topBar"
          data-hide-for="large"
        >
          <div className="cell medium-7 frnKopfLogo">
            <div className="frnkopfLogo"></div>
            <a
              href="#"
              id="frnKopfLogoLinkMobile"
              title="Startseite"
              aria-label="Zur freenet Startseite"
            ></a>
          </div>
          <div className="cell medium-5 frnAngeboteMobile">
            <div className="grid-x align-right">
              <div className="cell small-10 medium-12 frn-wetter">
                <div className="hide-for-large">
                  <a
                    id="frnAngeboteMobile"
                    href="https://ndirect.ppro.de/click/ajnU?utm_content=mobile_control"
                    target="_blank"
                    rel="noopener nofollow"
                    aria-label="Mobilfunk"
                  >
                    <button
                      type="button"
                      className="button frn-secondaryButton"
                      aria-label="Mobilfunk"
                    >
                      Mobilfunk
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "fixed", top: 0, width: "1320px", zIndex: 4 }}>
          <div
            className="top-bar show-for-large frntopbar"
            id="responsive-topBarr"
          >
            <div className="frnkopfLogo"></div>
            <a
              href="#"
              id="frnKopfLogoLink"
              title="Startseite"
              aria-label="Zur freenet Startseite"
            ></a>
            <div className="horizontal-center">
              <div className="has-edit-button">
                <ul className="menu frntopbar__menu icons icon-right">
                  <li className="frnProduct" aria-hidden="true">
                    <a
                      className="frntopbar__menu--Item menutop--mobilfunk"
                      href="https://ndirect.ppro.de/click/ajnU"
                      target="_blank"
                      rel="noopener nofollow"
                      title="Mobilfunk"
                      id="head_mobilfunk"
                    >
                      Mobilfunk
                    </a>
                    <div>
                      <a
                        href="https://ndirect.ppro.de/click/ajnU"
                        target="_blank"
                        className="frntopbar__menuContent"
                      >
                        Unabhängiger Mobilfunk in allen Netzen
                      </a>
                    </div>
                  </li>
                  <li className="frnProduct" aria-hidden="true">
                    <a
                      className="frntopbar__menu--Item menutop--internet"
                      href="https://ndirect.ppro.de/click/ami6"
                      target="_blank"
                      rel="noopener nofollow"
                      title="Internet"
                      id="head_internet"
                    >
                      Internet
                    </a>
                    <div>
                      <a
                        href="https://ndirect.ppro.de/click/ami6"
                        target="_blank"
                        className="frntopbar__menuContent"
                      >
                        Internet für zu Hause und unterwegs
                      </a>
                    </div>
                  </li>
                  <li className="frnProduct" aria-hidden="true">
                    <a
                      className="frntopbar__menu--Item menutop--tv-entertainment"
                      href="https://ndirect.ppro.de/click/ami9"
                      target="_blank"
                      rel="noopener nofollow"
                      title="TV-Entertainment"
                      id="head_tv-entertainment"
                    >
                      TV-Entertainment
                    </a>
                    <div>
                      <a
                        href="https://ndirect.ppro.de/click/ami9"
                        target="_blank"
                        className="frntopbar__menuContent"
                      >
                        Fernsehen wann und <br />
                        wo du willst
                      </a>
                    </div>
                  </li>
                  <li className="frnProduct" aria-hidden="true">
                    <a
                      className="frntopbar__menu--Item menutop--mailcloud"
                      href="https://email.freenet.de/index.html?epid=e9900001555"
                      target="_blank"
                      rel="noopener nofollow"
                      title="Mail & Cloud"
                      id="head_mail_&_cloud"
                    >
                      Mail & Cloud
                    </a>
                    <div>
                      <a
                        href="https://email.freenet.de/index.html?epid=e9900001555"
                        target="_blank"
                        className="frntopbar__menuContent"
                      >
                        Gratis E-Mail, Webseiten und Cloudspeicher
                      </a>
                    </div>
                  </li>

                  <li className="frnProduct angebote">
                    <a
                      href="https://ndirect.ppro.de/click/ajnU"
                      target="_blank"
                      rel="noopener nofollow"
                      className=""
                      aria-label="Alle Angebote"
                    >
                      <button
                        type="button"
                        className="button frn-secondaryButton"
                      >
                        Alle Angebote
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="frnBanner" className="hide-for-small-only">
          <div id="frnBannerAd">
            <div id="fnbanner">
              <div id="div-gpt-ad-banner"></div>
              {/* <script>
                Frn.on("loadAdTagsStationary", function () {
                  SDG.Publisher.registerSlot(
                    "banner",
                    document.getElementById("div-gpt-ad-banner")
                  ).load();
                });
              </script> */}
            </div>
          </div>
        </div>
        <div className="cell ad-mobile show-for-small-only">
          <div id="ad-topmobile" className="hide-for-medium frn_adbox">
            <div id="div-gpt-ad-topmobile"></div>
            <script>
              {/* Frn.on("loadAdTagsStationary", function () {
                SDG.Publisher.registerSlot(
                  "topmobile",
                  "div-gpt-ad-topmobile"
                ).load();
              }); */}
            </script>
          </div>
        </div>
        <div
          className="grid-x grid-padding-x grid-padding-y hide-for-large"
          id="frnWetterSucheBlock"
        >
          <div className="cell medium-5 medium-offset-7">
            <div className="grid-x alignRight">
              <div className="cell small-7 medium-6 frn-wetter">
                <div className="hide-for-large">
                  <div className="frnWetterContent">
                    {/* <a href="nachrichten/wetter/index.html" aria-label="Wetter"> */}
                    <a href="#" aria-label="Wetter">
                      <span className="frn_wetterBoxWsName"></span>
                      <span className="frn_wetterZahl"></span>
                      <div className="frn_weather_icon_header_outer frn_weather_icon_grey"></div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="cell small-3 medium-3 frn-suche grid-x align-right">
                {/* <a href="suche.html"> */}
                <a href="#">
                  <img
                    width="17"
                    height="18"
                    src="assets/icons/icon-search.svg"
                    className="img-fluid icon-search-mobile"
                    alt="freenet-search"
                    title="freenet-search"
                  />
                </a>
              </div>
              <div className="cell small-2 medium-3 grid-x align-right">
                <button
                  className="hamburger-menu"
                  data-toggle="responsive-topBar"
                  area-label="Menü"
                >
                  <img
                    width="16"
                    height="12"
                    className="hamburger-button"
                    src="assets/icons/icon-burger.svg"
                    alt="menu"
                    title="menu"
                  />
                  <img
                    width="16"
                    height="16"
                    className="hamburgerClose-button"
                    src="assets/icons/icon-burger-close.svg"
                    alt="menu"
                    title="menu"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="top-bar frn_channel_productbar lazy-flyouts"
          id="responsive-topBar"
        >
          <div className="top-bar-left channel_bar">
            <ul
              className="menu accordion-menu frnbottombar frnmainbar vertical large-horizontal"
              data-submenu-toggle="true"
              data-hover-delay="300"
              data-responsive-menu="accordion large-dropdown"
              data-multi-open="false"
            >
              <li className="frn_channel frn_channel--mobilfunk">
                <a
                  href="https://ndirect.ppro.de/click/ajnU"
                  className="frn_channelName mobilfunk"
                  target="_blank"
                  id="channelNav_mobilfunk"
                  title="Mobilfunk"
                >
                  Mobilfunk
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--mobilfunk">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu"></div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--internet">
                <a
                  href="https://ndirect.ppro.de/click/ami6"
                  className="frn_channelName internet"
                  target="_blank"
                  id="channelNav_internet"
                  title="Internet"
                >
                  Internet
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--internet">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu"></div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--tv-entertainment">
                <a
                  href="https://ndirect.ppro.de/click/ami9"
                  className="frn_channelName tv-entertainment"
                  target="_blank"
                  id="channelNav_tv-entertainment"
                  title="TV-Entertainment"
                >
                  TV-Entertainment
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--tv-entertainment">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu"></div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--mail_cloud">
                <a
                  href="https://email.freenet.de/index.html?epid=e9900001555"
                  className="frn_channelName mail & cloud"
                  target="_self"
                  id="channelNav_mail_&_cloud"
                  title="Mail & Cloud"
                >
                  Mail & Cloud
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--mail_cloud">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu"></div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--news">
                {/* <a
                  href="nachrichten/index.html"
                  className="frn_channelName news"
                  target="_self"
                  id="channelNav_news"
                  title="News"
                > */}
                <a
                  href="#"
                  className="frn_channelName news"
                  target="_self"
                  id="channelNav_news"
                  title="News"
                >
                  News
                  <img
                    className="plus"
                    src="assets/icons/icon-menu-plus.svg"
                    alt="menu"
                    title="menu"
                  />
                  <img
                    className="minus"
                    src="assets/icons/icon-menu-minus.svg"
                    alt="menu"
                    title="menu"
                  />
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--news">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu">
                      <li>
                        {/* <a
                          href="nachrichten/politik/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_politik"
                          title="Politik"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_politik"
                          title="Politik"
                        >
                          Politik
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="nachrichten/vermischtes/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_vermischtes"
                          title="Vermischtes"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_vermischtes"
                          title="Vermischtes"
                        >
                          Vermischtes
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="nachrichten/wirtschaft/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_wirtschaft"
                          title="Wirtschaft"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_wirtschaft"
                          title="Wirtschaft"
                        >
                          Wirtschaft
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="nachrichten/gute-nachrichten/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_gute_nachrichten"
                          title="Gute Nachrichten"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_gute_nachrichten"
                          title="Gute Nachrichten"
                        >
                          Gute Nachrichten
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="nachrichten/polizeimeldungen/archiv.html"
                          className="frn_nestedMenu"
                          id="channelNav_polizeimeldungen"
                          title="Polizeimeldungen"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_polizeimeldungen"
                          title="Polizeimeldungen"
                        >
                          Polizeimeldungen
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="nachrichten/wetter/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_wetter"
                          title="Wetter"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_wetter"
                          title="Wetter"
                        >
                          Wetter
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://einbuergerungstest.freenet.de/"
                          className="frn_nestedMenu"
                          id="channelNav_einbürgerungstest"
                          title="Einbürgerungstest"
                        >
                          Einbürgerungstest
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://iqtest.freenet.de/"
                          className="frn_nestedMenu"
                          id="channelNav_iq-test"
                          title="IQ-Test"
                        >
                          IQ-Test
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--sport">
                {/* <a
                  href="sport/index.html"
                  className="frn_channelName sport"
                  target="_self"
                  id="channelNav_sport"
                  title="Sport"
                > */}
                <a
                  href="#"
                  className="frn_channelName sport"
                  target="_self"
                  id="channelNav_sport"
                  title="Sport"
                >
                  Sport
                  <img
                    className="plus"
                    src="assets/icons/icon-menu-plus.svg"
                    alt="menu"
                    title="menu"
                  />
                  <img
                    className="minus"
                    src="assets/icons/icon-menu-minus.svg"
                    alt="menu"
                    title="menu"
                  />
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--sport">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu">
                      <li>
                        {/* <a
                          href="sport/ergebnisse/fussball/bundesliga/konferenz/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_liveticker"
                          title="Liveticker"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_liveticker"
                          title="Liveticker"
                        >
                          Liveticker
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="sport/bundesliga/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_bundesliga"
                          title="Bundesliga"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_bundesliga"
                          title="Bundesliga"
                        >
                          Bundesliga
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="sport/zweite-bundesliga/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_2._bundesliga"
                          title="2. Bundesliga"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_2._bundesliga"
                          title="2. Bundesliga"
                        >
                          2. Bundesliga
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="sport/champions-league/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_champions_league"
                          title="Champions League"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_champions_league"
                          title="Champions League"
                        >
                          Champions League
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="sport/dfb-pokal/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_dfb-pokal"
                          title="DFB-Pokal"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_dfb-pokal"
                          title="DFB-Pokal"
                        >
                          DFB-Pokal
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="sport/nationalmannschaft/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_nationalmannschaft"
                          title="Nationalmannschaft"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_nationalmannschaft"
                          title="Nationalmannschaft"
                        >
                          Nationalmannschaft
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="sport/frauenfussball/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_frauenfußball"
                          title="Frauenfußball"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_frauenfußball"
                          title="Frauenfußball"
                        >
                          Frauenfußball
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="sport/formel-1/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_formel_1"
                          title="Formel 1"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_formel_1"
                          title="Formel 1"
                        >
                          Formel 1
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="sport/ergebnisse/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_datencenter"
                          title="Datencenter"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_datencenter"
                          title="Datencenter"
                        >
                          Datencenter
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://fussball-quiz.freenet.de/"
                          className="frn_nestedMenu"
                          id="channelNav_fussball-quiz"
                          title="Fussball-Quiz"
                        >
                          Fussball-Quiz
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--finanzen">
                {/* <a
                  href="finanzen/index.html"
                  className="frn_channelName finanzen"
                  target="_self"
                  id="channelNav_finanzen"
                  title="Finanzen"
                > */}
                <a
                  href="#"
                  className="frn_channelName finanzen"
                  target="_self"
                  id="channelNav_finanzen"
                  title="Finanzen"
                >
                  Finanzen
                  <img
                    className="plus"
                    src="assets/icons/icon-menu-plus.svg"
                    alt="menu"
                    title="menu"
                  />
                  <img
                    className="minus"
                    src="assets/icons/icon-menu-minus.svg"
                    alt="menu"
                    title="menu"
                  />
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--finanzen">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu">
                      <li>
                        {/* <a
                          href="finanzen/nachrichten/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_finanznachrichten"
                          title="Finanznachrichten"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_finanznachrichten"
                          title="Finanznachrichten"
                        >
                          Finanznachrichten
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://boerse.freenet.de/"
                          className="frn_nestedMenu"
                          id="channelNav_börse"
                          title="Börse"
                        >
                          Börse
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="finanzen/jobs-karriere/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_jobs_&_karriere"
                          title="Jobs & Karriere"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_jobs_&_karriere"
                          title="Jobs & Karriere"
                        >
                          Jobs & Karriere
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="finanzen/kredit-banking/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_kredit_&_banking"
                          title="Kredit & Banking"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_kredit_&_banking"
                          title="Kredit & Banking"
                        >
                          Kredit & Banking
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="finanzen/recht-steuern/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_recht_&_steuern"
                          title="Recht & Steuern"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_recht_&_steuern"
                          title="Recht & Steuern"
                        >
                          Recht & Steuern
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="finanzen/spartipps/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_spartipps"
                          title="Spartipps"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_spartipps"
                          title="Spartipps"
                        >
                          Spartipps
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="finanzen/immobilien/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_immobilien"
                          title="Immobilien"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_immobilien"
                          title="Immobilien"
                        >
                          Immobilien
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="finanzen/versicherung/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_versicherung"
                          title="Versicherung"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_versicherung"
                          title="Versicherung"
                        >
                          Versicherung
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="energy.html"
                          className="frn_nestedMenu"
                          id="channelNav_strom-_und_gaspreisvergleich"
                          title="Strom- und Gaspreisvergleich"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_strom-_und_gaspreisvergleich"
                          title="Strom- und Gaspreisvergleich"
                        >
                          Strom- und Gaspreisvergleich
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="finanzen/gehaltsrechner/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_brutto-netto-rechner"
                          title="Brutto-Netto-Rechner"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_brutto-netto-rechner"
                          title="Brutto-Netto-Rechner"
                        >
                          Brutto-Netto-Rechner
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="finanzen/finanzrechner/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_finanzrechner"
                          title="Finanzrechner"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_finanzrechner"
                          title="Finanzrechner"
                        >
                          Finanzrechner
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="finanzen/jobs-karriere/tipptrainer/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_tipptrainer"
                          title="Tipptrainer"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_tipptrainer"
                          title="Tipptrainer"
                        >
                          Tipptrainer
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--auto">
                {/* <a
                  href="auto/index.html"
                  className="frn_channelName auto"
                  target="_self"
                  id="channelNav_auto"
                  title="Auto"
                > */}
                <a
                  href="#"
                  className="frn_channelName auto"
                  target="_self"
                  id="channelNav_auto"
                  title="Auto"
                >
                  Auto
                  <img
                    className="plus"
                    src="assets/icons/icon-menu-plus.svg"
                    alt="menu"
                    title="menu"
                  />
                  <img
                    className="minus"
                    src="assets/icons/icon-menu-minus.svg"
                    alt="menu"
                    title="menu"
                  />
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--auto">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu">
                      <li>
                        {/* <a
                          href="auto/neuheiten/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_neuheiten"
                          title="Neuheiten"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_neuheiten"
                          title="Neuheiten"
                        >
                          Neuheiten
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="auto/tests/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_tests"
                          title="Tests"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_tests"
                          title="Tests"
                        >
                          Tests
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="auto/magazin/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_magazin"
                          title="Magazin"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_magazin"
                          title="Magazin"
                        >
                          Magazin
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="auto/youngtimeroldtimer/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_youngtimer_&_oldtimer"
                          title="Youngtimer & Oldtimer"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_youngtimer_&_oldtimer"
                          title="Youngtimer & Oldtimer"
                        >
                          Youngtimer & Oldtimer
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="auto/wohnmobile/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_wohnmobile"
                          title="Wohnmobile"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_wohnmobile"
                          title="Wohnmobile"
                        >
                          Wohnmobile
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="auto/elektro-autos/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_elektro-autos"
                          title="Elektro-Autos"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_elektro-autos"
                          title="Elektro-Autos"
                        >
                          Elektro-Autos
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="auto/service/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_service"
                          title="Service"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_service"
                          title="Service"
                        >
                          Service
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="auto/fuhrpark/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_fuhrparkmanagement"
                          title="Fuhrparkmanagement"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_fuhrparkmanagement"
                          title="Fuhrparkmanagement"
                        >
                          Fuhrparkmanagement
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="finanzen/promillerechner/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_promille-rechner"
                          title="Promille-Rechner"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_promille-rechner"
                          title="Promille-Rechner"
                        >
                          Promille-Rechner
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="auto/bussgeldrechner/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_bussgeldrechner"
                          title="Bussgeldrechner"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_bussgeldrechner"
                          title="Bussgeldrechner"
                        >
                          Bussgeldrechner
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://fahrschule.freenet.de/"
                          className="frn_nestedMenu"
                          id="channelNav_führerscheintest"
                          title="Führerscheintest"
                        >
                          Führerscheintest
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--unterhaltung">
                {/* <a
                  href="unterhaltung/index.html"
                  className="frn_channelName unterhaltung"
                  target="_self"
                  id="channelNav_unterhaltung"
                  title="Unterhaltung"
                > */}
                <a
                  href="#"
                  className="frn_channelName unterhaltung"
                  target="_self"
                  id="channelNav_unterhaltung"
                  title="Unterhaltung"
                >
                  Unterhaltung
                  <img
                    className="plus"
                    src="assets/icons/icon-menu-plus.svg"
                    alt="menu"
                    title="menu"
                  />
                  <img
                    className="minus"
                    src="assets/icons/icon-menu-minus.svg"
                    alt="menu"
                    title="menu"
                  />
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--unterhaltung">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu">
                      <li>
                        {/* <a
                          href="unterhaltung/promis/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_promis"
                          title="Promis"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_promis"
                          title="Promis"
                        >
                          Promis
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="unterhaltung/tv/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_tv"
                          title="TV"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_tv"
                          title="TV"
                        >
                          TV
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="unterhaltung/kino/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_kino"
                          title="Kino"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_kino"
                          title="Kino"
                        >
                          Kino
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="unterhaltung/royals/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_royals"
                          title="Royals"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_royals"
                          title="Royals"
                        >
                          Royals
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="unterhaltung/video/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_video"
                          title="Video"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_video"
                          title="Video"
                        >
                          Video
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="unterhaltung/cartoons/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_cartoons"
                          title="Cartoons"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_cartoons"
                          title="Cartoons"
                        >
                          Cartoons
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="unterhaltung/witze/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_witze"
                          title="Witze"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_witze"
                          title="Witze"
                        >
                          Witze
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="unterhaltung/quiz/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_quizzes_und_tests"
                          title="Quizzes und Tests"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_quizzes_und_tests"
                          title="Quizzes und Tests"
                        >
                          Quizzes und Tests
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="unterhaltung/memo-spiele-index/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_memos"
                          title="Memos"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_memos"
                          title="Memos"
                        >
                          Memos
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--lifestyle">
                {/* <a
                  href="lifestyle/index.html"
                  className="frn_channelName lifestyle"
                  target="_self"
                  id="channelNav_lifestyle"
                  title="Lifestyle"
                > */}
                <a
                  href="#"
                  className="frn_channelName lifestyle"
                  target="_self"
                  id="channelNav_lifestyle"
                  title="Lifestyle"
                >
                  Lifestyle
                  <img
                    className="plus"
                    src="assets/icons/icon-menu-plus.svg"
                    alt="menu"
                    title="menu"
                  />
                  <img
                    className="minus"
                    src="assets/icons/icon-menu-minus.svg"
                    alt="menu"
                    title="menu"
                  />
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--lifestyle">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu">
                      <li>
                        {/* <a
                          href="lifestyle/ratgeber/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_ratgeber"
                          title="Ratgeber"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_ratgeber"
                          title="Ratgeber"
                        >
                          Ratgeber
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="lifestyle/reisen/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_reisen"
                          title="Reisen"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_reisen"
                          title="Reisen"
                        >
                          Reisen
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="lifestyle/gesundheit/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_gesundheit"
                          title="Gesundheit"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_gesundheit"
                          title="Gesundheit"
                        >
                          Gesundheit
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="lifestyle/e-bike/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_e-bike"
                          title="E-Bike"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_e-bike"
                          title="E-Bike"
                        >
                          E-Bike
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="lifestyle/ferien/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_ferientermine"
                          title="Ferientermine"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_ferientermine"
                          title="Ferientermine"
                        >
                          Ferientermine
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="lifestyle/horoskope/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_horoskop"
                          title="Horoskop"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_horoskop"
                          title="Horoskop"
                        >
                          Horoskop
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://freenet.de/fashion"
                          className="frn_nestedMenu"
                          id="channelNav_fashion"
                          title="Fashion"
                        >
                          Fashion
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="ihre-gesundheit.html"
                          className="frn_nestedMenu"
                          id="channelNav_medikamentenvergleich"
                          title="Medikamentenvergleich"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_medikamentenvergleich"
                          title="Medikamentenvergleich"
                        >
                          Medikamentenvergleich
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--digital">
                {/* <a
                  href="digitalewelt/index.html"
                  className="frn_channelName digital"
                  target="_self"
                  id="channelNav_digital"
                  title="Digital"
                > */}
                <a
                  href="#"
                  className="frn_channelName digital"
                  target="_self"
                  id="channelNav_digital"
                  title="Digital"
                >
                  Digital
                  <img
                    className="plus"
                    src="assets/icons/icon-menu-plus.svg"
                    alt="menu"
                    title="menu"
                  />
                  <img
                    className="minus"
                    src="assets/icons/icon-menu-minus.svg"
                    alt="menu"
                    title="menu"
                  />
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--digital">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu">
                      <li>
                        {/* <a
                          href="digitalewelt/download/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_download-center"
                          title="Download-Center"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_download-center"
                          title="Download-Center"
                        >
                          Download-Center
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="digitalewelt/news/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_digital_news"
                          title="Digital News"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_digital_news"
                          title="Digital News"
                        >
                          Digital News
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="digitalewelt/computermobile/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_computer_&_mobile"
                          title="Computer & Mobile"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_computer_&_mobile"
                          title="Computer & Mobile"
                        >
                          Computer & Mobile
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="digitalewelt/onlinesicherheit/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_online_&_sicherheit"
                          title="Online & Sicherheit"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_online_&_sicherheit"
                          title="Online & Sicherheit"
                        >
                          Online & Sicherheit
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="digitalewelt/windowssoftware/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_windows_&_software"
                          title="Windows & Software"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_windows_&_software"
                          title="Windows & Software"
                        >
                          Windows & Software
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="email/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_mail_&_cloud_blog"
                          title="Mail & Cloud Blog"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_mail_&_cloud_blog"
                          title="Mail & Cloud Blog"
                        >
                          Mail & Cloud Blog
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--spielen">
                {/* <a
                  href="spielen/index.html"
                  className="frn_channelName spielen"
                  target="_self"
                  id="channelNav_spielen"
                  title="Spielen"
                > */}
                <a
                  href="#"
                  className="frn_channelName spielen"
                  target="_self"
                  id="channelNav_spielen"
                  title="Spielen"
                >
                  Spielen
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--spielen">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu">
                      <li>
                        {/* <a
                          href="spielen/online-spiele/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_online-spiele"
                          title="Online-Spiele"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_online-spiele"
                          title="Online-Spiele"
                        >
                          Online-Spiele
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/index.html#fantasy"
                          className="frn_nestedMenu"
                          id="channelNav_fantasy"
                          title="Fantasy"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_fantasy"
                          title="Fantasy"
                        >
                          Fantasy
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/index.html#zooundpark"
                          className="frn_nestedMenu"
                          id="channelNav_zoo_und_park"
                          title="Zoo und Park"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_zoo_und_park"
                          title="Zoo und Park"
                        >
                          Zoo und Park
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/index.html#militaer"
                          className="frn_nestedMenu"
                          id="channelNav_militär"
                          title="Militär"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_militär"
                          title="Militär"
                        >
                          Militär
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/index.html#lustigundspannend"
                          className="frn_nestedMenu"
                          id="channelNav_lustig_und_spannend"
                          title="Lustig und spannend"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_lustig_und_spannend"
                          title="Lustig und spannend"
                        >
                          Lustig und spannend
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/index.html#piratenundsoldaten"
                          className="frn_nestedMenu"
                          id="channelNav_piraten_und_soldaten"
                          title="Piraten und Soldaten"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_piraten_und_soldaten"
                          title="Piraten und Soldaten"
                        >
                          Piraten und Soldaten
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/index.html#bauernhof"
                          className="frn_nestedMenu"
                          id="channelNav_bauernhof"
                          title="Bauernhof"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_bauernhof"
                          title="Bauernhof"
                        >
                          Bauernhof
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/index.html#magie"
                          className="frn_nestedMenu"
                          id="channelNav_magie"
                          title="Magie"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_magie"
                          title="Magie"
                        >
                          Magie
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--online-spiele">
                {/* <a
                  href="spielen/online-spiele/index.html"
                  className="frn_channelName online-spiele"
                  target="_self"
                  id="channelNav_online-spiele"
                  title="Online-Spiele"
                > */}
                <a
                  href="#"
                  className="frn_channelName online-spiele"
                  target="_self"
                  id="channelNav_online-spiele"
                  title="Online-Spiele"
                >
                  Online-Spiele
                  <img
                    className="plus"
                    src="assets/icons/icon-menu-plus.svg"
                    alt="menu"
                    title="menu"
                  />
                  <img
                    className="minus"
                    src="assets/icons/icon-menu-minus.svg"
                    alt="menu"
                    title="menu"
                  />
                </a>
                <ul className="menu nested frnbottombar frn_Nested frn_Nested--online-spiele">
                  <div className="grid-x grid-padding-x grid-padding-y">
                    <div className="cell large-3 frn_channelSubmenu">
                      <li>
                        {/* <a
                          href="spielen/online-spiele/solitaer/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_solitär"
                          title="Solitär"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_solitär"
                          title="Solitär"
                        >
                          Solitär
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/exchange/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_exchange"
                          title="Exchange"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_exchange"
                          title="Exchange"
                        >
                          Exchange
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/exchange-classNameic/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_exchange_classNameic"
                          title="Exchange ClassNclassNameic"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_exchange_classNameic"
                          title="Exchange ClassNclassNameic"
                        >
                          Exchange ClassNclassNameic
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/mahjong/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_mahjong"
                          title="Mahjong"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_mahjong"
                          title="Mahjong"
                        >
                          Mahjong
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/sudoku/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_sudoku"
                          title="Sudoku"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_sudoku"
                          title="Sudoku"
                        >
                          Sudoku
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/sudoken/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_sudoken"
                          title="Sudoken"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_sudoken"
                          title="Sudoken"
                        >
                          Sudoken
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/street/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_sudoku_street"
                          title="Sudoku Street"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_sudoku_street"
                          title="Sudoku Street"
                        >
                          Sudoku Street
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/cuboro-riddles/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_cuboro_riddles"
                          title="Cuboro Riddles"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_cuboro_riddles"
                          title="Cuboro Riddles"
                        >
                          Cuboro Riddles
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/snowball/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_snowball"
                          title="Snowball"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_snowball"
                          title="Snowball"
                        >
                          Snowball
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/gumblast-shooter/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_gumblast_shooter"
                          title="Gumblast Shooter"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_gumblast_shooter"
                          title="Gumblast Shooter"
                        >
                          Gumblast Shooter
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/bubbles/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_bubbles"
                          title="Bubbles"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_bubbles"
                          title="Bubbles"
                        >
                          Bubbles
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/schach/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_schach"
                          title="Schach"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_schach"
                          title="Schach"
                        >
                          Schach
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/fibonacci/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_fibonacci"
                          title="Fibonacci"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_fibonacci"
                          title="Fibonacci"
                        >
                          Fibonacci
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/2048---power-of-2/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_2048_-_power_of_2"
                          title="2048 - Power of 2"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_2048_-_power_of_2"
                          title="2048 - Power of 2"
                        >
                          2048 - Power of 2
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/doppel/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_doppel"
                          title="Doppel"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_doppel"
                          title="Doppel"
                        >
                          Doppel
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/rushtower/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_rushtower"
                          title="Rushtower"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_rushtower"
                          title="Rushtower"
                        >
                          Rushtower
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/wortblitz/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_wortblitz"
                          title="Wortblitz"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_wortblitz"
                          title="Wortblitz"
                        >
                          Wortblitz
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/wimmelbild/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_wimmelbild"
                          title="Wimmelbild"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_wimmelbild"
                          title="Wimmelbild"
                        >
                          Wimmelbild
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href="spielen/online-spiele/ski-racer/index.html"
                          className="frn_nestedMenu"
                          id="channelNav_ski_racer"
                          title="Ski Racer"
                        > */}
                        <a
                          href="#"
                          className="frn_nestedMenu"
                          id="channelNav_ski_racer"
                          title="Ski Racer"
                        >
                          Ski Racer
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="frn_channel frn_channel--mail">
                <a
                  href="https://email.freenet.de/index.html?epid=e9900001342"
                  className="frn_channelName mail"
                  id="mail"
                  title="Mail"
                >
                  Mail
                </a>
              </li>
              <li className="frn_channel frn_channel--domain">
                <a
                  href="https://email.freenet.de/domain/index.html?utm_medium=Flyout_Button&amp;utm_source=Webhosting&amp;utm_campaign=Flyout_Button_2021&amp;epid=e9900001490"
                  className="frn_channelName domain"
                  id="domain"
                  title="Domain"
                >
                  Domain
                </a>
              </li>
              <li className="frn_channel frn_channel--partnersuche">
                <a
                  href="https://partnersuche.fn.de/?AID=freenet_flyout"
                  className="frn_channelName partnersuche"
                  id="partnersuche"
                  title="Partnersuche"
                >
                  ♥
                </a>
              </li>
              <li className="frn_channel frn_channel--kundenservice">
                <a
                  href="https://kundenservice.freenet.de/"
                  className="frn_channelName kundenservice"
                  id="kundenservice"
                  title="Kundenservice"
                >
                  Kundenservice
                </a>
              </li>
            </ul>

            <div className="has-edit-button"></div>
            <div className="frnKopfWetter_head show-for-large">
              <div className="frnWetterContent">
                {/* <a href="nachrichten/wetter/index.html" aria-label="Wetter"> */}
                <a href="#" aria-label="Wetter">
                  <span className="frn_wetterBoxWsName"></span>
                  <span className="frn_wetterZahl"></span>
                  <div className="frn_weather_icon_header_outer frn_weather_icon_grey"></div>
                </a>
              </div>
            </div>

            <div
              className="_top-bar-right frnbottombarRight show-for-large"
              style={{ position: "absolute", right: "14px" }}
            >
              <form
                name="f"
                method="get"
                action="https://www.freenet.de/suche"
                id="frn_searchTarget"
                target="_top"
              >
                <div
                  id="frnSearchHeadNorm"
                  style={{ display: "inline-block", width: "267px" }}
                >
                  <input
                    name="q"
                    type="text"
                    id="suchfeld"
                    autoComplete="off"
                    placeholder=" "
                    className="frntopbar__menu--googleSuche"
                    aria-label="Suche"
                  />
                </div>
                <button
                  // onClick="parentNode.submit()"
                  style={{
                    cursor: "pointer",
                    padding: "0rem",
                    width: "39px",
                    height: "39px",
                    background: "#ffffff",
                    position: "absolute",
                    marginLeft: "-1px",
                    display: "inline-block",
                    right: 0,
                  }}
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src="assets/icons/icon-googlesearch.svg"
                    className="frntopbar__menu--googleSucheButton"
                    alt="jetzt suchen!"
                    title="jetzt suchen!"
                    style={{
                      width: "16px",
                      height: "16px",
                      margin: 0,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      // -ms-transform: translate(-50%, -50%),
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </button>
              </form>

              <div className="frn_product frn_channelKunden show-for-large">
                <a href="https://kundenservice.freenet.de/" target="_blank">
                  <img
                    fetchPriority="high"
                    decoding="sync"
                    width="17"
                    height="18"
                    src="assets/icons/icon-hilfe.svg"
                    className="frntopbar__menu--googleSucheButton"
                    alt="freenet-suchen"
                    title="freenet-suchen"
                  />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div id="frnAdSky" className="show-for-medium">
          <div id="frnAdSkyPos">
            <div id="fnsky">
              <div id="div-gpt-ad-sky"></div>
              {/* <script>
                Frn.on("loadAdTagsStationary", function () {
                  wWidth = window.innerWidth;
                  screenWidthAndSizes = [
                    { w: 1550, s: [300, 600] },
                    { w: 1490, s: [200, 600] },
                    { w: 1260, s: [160, 600] },
                  ];
                  removeSizes = new Array();
                  for (let i in screenWidthAndSizes) {
                    if (
                      Math.abs(wWidth - 1 - screenWidthAndSizes[i].w) !=
                      wWidth - 1 - screenWidthAndSizes[i].w
                    ) {
                      removeSizes.push(screenWidthAndSizes[i].s);
                      console.log(
                        "skyRemoveSizes([" + screenWidthAndSizes[i].s + "])"
                      );
                    }
                  }
                  if (removeSizes.length > 0) {
                    SDG.Publisher.registerSlot("sky", "div-gpt-ad-sky")
                      .removeSizes(removeSizes)
                      .load();
                  } else {
                    SDG.Publisher.registerSlot("sky", "div-gpt-ad-sky").load();
                  }
                });
              </script> */}
            </div>
          </div>
        </div>
      </header>

      <div className="observerElement"></div>

      <div id="frnMain">
        <div>
          <div>
            <div
              id="frn-cont033791560"
              className="grid-container frn-container first frn-container--aufmacher-home"
            >
              <div
                className="callout"
                style={{ padding: "0rem", border: "none" }}
                data-closable
              >
                <div
                  id="frnNewArticles"
                  className="frn_cont frn_col5 frn_typ frn_cont_noborder frnNewArticles"
                >
                  <div className="frn_contHead">
                    <strong>Die neuesten Artikel auf freenet.de</strong>
                    <button className="close-button frn_na_button" data-close>
                      &times;
                    </button>
                  </div>
                  <div className="clearBoth"></div>
                  <div className="frn_contInlett">
                    <div className="frn_onlyList date">
                      <ul id="newArticlesUpdate"></ul>
                    </div>
                    <div className="clearBoth"></div>
                  </div>
                </div>
              </div>

              <div className="grid-x grid-padding-y grid-padding-x has-edit-button">
                <div
                  className="cell medium-5 large-3 medium-order-2 large-order-3"
                  id="frnEmailPre"
                ></div>
                <div
                  className="cell medium-5 large-3 medium-order-2 large-order-3 hide"
                  data-dropdown
                  data-close-on-click="true"
                  id="frnEmailPopup"
                >
                  <div className="grid-x grid-padding-y grid-padding-x">
                    <div className="cell">
                      <div id="login">
                        <login world="2"></login>
                      </div>
                    </div>
                    <div className="cell show-for-large">
                      <div
                        className="frn_adbox show-for-large"
                        id="ad-coop_button_1"
                      >
                        <div id="div-gpt-ad-coop_button_1"></div>
                        {/* <script>
                        Frn.on("loadAdTagsStationary", function () {
                          SDG.Publisher.registerSlot(
                            "coop_button_1",
                            "div-gpt-ad-coop_button_1"
                          ).load();
                        });
                      </script> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="cell medium-7 large-6 medium-order-1 large-order-1 background"
                  data-tb-region="aufmacher"
                >
                  <section
                    className="carousel"
                    data-slick='{"dots": true,"autoplay": true,"autoplaySpeed": 8000}'
                  >
                    <article
                      className="grid-x teaser-padding background has-edit-button"
                      data-label="Politik"
                      data-tb-region-item
                    >
                      <figure className="cell">
                        {/* <a
                          href="nachrichten/politik/gruenen-fraktionschefin-droege-koalition-mit-cdu-denkbar-40481644.html"
                          title="Grünen-Fraktionschefin Dröge: Koalition mit CDU denkbar"
                        > */}
                        <a
                          href="#"
                          title="Grünen-Fraktionschefin Dröge: Koalition mit CDU denkbar"
                        >
                          <picture className="lg">
                            <source
                              media="(min-width: 82.5em)"
                              srcSet="assets/img/gruenen-fraktionschefin-katharina-droege-denkt-schon-ue.jpeg
                            "
                            />
                            <source
                              media="(min-width: 48em)"
                              srcSet="assets/img/gruenen-fraktionschefin-katharina-droege-denkt-schon-ue.jpeg"
                            />
                            <source srcSet="assets/img/gruenen-fraktionschefin-katharina-droege-denkt-schon-ue.jpeg" />
                            <img
                              width="370"
                              height="247"
                              fetchPriority="high"
                              decoding="sync"
                              src="assets/img/gruenen-fraktionschefin-katharina-droege-denkt-schon-ue.jpeg"
                              alt="Grünen-Fraktionschefin Dröge: Koalition mit CDU denkbar"
                              title="Grünen-Fraktionschefin Dröge: Koalition mit CDU denkbar"
                            />
                          </picture>
                        </a>
                      </figure>
                      <section className="cell">
                        <header>
                          <div className="teaser-title h3">
                            {/* <a
                              href="nachrichten/politik/gruenen-fraktionschefin-droege-koalition-mit-cdu-denkbar-40481644.html"
                              title="Grünen-Fraktionschefin Dröge: Koalition mit CDU denkbar"
                            > */}
                            <a
                              href="#"
                              title="Grünen-Fraktionschefin Dröge: Koalition mit CDU denkbar"
                            >
                              Grünen-Fraktionschefin Dröge: Koalition mit CDU
                              denkbar
                            </a>
                          </div>
                        </header>
                        <p className="large-margin-bottom-0">
                          {/* <a
                            href="nachrichten/politik/gruenen-fraktionschefin-droege-koalition-mit-cdu-denkbar-40481644.html"
                            title="Grünen-Fraktionschefin Dröge: Koalition mit CDU denkbar"
                            className="teaser-subtitle"
                          > */}
                          <a
                            href="#"
                            title="Grünen-Fraktionschefin Dröge: Koalition mit CDU denkbar"
                            className="teaser-subtitle"
                          >
                            Die Ampel liegt im Dauerclinch.
                            Grünen-Fraktionschefin Dröge schaut daher schon auf
                            Optionen für ihre Partei nach der Bundestagswahl -
                            und auf die Union. Vizekanzler Habeck hält ...
                          </a>
                        </p>
                      </section>
                    </article>

                    <article
                      className="grid-x teaser-padding background has-edit-button"
                      data-label="Tragisch"
                      data-tb-region-item
                    >
                      <figure className="cell icon-pictureshow">
                        {/* <a
                          href="unterhaltung/medien/pictureshow/diese-todesfaelle-erschuetterten-hollywood-40481620.html"
                          title="Diese Todesfälle erschütterten Hollywood"
                        > */}
                        <a
                          href="#"
                          title="Diese Todesfälle erschütterten Hollywood"
                        >
                          <picture className="lg">
                            <source
                              media="(min-width: 82.5em)"
                              srcSet="assets/img/diese-todesfaelle-erschuettert-66b09015b1ab6c786253bc46-66b0915fb1ab6c786253bc76-1600.jpg"
                            />
                            <source
                              media="(min-width: 48em)"
                              srcSet="assets/img/diese-todesfaelle-erschuettert-66b09015b1ab6c786253bc46-66b0915fb1ab6c786253bc76-1600.jpg"
                            />
                            <source srcSet="assets/img/diese-todesfaelle-erschuettert-66b09015b1ab6c786253bc46-66b0915fb1ab6c786253bc76-1600.jpg" />
                            <img
                              width="370"
                              height="247"
                              loading="lazy"
                              decoding="async"
                              src="assets/img/diese-todesfaelle-erschuettert-66b09015b1ab6c786253bc46-66b0915fb1ab6c786253bc76-1600.jpg"
                              alt="Diese Todesfälle erschütterten Hollywood"
                              title="Diese Todesfälle erschütterten Hollywood"
                            />
                          </picture>
                        </a>
                      </figure>
                      <section className="cell">
                        <header>
                          <div className="teaser-title h3">
                            {/* <a
                              href="unterhaltung/medien/pictureshow/diese-todesfaelle-erschuetterten-hollywood-40481620.html"
                              title="Diese Todesfälle erschütterten Hollywood"
                            > */}
                            <a
                              href="#"
                              title="Diese Todesfälle erschütterten Hollywood"
                            >
                              Diese Todesfälle erschütterten Hollywood
                            </a>
                          </div>
                        </header>
                        <p className="large-margin-bottom-0">
                          {/* <a
                            href="unterhaltung/medien/pictureshow/diese-todesfaelle-erschuetterten-hollywood-40481620.html"
                            title="Diese Todesfälle erschütterten Hollywood"
                            className="teaser-subtitle"
                          > */}
                          <a
                            href="#"
                            title="Diese Todesfälle erschütterten Hollywood"
                            className="teaser-subtitle"
                          >
                            Ihr Tod kam plötzlich, zu früh oder war einfach nur
                            grauenvoll: Die Galerie erinnert an Hollywood-Stars,
                            deren Tod nicht nur die Filmbranche erschütterte.
                          </a>
                        </p>
                      </section>
                    </article>

                    <article
                      className="grid-x teaser-padding background has-edit-button"
                      data-label="Sportlerinnen"
                      data-tb-region-item
                    >
                      <figure className="cell">
                        {/* <a
                          href="sport/topnews/die-schonsten-sportlerinnen-des-monats-40461602.html"
                          title="Die schönsten Sportlerinnen des Monats"
                        > */}
                        <a
                          href="#"
                          title="Die schönsten Sportlerinnen des Monats"
                        >
                          <picture className="lg">
                            <source
                              media="(min-width: 82.5em)"
                              srcSet="assets/img/sportlerinnen2408.jpg"
                            />
                            <source
                              media="(min-width: 48em)"
                              srcSet="assets/img/sportlerinnen2408.jpg"
                            />
                            <source srcSet="assets/img/sportlerinnen2408.jpg" />
                            <img
                              width="370"
                              height="247"
                              loading="lazy"
                              decoding="async"
                              src="assets/img/sportlerinnen2408.jpg"
                              alt="Die schönsten Sportlerinnen des Monats"
                              title="Die schönsten Sportlerinnen des Monats"
                            />
                          </picture>
                        </a>
                      </figure>
                      <section className="cell">
                        <header>
                          <div className="teaser-title h3">
                            {/* <a
                              href="sport/topnews/die-schonsten-sportlerinnen-des-monats-40461602.html"
                              title="Die schönsten Sportlerinnen des Monats"
                            > */}
                            <a
                              href="#"
                              title="Die schönsten Sportlerinnen des Monats"
                            >
                              Die schönsten Sportlerinnen des Monats
                            </a>
                          </div>
                        </header>
                        <p className="large-margin-bottom-0">
                          {/* <a
                            href="sport/topnews/die-schonsten-sportlerinnen-des-monats-40461602.html"
                            title="Die schönsten Sportlerinnen des Monats"
                            className="teaser-subtitle"
                          > */}
                          <a
                            href="#"
                            title="Die schönsten Sportlerinnen des Monats"
                            className="teaser-subtitle"
                          >
                            Diese Damen glänzen nicht nur mit sportlichem
                            Talent, sondern auch in den sozialen Medien. Den
                            Fans gefällt das.
                          </a>
                        </p>
                      </section>
                    </article>

                    <article
                      className="grid-x teaser-padding background has-edit-button"
                      data-label="Gehälter"
                      data-tb-region-item
                    >
                      <figure className="cell icon-pictureshow">
                        {/* <a
                          href="auto/neuheiten/pictureshow/vorstaende-ingenieure-schlosser-und-praktikanten-so-viel-verdient-man-bei-mercedes-oder-auch-nicht-40481044.html"
                          title="So viel verdient man bei Mercedes"
                        > */}
                        <a href="#" title="So viel verdient man bei Mercedes">
                          <picture className="lg">
                            <source
                              media="(min-width: 82.5em)"
                              srcSet="assets/img/mercedes.jpg"
                            />
                            <source
                              media="(min-width: 48em)"
                              srcSet="assets/img/medium/mercedes.jpg"
                            />
                            <source srcSet="assets/img/medium/mercedes.jpg" />
                            <img
                              width="370"
                              height="247"
                              loading="lazy"
                              decoding="async"
                              src="assets/img/medium/mercedes.jpg"
                              alt="So viel verdient man bei Mercedes"
                              title="So viel verdient man bei Mercedes"
                            />
                          </picture>
                        </a>
                      </figure>
                      <section className="cell">
                        <header>
                          <div className="teaser-title h3">
                            {/* <a
                              href="auto/neuheiten/pictureshow/vorstaende-ingenieure-schlosser-und-praktikanten-so-viel-verdient-man-bei-mercedes-oder-auch-nicht-40481044.html"
                              title="So viel verdient man bei Mercedes"
                            > */}
                            <a
                              href="#"
                              title="So viel verdient man bei Mercedes"
                            >
                              So viel verdient man bei Mercedes
                            </a>
                          </div>
                        </header>
                        <p className="large-margin-bottom-0">
                          {/* <a
                            href="auto/neuheiten/pictureshow/vorstaende-ingenieure-schlosser-und-praktikanten-so-viel-verdient-man-bei-mercedes-oder-auch-nicht-40481044.html"
                            title="So viel verdient man bei Mercedes"
                            className="teaser-subtitle"
                          > */}
                          <a
                            href="#"
                            title="So viel verdient man bei Mercedes"
                            className="teaser-subtitle"
                          >
                            Mercedes zählt zu einem der beliebtesten Arbeitgeber
                            in Deutschland, aber was kann man beim Autobauer
                            überhaupt verdienen? Wir zeigen ausgewählte
                            Gehälter.
                          </a>
                        </p>
                      </section>
                    </article>

                    <article
                      className="grid-x teaser-padding background has-edit-button"
                      data-label="Liebesleben"
                      data-tb-region-item
                    >
                      <figure className="cell">
                        {/* <a
                          href="lifestyle/ratgeber/silver-sex-so-gelingt-ein-erfuelltes-intimleben-im-alter-40480804.html"
                          title="Silver Sex: So gelingt ein erfülltes Intimleben im Alter"
                        > */}
                        <a
                          href="#"
                          title="Silver Sex: So gelingt ein erfülltes Intimleben im Alter"
                        >
                          <picture className="lg">
                            <source
                              media="(min-width: 82.5em)"
                              srcSet="assets/img/medium/silver-sex-so-gelingt-ein-erf-img0-gqjpzm8frc8qaetguafwg6f3zqpoowjnajohcvu-image-0.jpg"
                            />
                            <source
                              media="(min-width: 48em)"
                              srcSet="assets/img/medium/silver-sex-so-gelingt-ein-erf-img0-gqjpzm8frc8qaetguafwg6f3zqpoowjnajohcvu-image-0.jpg"
                            />
                            <source srcSet="assets/img/medium/silver-sex-so-gelingt-ein-erf-img0-gqjpzm8frc8qaetguafwg6f3zqpoowjnajohcvu-image-0.jpg" />
                            <img
                              width="370"
                              height="247"
                              loading="lazy"
                              decoding="async"
                              src="assets/img/medium/silver-sex-so-gelingt-ein-erf-img0-gqjpzm8frc8qaetguafwg6f3zqpoowjnajohcvu-image-0.jpg"
                              alt="Silver Sex: So gelingt ein erfülltes Intimleben im Alter"
                              title="Silver Sex: So gelingt ein erfülltes Intimleben im Alter"
                            />
                          </picture>
                        </a>
                      </figure>
                      <section className="cell">
                        <header>
                          <div className="teaser-title h3">
                            {/* <a
                              href="lifestyle/ratgeber/silver-sex-so-gelingt-ein-erfuelltes-intimleben-im-alter-40480804.html"
                              title="Silver Sex: So gelingt ein erfülltes Intimleben im Alter"
                            > */}
                            <a
                              href="#"
                              title="Silver Sex: So gelingt ein erfülltes Intimleben im Alter"
                            >
                              Silver Sex: So gelingt ein erfülltes Intimleben im
                              Alter
                            </a>
                          </div>
                        </header>
                        <p className="large-margin-bottom-0">
                          {/* <a
                            href="lifestyle/ratgeber/silver-sex-so-gelingt-ein-erfuelltes-intimleben-im-alter-40480804.html"
                            title="Silver Sex: So gelingt ein erfülltes Intimleben im Alter"
                            className="teaser-subtitle"
                          > */}
                          <a
                            href="#"
                            title="Silver Sex: So gelingt ein erfülltes Intimleben im Alter"
                            className="teaser-subtitle"
                          >
                            Weniger Kraft, schnellere Müdigkeit,
                            Erektionsprobleme: In der zweiten Lebenshälfte kann
                            Sex zur Herausforderung werden. Die besten Tipps und
                            wann man zum Arzt gehen sollte.
                          </a>
                        </p>
                      </section>
                    </article>

                    <article
                      className="grid-x teaser-padding background has-edit-button"
                      data-label="Traumhaft"
                      data-tb-region-item
                    >
                      <figure className="cell icon-pictureshow">
                        {/* <a
                          href="lifestyle/medien/pictureshow/unberuehrte-natur-das-sind-die-schoensten-nationalparks-in-europa-40481612.html"
                          title="Das sind die schönsten Nationalparks in Europa"
                        > */}
                        <a
                          href="#"
                          title="Das sind die schönsten Nationalparks in Europa"
                        >
                          <picture className="lg">
                            <source
                              media="(min-width: 82.5em)"
                              srcSet="assets/img/krka.jpg"
                            />
                            <source
                              media="(min-width: 48em)"
                              srcSet="assets/img/medium/krka.jpg"
                            />
                            <source srcSet="assets/img/medium/krka.jpg" />
                            <img
                              width="370"
                              height="247"
                              loading="lazy"
                              decoding="async"
                              src="assets/img/medium/krka.jpg"
                              alt="Das sind die schönsten Nationalparks in Europa"
                              title="Das sind die schönsten Nationalparks in Europa"
                            />
                          </picture>
                        </a>
                      </figure>
                      <section className="cell">
                        <header>
                          <div className="teaser-title h3">
                            {/* <a
                              href="lifestyle/medien/pictureshow/unberuehrte-natur-das-sind-die-schoensten-nationalparks-in-europa-40481612.html"
                              title="Das sind die schönsten Nationalparks in Europa"
                            > */}
                            <a
                              href="#"
                              title="Das sind die schönsten Nationalparks in Europa"
                            >
                              Das sind die schönsten Nationalparks in Europa
                            </a>
                          </div>
                        </header>
                        <p className="large-margin-bottom-0">
                          {/* <a
                            href="lifestyle/medien/pictureshow/unberuehrte-natur-das-sind-die-schoensten-nationalparks-in-europa-40481612.html"
                            title="Das sind die schönsten Nationalparks in Europa"
                            className="teaser-subtitle"
                          > */}
                          <a
                            href="#"
                            title="Das sind die schönsten Nationalparks in Europa"
                            className="teaser-subtitle"
                          >
                            Nationalparks sind geschützte Naturräume der
                            Erhaltung und Erholung. Wo es am schönsten ist,
                            zeigen wir hier.
                          </a>
                        </p>
                      </section>
                    </article>

                    <article
                      className="grid-x teaser-padding background has-edit-button"
                      data-label="Vergleich"
                      data-tb-region-item
                    >
                      <figure className="cell">
                        {/* <a
                          href="digitalewelt/computermobile/vergleich-welche-router-sich-fuers-streaming-am-besten-eignen-40460234.html"
                          title="Diese Router eignen sich fürs Streaming"
                        > */}
                        <a
                          href="#"
                          title="Diese Router eignen sich fürs Streaming"
                        >
                          <picture className="lg">
                            <source
                              media="(min-width: 82.5em)"
                              srcSet="assets/img/medium/2235709575956110627-2235709465297460186.jpg"
                            />
                            <source
                              media="(min-width: 48em)"
                              srcSet="assets/img/medium/2235709575956110627-2235709465297460186.jpg"
                            />
                            <source srcSet="assets/img/medium/2235709575956110627-2235709465297460186.jpg" />
                            <img
                              width="370"
                              height="247"
                              loading="lazy"
                              decoding="async"
                              src="assets/img/medium/2235709575956110627-2235709465297460186.jpg"
                              alt="Diese Router eignen sich fürs Streaming"
                              title="Diese Router eignen sich fürs Streaming"
                            />
                          </picture>
                        </a>
                      </figure>
                      <section className="cell">
                        <header>
                          <div className="teaser-title h3">
                            {/* <a
                              href="digitalewelt/computermobile/vergleich-welche-router-sich-fuers-streaming-am-besten-eignen-40460234.html"
                              title="Diese Router eignen sich fürs Streaming"
                            > */}
                            <a
                              href="#"
                              title="Diese Router eignen sich fürs Streaming"
                            >
                              Diese Router eignen sich fürs Streaming
                            </a>
                          </div>
                        </header>
                        <p className="large-margin-bottom-0">
                          {/* <a
                            href="digitalewelt/computermobile/vergleich-welche-router-sich-fuers-streaming-am-besten-eignen-40460234.html"
                            title="Diese Router eignen sich fürs Streaming"
                            className="teaser-subtitle"
                          > */}
                          <a
                            href="#"
                            title="Diese Router eignen sich fürs Streaming"
                            className="teaser-subtitle"
                          >
                            Wer einen vergnüglichen Streaming-Abend mit Amazon
                            Prime Video oder Netflix verbringen will, braucht
                            eine stabile Übertragung per WLAN-Router.
                          </a>
                        </p>
                      </section>
                    </article>
                  </section>
                  {/* <script>
                  Frn.on("MainLibLoaded", function () {
                    Frn.fireEvent("carouselLoaded");
                  });
                </script> */}
                  <script src="assets/js/object-assign-auto.min.js"></script>
                  <script src="assets/js/vue.min.js"></script>
                  <link rel="stylesheet" href="assets/css/frnLogin.css" />
                  <script src="assets/js/frnLogin.umd.min.js"></script>
                  {/*   
                <script>
                  var loginMount = "login";
                  var emailPre = document.querySelector("#frnEmailPre");
                  if (emailPre !== null) {
                    emailPre.classNameList.add("hide");
                    document
                      .querySelector("#frnEmailPopup")
                      .classNameList.remove("hide");
                  }
                  setTimeout(function () {
                    new Vue({
                      components: {
                        login: frnLogin,
                      },
                    }).$mount("#" + loginMount);
                  }, 400);
                </script> 
                */}
                </div>
                <div
                  className="cell medium-12 large-3 medium-order-6 large-order-2"
                  data-tb-region="news"
                >
                  <div className="grid-x grid-padding-y grid-padding-x">
                    <div className="cell small-12 medium-6 large-12">
                      <ul className="teaser_list">
                        <li className="has-edit-button" data-tb-region-item>
                          {/* <a
                            href="nachrichten/politik/ukraine-liveticker-40440456.html"
                            title="Liveticker: Die neuesten Meldungen zum Krieg in der Ukraine"
                          > */}
                          <a
                            href="#"
                            title="Liveticker: Die neuesten Meldungen zum Krieg in der Ukraine"
                          >
                            Liveticker: Die neuesten Meldungen zum Krieg in der
                            Ukraine
                          </a>
                        </li>

                        <li className="has-edit-button" data-tb-region-item>
                          {/* <a
                            href="nachrichten/panorama/mallorca-deutsche-wegen-angriff-auf-taxifahrer-festgenommen-40481642.html"
                            title="Mallorca: Deutsche wegen Angriff auf Taxifahrer festgenommen"
                          > */}
                          <a
                            href="#"
                            title="Mallorca: Deutsche wegen Angriff auf Taxifahrer festgenommen"
                          >
                            Mallorca: Deutsche wegen Angriff auf Taxifahrer
                            festgenommen
                          </a>
                        </li>

                        <li className="has-edit-button" data-tb-region-item>
                          {/* <a
                            href="nachrichten/politik/rueckzug-aus-us-wahlkampf-kennedy-kuendigt-rede-an-40481642.html"
                            title="Rückzug aus US-Wahlkampf? Kennedy kündigt Rede an"
                          > */}
                          <a
                            href="#"
                            title="Rückzug aus US-Wahlkampf? Kennedy kündigt Rede an"
                          >
                            Rückzug aus US-Wahlkampf? Kennedy kündigt Rede an
                          </a>
                        </li>

                        <li className="has-edit-button" data-tb-region-item>
                          {/* <a
                            href="nachrichten/panorama/gesunkene-jacht-vor-sizilien-taucher-dringen-ins-innere-vor-40481642.html"
                            title="Fünf Leichen in gesunkener Jacht entdeckt"
                          > */}
                          <a
                            href="#"
                            title="Fünf Leichen in gesunkener Jacht entdeckt"
                          >
                            Fünf Leichen in gesunkener Jacht entdeckt
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="cell small-12 medium-6 large-12">
                      <article
                        className="grid-x teaser-padding has-edit-button"
                        data-tb-region-item
                      >
                        <figure className="cell small-6 medium-12">
                          {/* <a
                            className="frn_articleLink"
                            href="nachrichten/wahlomat/thueringen/index.html"
                            title="Wahl in Thüringen: Jetzt Wahl-O-Mat spielen"
                            target="_self"
                          > */}
                          <a
                            className="frn_articleLink"
                            href="#"
                            title="Wahl in Thüringen: Jetzt Wahl-O-Mat spielen"
                            target="_self"
                          >
                            <picture className="sm">
                              <source
                                media="(min-width: 82.5em)"
                                srcSet="assets/img/medium/wahlomat-thueringen-wind.jpg"
                              />
                              <source
                                media="(min-width: 48em)"
                                srcSet="assets/img/medium/wahlomat-thueringen-wind.jpg"
                              />
                              <source srcSet="assets/img/medium/wahlomat-thueringen-wind.jpg" />
                              <img
                                width="180"
                                height="120"
                                fetchPriority="high"
                                decoding="sync"
                                src="assets/img/medium/wahlomat-thueringen-wind.jpg"
                                alt="Wahl in Thüringen: Jetzt Wahl-O-Mat spielen"
                                title="Wahl in Thüringen: Jetzt Wahl-O-Mat spielen"
                              />
                            </picture>
                          </a>
                        </figure>
                        <section className="cell small-6 medium-12 large-padding-bottom-0">
                          <header>
                            <span className="teaser-subject h6">
                              Landtagswahl
                            </span>
                            <div className="teaser-title h5">
                              {/* <a
                                className="frn_articleLink"
                                href="nachrichten/wahlomat/thueringen/index.html"
                                title="Wahl in Thüringen: Jetzt Wahl-O-Mat spielen"
                                target="_self"
                              > */}
                              <a
                                className="frn_articleLink"
                                href="#"
                                title="Wahl in Thüringen: Jetzt Wahl-O-Mat spielen"
                                target="_self"
                              >
                                Wahl in Thüringen: Jetzt Wahl-O-Mat spielen
                              </a>
                            </div>
                          </header>
                        </section>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="cell medium-6 large-3 medium-order-5 ad-mobile">
                  <div id="ad-topmobile2" className="hide-for-medium frn_adbox">
                    <div id="div-gpt-ad-topmobile2"></div>
                    {/* <script>
                    Frn.on("loadAdTagsStationary", function () {
                      SDG.Publisher.registerSlot(
                        "topmobile2",
                        "div-gpt-ad-topmobile2"
                      ).load();
                    });
                  </script> */}
                  </div>
                  <div
                    className="frn_adbox hide-for-small-only"
                    id="ad-rectangle"
                  >
                    <div id="div-gpt-ad-rectangle"></div>
                    {/* <script>
                    Frn.on("loadAdTagsStationary", function () {
                      SDG.Publisher.registerSlot(
                        "rectangle",
                        document.getElementById("div-gpt-ad-rectangle")
                      ).load();
                    });
                  </script> */}
                  </div>
                </div>
                <div className="cell medium-order-5 large-order-3 medium-border-bottom"></div>

                <div
                  className="cell medium-6 large-3 medium-order-3 large-text-border-x"
                  data-tb-region="schonges"
                >
                  <article
                    className="grid-x teaser-padding has-edit-button"
                    data-tb-region-item
                  >
                    <figure className="cell small-6 medium-12 icon-pictureshow">
                      {/* <a
                        className="frn_articleLink"
                        href="unterhaltung/medien/pictureshow/der-naechste-james-bond-das-sind-die-heissesten-kandidaten-40481636.html"
                        title="Nächster James Bond: Entscheidung längst gefallen?"
                        target="_self"
                      > */}
                      <a
                        className="frn_articleLink"
                        href="#"
                        title="Nächster James Bond: Entscheidung längst gefallen?"
                        target="_self"
                      >
                        <picture className="sm">
                          <source
                            media="(min-width: 82.5em)"
                            srcSet="assets/img/medium/der-naechste-james-bond-das-si-66b1fb7eb1ab6c786253ca24-660fb1456e949e6dac367c5a-1600.jpg"
                          />
                          <source
                            media="(min-width: 48em)"
                            srcSet="assets/img/medium/der-naechste-james-bond-das-si-66b1fb7eb1ab6c786253ca24-660fb1456e949e6dac367c5a-1600.jpg"
                          />
                          <source srcSet="assets/img/medium/der-naechste-james-bond-das-si-66b1fb7eb1ab6c786253ca24-660fb1456e949e6dac367c5a-1600.jpg" />
                          <img
                            width="180"
                            height="120"
                            fetchPriority="high"
                            decoding="sync"
                            src="assets/img/medium/der-naechste-james-bond-das-si-66b1fb7eb1ab6c786253ca24-660fb1456e949e6dac367c5a-1600.jpg"
                            alt="Nächster James Bond: Entscheidung längst gefallen?"
                            title="Nächster James Bond: Entscheidung längst gefallen?"
                          />
                        </picture>
                      </a>
                    </figure>
                    <section className="cell small-6 medium-12 large-text-border-x">
                      <header>
                        <span className="teaser-subject h6">
                          Top Kandidaten
                        </span>
                        <div className="teaser-title h5">
                          {/* <a
                            className="frn_articleLink"
                            href="unterhaltung/medien/pictureshow/der-naechste-james-bond-das-sind-die-heissesten-kandidaten-40481636.html"
                            title="Nächster James Bond: Entscheidung längst gefallen?"
                            target="_self"
                          > */}
                          <a
                            className="frn_articleLink"
                            href="#"
                            title="Nächster James Bond: Entscheidung längst gefallen?"
                            target="_self"
                          >
                            Nächster James Bond: Entscheidung längst gefallen?
                          </a>
                        </div>
                      </header>
                    </section>
                  </article>
                </div>
                <div
                  className="cell medium-6 large-3 medium-order-3 large-text-border-x"
                  data-tb-region="schonges2"
                >
                  <article
                    className="grid-x teaser-padding has-edit-button"
                    data-tb-region-item
                  >
                    <figure className="cell small-6 medium-12">
                      {/* <a
                        className="frn_articleLink"
                        href="unterhaltung/promis/bares-fur-rares--alle-news-zur-show-40420404.html"
                        title="Als sie den Expertenpreis hört, bricht Verkäuferin in Jubel aus"
                        target="_self"
                      > */}
                      <a
                        className="frn_articleLink"
                        href="#"
                        title="Als sie den Expertenpreis hört, bricht Verkäuferin in Jubel aus"
                        target="_self"
                      >
                        <picture className="sm">
                          <source
                            media="(min-width: 82.5em)"
                            srcSet="assets/img/medium/als-sie-den-expertenpreis-hoer-66c5d4dfb1ab6c78625486b9-66c5d4ebb1ab6c78625486c5-1600.jpg"
                          />
                          <source
                            media="(min-width: 48em)"
                            srcSet="assets/img/medium/als-sie-den-expertenpreis-hoer-66c5d4dfb1ab6c78625486b9-66c5d4ebb1ab6c78625486c5-1600.jpg"
                          />
                          <source
                            srcSet="assets/img/medium/als-sie-den-expertenpreis-hoer-66c5d4dfb1ab6c78625486b9-66c5d4ebb1ab6c78625486c5-1600.jpg"
                          />
                          <img
                            width="180"
                            height="120"
                            fetchPriority="high"
                            decoding="sync"
                            src="assets/img/medium/als-sie-den-expertenpreis-hoer-66c5d4dfb1ab6c78625486b9-66c5d4ebb1ab6c78625486c5-1600.jpg"
                            alt="Als sie den Expertenpreis hört, bricht Verkäuferin in Jubel aus"
                            title="Als sie den Expertenpreis hört, bricht Verkäuferin in Jubel aus"
                          />
                        </picture>
                      </a>
                    </figure>
                    <section className="cell small-6 medium-12 large-text-border-x">
                      <header>
                        <span className="teaser-subject h6">
                          &quot;Bares für Rares&quot;
                        </span>
                        <div className="teaser-title h5">
                          {/* <a
                            className="frn_articleLink"
                            href="unterhaltung/promis/bares-fur-rares--alle-news-zur-show-40420404.html"
                            title="Als sie den Expertenpreis hört, bricht Verkäuferin in Jubel aus"
                            target="_self"
                          > */}
                          <a
                            className="frn_articleLink"
                            href="#"
                            title="Als sie den Expertenpreis hört, bricht Verkäuferin in Jubel aus"
                            target="_self"
                          >
                            Als sie den Expertenpreis hört, bricht Verkäuferin
                            in Jubel aus
                          </a>
                        </div>
                      </header>
                    </section>
                  </article>
                </div>
                <div className="cell medium-6 large-3 medium-order-3">
                  <div id="nativendo-start-fn"></div>
                  {/* <script>
                  Frn.on("loadAllSlots", function (e) {
                    (function () {
                      var s = document.createElement("script");
                      s.type = "text/javascript";
                      s.async = true;
                      s.src = "http://d.nativendo.de/d/init";
                      var sc = document.getElementsByTagName("script")[0];
                      sc.parentNode.insertBefore(s, sc);
                    })();
                  });
                </script> */}
                </div>
              </div>
            </div>
            {/* <script>
            Frn.on("MainLibLoaded", function () {
              Frn.container.init("#frn-cont033791560");
            });
          </script> */}
          </div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p2"
            className="d769366302Async"
          ></div>
          <div>
            <article className="has-edit-button">
              <h3></h3>
              <p></p>
              {/* <script>
              if (window.location.href.match(/order=2/)) {
                document.querySelector("#login").style.visibility = "hidden";
                document
                  .querySelector("head")
                  .insertAdjacentHTML(
                    "beforeend",
                    '<link rel="preload" as="image" href="binaries/_ht_1702045442429/medium/content/gallery/freenet/nachrichten/panorama/2023/12/08/pictures/spurensuche-der-kriminalpolizei-eine-seit-mittwoc">'
                  );
                document
                  .querySelectorAll(".carousel img")
                  .forEach(function (obj, index) {
                    if (index > 0) {
                      obj.remove();
                    }
                  });
                Frn.on("MainLibLoaded", function () {
                  $(document).ready(function () {
                    setTimeout(function () {
                      document
                        .querySelector(".loginbox.green")
                        .setAttribute("style", "background-color:#548325;");
                      document
                        .querySelector(
                          "#frn-loginbox .frn_loginBoxRegister .frn_button"
                        )
                        .setAttribute("style", "background-color:#548325;");
                      document
                        .querySelectorAll(
                          ".frn-container--aufmacher-home .teaser-subject.h6"
                        )
                        .forEach((item) => {
                          item.setAttribute("style", "color:#548325;");
                        });

                      //document.querySelector('.login-logo').setAttribute("style", "color:#092043;");
                    }, 500);
                  });
                });
                document.querySelector(".frnHomePreviewInfoLayer_bg").remove();
                document.querySelector(
                  ".frnHomePreviewInfoLayer_content"
                ).textContent = "";
              }
            </script> */}
            </article>
            {/* <!-- /?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p3 --> */}
          </div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p4"
            className="d769366302Async"
          ></div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p5"
            className="d769366302Async"
          ></div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p6"
            className="d769366302Async"
          ></div>
          <div>
            <div className="frn_adbox hide-for-small-only" id="ad-listbreaker1">
              <div id="div-gpt-ad-listbreaker1"></div>
              {/* <script>
              Frn.on("loadAdTagsStationary", function () {
                SDG.Publisher.registerSlot(
                  "listbreaker1",
                  "div-gpt-ad-listbreaker1"
                ).load();
              });
            </script> */}
            </div>
          </div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p8"
            className="d769366302Async"
          ></div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p9"
            className="d769366302Async"
          ></div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p10"
            className="d769366302Async"
          ></div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p11"
            className="d769366302Async"
          ></div>
          <div>
            <div className="frn_adbox hide-for-small-only" id="ad-listbreaker2">
              <div id="div-gpt-ad-listbreaker2"></div>
              {/* <script>
              Frn.on("loadAdTagsStationary", function () {
                SDG.Publisher.registerSlot(
                  "listbreaker2",
                  "div-gpt-ad-listbreaker2"
                ).load();
              });
            </script> */}
            </div>
          </div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p13"
            className="d769366302Async"
          ></div>
          <div>
            <div className="grid-container frn-container">
              <header>
                <h2 className="before-channel-color">
                  {/* <a href="unterhaltung/video/index.html">Video</a> */}
                  <a href="#">Video</a>
                </h2>
                <nav></nav>
              </header>
              <div className="grid-x grid-padding-y grid-padding-x">
                <div className="cell">
                  <glomex-integration
                    integration-id="2zh3y5k2d2j63o0to9"
                    playlist-id="pl-cjv58vkdijwn"
                  ></glomex-integration>
                  {/* <script>
                  Frn.on("MainLibLoaded", function () {
                    Frn.on("loadGlomexPlaylist", function () {
                      Frn.loadScriptByName(
                        "GlomexPlaylist",
                        function () {},
                        "module"
                      );
                    });
                  });
                </script> */}
                  <div
                    className="lazy"
                    data-on-inview="Frn.fireEvent('loadGlomexPlaylist');"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p15"
            className="d769366302Async"
          ></div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p16"
            className="d769366302Async"
          ></div>
          <div
            style={{ display: "none" }}
            id="/?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p17"
            className="d769366302Async"
          ></div>
          <div>
            <div id="ad-topmobile3" className="hide-for-medium frn_adbox">
              <div id="div-gpt-ad-topmobile3"></div>
              {/* <script>
              Frn.on("loadAdTagsStationary", function () {
                SDG.Publisher.registerSlot(
                  "topmobile3",
                  "div-gpt-ad-topmobile3"
                ).load();
              });
            </script> */}
            </div>
          </div>
          <div>
            <div className="frn_adbox hide-for-small-only" id="ad-pubperform">
              <div id="div-gpt-ad-pubperform"></div>
              {/* <script>
              Frn.on("loadAdTagsStationary", function () {
                SDG.Publisher.registerSlot(
                  "pubperform",
                  "div-gpt-ad-pubperform"
                ).load();
              });
            </script> */}
            </div>
          </div>
          <div>
            <article className="has-edit-button">
              <h3></h3>
              <p></p>
              {/* <style type="text/css">
              .frn-container--ende h2,
              .frn-container--ende .teaser-subject,
              .frn-container--ende p {
                display: none;
              }

              #ad-topmobile3 {
                margin-bottom: 50px;
              }
            </style> */}
            </article>
            {/* <!-- /?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p20 --> */}
          </div>
          <div>
            <article className="has-edit-button">
              <h3></h3>
              <p></p>
              {/* <style type="text/css">
              #frn-cont033791560 li.has-edit-button:first-of-type:before {
                content: url(binaries/content/gallery/freenet/z_asset/ukraine.jpg);
                background-size: 15px;
                margin-left: -1.8rem;
                margin-top: 0.3em;
                background-color: #fff;
              }
            </style> */}
            </article>
            {/* <!-- /?_hn:type=component-rendering&amp;_hn:ref=p1_p2_p21 --> */}
          </div>
        </div>
      </div>

      <footer></footer>
    </>
  );
}
