"use client";

import Link from "next/link";

import {

  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
  categorieMegaMenuItems,
  paketWisataItems,
  outbondItems,
  renCar,
} from "../../data/mainMenuData";
import {
  isActiveLink,

} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const pathname = usePathname();

  const [isActiveParent, setIsActiveParent] = useState(false)
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false)
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false)

  const router = useRouter()

   useEffect(() => {

    categorieMegaMenuItems.map((megaMenu=>{
    megaMenu?.menuCol?.map((megaCol=>{
      megaCol?.menuItems?.map((item=>{   
        item?.menuList?.map((list)=>{
          if (list.routePath?.split('/')[1] == pathname.split('/')[1]) {
            setIsActiveParent(true)
            setisActiveNestedParentTwo(item?.title)
            setisActiveNestedParent(megaMenu?.id)           
          }        
        })
      }))
    }))
  }))


   
 }, [])

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/logo/logo-hitam.png" className="!max-w-[100px]" style={{ maxWidth:'150px' }} alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

    
        <Sidebar width="400" backgroundColor="#fff">

          <Menu>
            {/* <SubMenu label="Home" className={ homeItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {homeItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                 
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu> */}
            {/* End  All Home Menu */}

            <MenuItem
             onClick={()=>router.push("/")}
             className={
              pathname === "/"
                ? "menu-active-link"
                : ""
            }
              
            >
              Home
            </MenuItem>

            <SubMenu label="Produk" className={isActiveParent ? 'menu-active-link':'' }>
              {paketWisataItems.map((item) => (
                <SubMenu label={item.title} key={item.id} className={isActiveNestedParent == item.id ? 'menu-active-link':'inactive-menu'}>
                  {item.menuItems.map((single) => (
                    <SubMenu label={single.title} key={single.id}  className={isActiveNestedParentTwo == single.title ? 'menu-active-link':'inactive-menu'} >
                      {single.menuList.map((menu, i) => (
                        <MenuItem
                          key={i}
                          onClick={()=>router.push(menu.routePath)}
                          className={
                            isActiveLink(menu.routePath, pathname)
                              ? "menu-active-link"
                              : "inactive-menu"
                          }
                        >
                          {menu.name}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  ))}
                </SubMenu>
              ))}
            </SubMenu>
            {/* End  All Categories Menu */}

            {/* <MenuItem
             onClick={()=>router.push("/destinations")}
             className={
              pathname === "/destinations"
                ? "menu-active-link"
                : ""
            }
              
            >
              Desitinations
            </MenuItem> */}
            {/* End  Desitinations Menu */}

            <SubMenu label="Outbond" className={ blogItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {outbondItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End  All Blog Menu */}

            <SubMenu label="Ren Car & Bus" className={ pageItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {renCar.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End  All Pages Menu */}
            
            <MenuItem
             onClick={()=>router.push("/blog")}
             className={
              pathname === "/blog"
                ? "menu-active-link"
                : ""
            }
              
            >
              Blog
            </MenuItem>

            <MenuItem
             onClick={()=>router.push("/about")}
             className={
              pathname === "/about"
                ? "menu-active-link"
                : ""
            }
              
            >
              About Me
            </MenuItem>

            <MenuItem
             onClick={()=>router.push("/contact")}
             className={
              pathname === "/contact"
                ? "menu-active-link"
                : ""
            }
              
            >
              Contact
            </MenuItem>

          </Menu>
        </Sidebar>



      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Smartway Indonesia</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        <div className="mt-20">
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};


export default MobileMenu;
