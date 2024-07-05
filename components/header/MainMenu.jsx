import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import {
  homeItems,
  blogItems,
  pageItems,
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
import Image from "next/image";

const MainMenu = ({ style = "" }) => {
  const { t, i18n } = useTranslation('common');
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false);

  const changeLanguageToEnglish = () => {
    i18n.changeLanguage('en');
  };

  const changeLanguageToIndonesian = () => {
    i18n.changeLanguage('id');
  };

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={isActiveParent ? "menu-item-has-children -has-mega-menu current" : 'menu-item-has-children -has-mega-menu'}>
          <a href="#">
            <span className="mr-10">{t('common.menuPackages')}</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega">
            <CategoriesMegaMenu setIsActiveParent={setIsActiveParent} />
          </div>
        </li>
        <li
          className={`${
            isActiveParentChaild(documentationItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="/documentation">
            <span className="mr-10">{t('common.menuDocumentation')}</span>
            {/* <i className="icon icon-chevron-sm-down" /> */}
          </a>
        </li>
        <li
          className={`${
            isActiveParentChaild(renCar, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">{t('common.menuRentals')}</span>
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
          <Link href="/blog">
            <span className="mr-10">{t('common.menuArticles')}</span>
          </Link>
        </li>
        <li
          className={`${
            isActiveParentChaild(pageItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href="/about">
            <span className="mr-10">{t('common.menuAboutUs')}</span>
          </Link>
        </li>
        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">{t('common.menuContact')}</Link>
        </li>
        <li className="language-switch ms-2">
          {i18n.language === 'en' ? (
            <button onClick={changeLanguageToIndonesian}><Image src={'/img/lang/id.png'} width={40} height={40} style={{ borderRadius:'10px', border:'solid 1px white' }}/></button>
          ) : (
            <button onClick={changeLanguageToEnglish}><Image src={'/img/lang/en.png'} width={40} height={40} style={{ borderRadius:'10px', border:'solid 1px white' }}/></button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
