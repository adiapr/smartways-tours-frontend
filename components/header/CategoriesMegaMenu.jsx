import Image from "next/image";
import Link from "next/link";
import {
  isActiveParent,
  isActiveLink,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CategoriesMegaMenu = ({ setIsActiveParent }) => {
  const pathname = usePathname();
  const [activeNestedMenu, setActiveNestedMenu] = useState(0);
  const [categorieMegaMenuItems, setCategorieMegaMenuItems] = useState([]);

  const itemList = [
    "Paket Wisata Indonesia",
    "Paket Wisata Internasional",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [domestikResponse, internasionalResponse] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu-wisata-domestik`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu-wisata-internasional`)
        ]);
        // console.log(process.env.NEXT_PUBLIC_API_URL);

        const domestikData = await domestikResponse.json();
        const internasionalData = await internasionalResponse.json();

        const formattedData = [
          formatData(domestikData, "Pilih paket wisata Indonesia terlengkap", "/img/backgrounds/wisata-bali.webp"),
          formatData(internasionalData, "Jelajahi dunia lebih jauh", "/img/backgrounds/wisata-internasional.jpg")
        ];

        setCategorieMegaMenuItems(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatData = (data, title, banner) => {
    return {
      id: data.id || Math.random(), // Ensure unique IDs
      menuCol: [
        {
          id: data.id || Math.random(),
          megaBanner: banner,
          title: title,
          btnText: "Lihat Paket",
          btnRoute: "/paket-wisata",
          menuItems: data.map(item => ({
            id: item.id,
            title: item.title,
            menuList: item.menu_list.map(menu => ({
              name: menu.name,
              routePath: menu.routePath
            }))
          }))
        }
      ]
    };
  };

  useEffect(() => {
    categorieMegaMenuItems.forEach(megaMenu => {
      megaMenu?.menuCol?.forEach(megaCol => {
        megaCol?.menuItems?.forEach(item => {
          item?.menuList?.forEach(list => {
            if (list.routePath?.split('/')[1] === pathname.split('/')[1]) {
              setIsActiveParent(true);
              setActiveNestedMenu(megaMenu.id - 1);
            }
          });
        });
      });
    });
  }, [categorieMegaMenuItems, pathname, setIsActiveParent]);

  return (
    <div className="tabs -underline-2 js-tabs">
      <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls">
        {itemList.map((item, i) => (
          <div className="col-auto" key={i} onClick={() => setActiveNestedMenu(i)}>
            <button className={`tabs__button text-light-1 fw-500 js-tabs-button ${activeNestedMenu === i ? 'nested-menu-active' : 'nested-menu-inactive'}`}>
              {item}
            </button>
          </div>
        ))}
      </div>
      {/* End tab-controls */}

      <div className="tabs__content js-tabs-content">
        <div className={'react-tabs__tab-panel--selected'}>
          {categorieMegaMenuItems[activeNestedMenu]?.menuCol?.map((megaCol, i) => (
            <ul className="mega__content" key={i}>
              <li className="">
                {megaCol?.menuItems?.map((item) => (
                  <div className="mega__item font-bold" key={item.id}>
                    <a href={`/paket-wisata?location=${item.id}`} className="text-15 fw-bold underline">{item.title}</a>
                    {/* <div className="y-gap-5 text-15 pt-5">
                      {item?.menuList?.map((list, i) => (
                        <div
                          key={i}
                          className={
                            isActiveLink(list.routePath, pathname)
                              ? "current"
                              : ""
                          }
                        >
                          <Link href={'/paket-wisata/'+list.routePath}>{list.name.slice(0,20)}</Link>
                        </div>
                      ))}
                    </div> */}
                  </div>
                ))}
              </li>
              {/* End mega menu list left */}

              <li className="mega__image d-flex relative">
                <Image
                  width={270}
                  height={300}
                  src={megaCol?.megaBanner}
                  alt="image"
                  className="rounded-4 js-lazy"
                />

                <div className="absolute w-full h-full px-30 py-24">
                  <div className="text-22 fw-500 lh-15 text-white">
                    {megaCol?.title}
                  </div>
                  <Link
                    href={megaCol?.btnRoute}
                    className="button text-uppercase h-50 px-30 -blue-1 text-dark-1 bg-white mt-20 d-inline-flex"
                  >
                    {megaCol?.btnText}
                  </Link>
                </div>
              </li>
              {/* End mega menu right images */}
            </ul>
          ))}
        </div>
      </div>
      {/* End tab_content */}
    </div>
  );
};

export default CategoriesMegaMenu;
