'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import MainMenu from "../MainMenu";
import MobileMenu from "../MobileMenu";
import ButtonHeader from "../Button";
import ButtonLanguage from "../ButtonLanguage";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);
  const { data: session } = useSession(); // Gunakan useSession untuk memeriksa status login

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header className={`header ${navbar ? "bg-dark-1 is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-20">
                  <img src="/img/logo/logo-white.png" alt="logo icon" />
                  <img src="/img/logo/logo-white.png" alt="logo icon" />
                </Link>
                {/* End logo */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="row x-gap-20 items-center">
                  <div className="header-menu">
                    <div className="header-menu__content">
                      <MainMenu style="text-white" />
                    </div>
                  </div>
                  {/* Start vertical divider */}
                  <div className="col-auto">
                    <div className="w-1 h-20 bg-white-20" />
                  </div>
                  {/* End vertical divider */}
                </div>
                {/* End language and currency selector */}
                
                {/* Start btn-group */}
                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                  <ButtonHeader session={session} />
                  
                </div>
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white">
                  <div>
                    <ButtonLanguage />
                  </div>
                  <div>
                    <Link
                      href="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />
                    <div
                      className="offcanvas offcanvas-start mobile_menu-content"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
    </>
  );
};

export default Header1;
