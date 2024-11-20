"use client";

import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";
import "../styles/font.css";
import "../styles/custom.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { SessionProvider } from "next-auth/react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { I18nextProviderWrapper } from "./providers/i18nextProvider";
import { CartProvider } from "./context/CartContext";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/logo/logo_bulat.png" /> 
      </head>
      <body>
        {/* <main> */}
          <>
          <CartProvider>
            <I18nextProviderWrapper>
              <SessionProvider>
                <Provider store={store}>
                  {children}
                  <SrollTop />
                </Provider>
              </SessionProvider>
            </I18nextProviderWrapper>
          </CartProvider>
          </>
        {/* </main> */}
      </body>
    </html>
  );
}
