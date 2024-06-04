import Link from "next/link";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  outbondItems,
  renCar,
  documentationItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { usePathname } from "next/navigation";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false)

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          {/* <Link href="/">
            <span className="mr-10">Home</span>
          </Link> */}
          {/* <ul className="subnav">
            {homeItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul> */}
        </li>
        {/* End home page menu */}

        <li className={isActiveParent ? "menu-item-has-children -has-mega-menu current":'menu-item-has-children -has-mega-menu'}>
          <a href="#">
            <span className="mr-10">Paket Wisata</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega">
            <CategoriesMegaMenu setIsActiveParent={setIsActiveParent} />
          </div>
        </li>
        {/* End categories menu items */}

        {/* <li className={pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li> */}
        {/* End Destinatinos single menu */}

        

        <li
          className={`${
            isActiveParentChaild(pageItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Layanan Dokumentasi</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {documentationItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>

        <li
          className={`${
            isActiveParentChaild(pageItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Rental Mobil/Bus</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {renCar.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>

        <li
          className={`${
            isActiveParentChaild(blogItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href="/blog-list-v2">
            <span className="mr-10">Artikel</span>
          </Link>
        </li>
        <li
          className={`${
            isActiveParentChaild(blogItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href="/about">
            <span className="mr-10">Tentang Kami</span>
          </Link>
        </li>
        {/* End blogIems */}

        {/* <li
          className={`${
            pathname.split('/')[1] == 'dashboard'  || pathname.split('/')[1] == 'vendor-dashboard' ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}

        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Kontak</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
