export const homeItems = [
  {
    name: "Home 01",
    routePath: "/",
  },
  {
    name: "Home 02",
    routePath: "/home_2",
  },
  {
    name: "Home 03",
    routePath: "/home_3",
  },
  {
    name: "Home 04",
    routePath: "/home_4",
  },
  {
    name: "Home 05",
    routePath: "/home_5",
  },
  {
    name: "Home 06",
    routePath: "/home_6",
  },
  {
    name: "Home 07",
    routePath: "/home_7",
  },
  {
    name: "Home 08",
    routePath: "/home_8",
  },
  {
    name: "Home 09",
    routePath: "/home_9",
  },
  {
    name: "Home 10",
    routePath: "/home_10",
  },
];
export const blogItems = [
  {
    name: "Blog List V1",
    routePath: "/blog-list-v1",
  },
  {
    name: "Blog List V2",
    routePath: "/blog-list-v2",
  },
  {
    name: "Blog Single",
    routePath: "/blog-details/1",
  },
];

export const pageItems = [
  {
    name: "404",
    routePath: "/404",
  },
  {
    name: "About",
    routePath: "/about",
  },
  {
    name: "Become Expert",
    routePath: "/become-expert",
  },
  {
    name: "Help Center",
    routePath: "/help-center",
  },
  {
    name: "Login",
    routePath: "/login",
  },
  {
    name: "Register",
    routePath: "/signup",
  },
  {
    name: "Terms",
    routePath: "/terms",
  },
  {
    name: "Invoice",
    routePath: "/invoice",
  },
];

// export const outbondItems = [
//   {
//     name: "Rafting",
//     routePath: "/activity-list-v2",
//   },
//   {
//     name: "Fun Game",
//     routePath: "/activity-list-v2",
//   },
// ];

export const documentationItems = [
  {
    name: "Jawa Timur",
    routePath: "#!"
  },
  {
    name: "Bali",
    routePath: "#!"
  },
  {
    name: "Lombok",
    routePath: "#!"
  },
]

export const renCar = [
  {
    name: "Jawa Timur",
    routePath: "/rent?location=Jawa Timur",
  },
  {
    name: "Bali",
    routePath: "/rent?location=Bali",
  },
  {
    name: "Lombok",
    routePath: "/rent?location=Lombok",
  },
  // {
  //   name: "Belitung",
  //   routePath: "/rent?location=",
  // },
];

export const dashboardItems = [
  {
    name: "Dashboard",
    routePath: "/dashboard/db-dashboard",
  },
  {
    name: "Booking History",
    routePath: "/dashboard/db-booking",
  },
  {
    name: "Wishlist",
    routePath: "/dashboard/db-wishlist",
  },
  {
    name: "Settings",
    routePath: "/dashboard/db-settings",
  },
  {
    name: "Vendor Dashboard",
    routePath: "/vendor-dashboard/dashboard",
  },
  {
    name: "Vendor Add Hotel",
    routePath: "/vendor-dashboard/add-hotel",
  },
  {
    name: "Vendor Booking",
    routePath: "/vendor-dashboard/booking",
  },
  {
    name: "Vendor Hotels",
    routePath: "/vendor-dashboard/hotels",
  },
  {
    name: "Vendor Recovery",
    routePath: "/vendor-dashboard/recovery",
  },
  {
    name: "Logout",
    routePath: "/login",
  },
];

