import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home_1/page";

export const metadata = {
  title: "Smartway Tours",
  description: " Smartway adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).",
};

export default function Home() {
  return (
    <>
      {/* <Wrapper>
        <MainHome />
      </Wrapper> */}
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", height:"100vh" }}>
        <div>
          <h1 style={{ textAlign:"center" }}>
            - <br />
            - The site is unavaiable - <br />
            -
          </h1>
        </div>
      </div>
    </>
  );
}