export const categorieMegaMenuItems = [
  {
    id: 1,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/wisata-bali.webp",
        title: "Pilih paket wisata domestik terlengkap",
        btnText: "Lihat Paket",
        btnRoute: "/tour-list-v1",
        menuItems: [
          {
            id: 1,
            title: "Jawa Timur",
            menuList: [
              {
                name: "Bromo",
                routePath: "/tour-list-v1",
              },
              {
                name: "Malang",
                routePath: "/tour-list-v1",
              },
              {
                name: "Madiun",
                routePath: "/tour-list-v1",
              },
              {
                name: "Terminal",
                routePath: "/tour-list-v1",
              }
            ],
          }
          
        ],
      },
    ],
  },
  {
    id: 2,
    menuCol: [
      {
        id: 1,
        megaBanner: "/img/backgrounds/wisata-internasional.jpg",
        title: "Jelajahi dunia lebih jauh",
        btnText: "Lihat Paket",
        btnRoute: "/tour-list-v1",
        menuItems: [
          {
            id: 1,
            title: "",
            menuList: [
              {
                name: "Jepang",
                routePath: "/tour-list-v1",
              },
              {
                name: "Tour List v2",
                routePath: "/tour-list-v2",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const categorieMobileItems = [
  {
    id: 1,
    title: "Hotel",
    menuItems: [
      {
        id: 1,
        title: "Hotel List",
        menuList: [
          {
            name: "Hotel List v1",
            routePath: "/tour-list-v1",
          },
          {
            name: "Hotel List v2",
            routePath: "/tour-list-v1",
          },
          {
            name: "Hotel List v3",
            routePath: "/tour-list-v1",
          },
          {
            name: "Hotel List v4",
            routePath: "/tour-list-v1",
          },
          {
            name: "Hotel List v5",
            routePath: "/tour-list-v1",
          },
        ],
      },
      {
        id: 2,
        title: "Hotel Single",
        menuList: [
          {
            name: "Hotel Single v1",
            routePath: "/hotel-single-v1/5",
          },
          {
            name: "Hotel Single v2",
            routePath: "/hotel-single-v2/5",
          },
        ],
      },
      {
        id: 3,
        title: "Hotel Booking",
        menuList: [
          {
            name: "Booking Page",
            routePath: "/booking-page",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Tour",
    menuItems: [
      {
        id: 1,
        title: "Tour List",
        menuList: [
          {
            name: "Tour List v1",
            routePath: "/tour-list-v1",
          },
          {
            name: "Tour List v2",
            routePath: "/tour-list-v2",
          },
        ],
      },
      {
        id: 2,
        title: "Tour Pages",
        menuList: [
          {
            name: "Tour Map",
            routePath: "/tour-list-v3",
          },
          {
            name: "Tour Single",
            routePath: "/tour-single/5",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Activity",
    menuItems: [
      {
        id: 1,
        title: "Activity List",
        menuList: [
          {
            name: "Activity List v1",
            routePath: "/activity-list-v1",
          },
          {
            name: "Activity List v2",
            routePath: "/activity-list-v2",
          },
        ],
      },
      {
        id: 2,
        title: "Activity Pages",
        menuList: [
          {
            name: "Activity Map",
            routePath: "/activity-list-v3",
          },
          {
            name: "Activity Single",
            routePath: "/activity-single/3",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Hotel Rentals",
    menuItems: [
      {
        id: 1,
        title: "Rental List",
        menuList: [
          {
            name: "Rental List v1",
            routePath: "/rental-list-v1",
          },
          {
            name: "Rental List v2",
            routePath: "/rental-list-v2",
          },
        ],
      },
      {
        id: 2,
        title: "Rental Pages",
        menuList: [
          {
            name: "Rental Map",
            routePath: "/rental-list-v3",
          },
          {
            name: "Rental Single",
            routePath: "/rental-single/3",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Car",
    menuItems: [
      {
        id: 1,
        title: "Car List",
        menuList: [
          {
            name: "Car List v1",
            routePath: "/car-list-v1",
          },
          {
            name: "Car List v2",
            routePath: "/car-list-v2",
          },
        ],
      },
      {
        id: 2,
        title: "Car Pages",
        menuList: [
          {
            name: "Car Map",
            routePath: "/car-list-v3",
          },
          {
            name: "Car Single",
            routePath: "/car-single/1",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Cruise",
    menuItems: [
      {
        id: 1,
        title: "Cruise List",
        menuList: [
          {
            name: "Cruise List v1",
            routePath: "/cruise-list-v1",
          },
          {
            name: "Cruise List v2",
            routePath: "/cruise-list-v2",
          },
        ],
      },
      {
        id: 2,
        title: "Cruise Pages",
        menuList: [
          {
            name: "Cruise Map",
            routePath: "/cruise-list-v3",
          },
          {
            name: "Cruise Single",
            routePath: "/cruise-single/3",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Flights",
    menuItems: [
      {
        id: 1,
        title: "Flight List",
        menuList: [
          {
            name: "Flight List v1",
            routePath: "/flight-list-v1",
          },
        ],
      },
    ],
  },
];

export const paketWisataItems = [
  {
    id: 1,
    title: "Paket Wisata",
    menuItems: [
      {
        id: 1,
        title: "Domestik",
        menuList: [
          {
            name: "Bali",
            routePath: "/tour-list-v1",
          },
          {
            name: "Jawa Timur",
            routePath: "/tour-list-v1",
          },
          {
            name: "Yogyakarta",
            routePath: "/tour-list-v1",
          },
          {
            name: "Belitung",
            routePath: "/tour-list-v1",
          }
        ],
      },
      {
        id: 2,
        title: "Internasional",
        menuList: [
          {
            name: "Jepang",
            routePath: "/hotel-single-v1/5",
          },
        ],
      }
    ],
  },
];
