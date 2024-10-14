// page.jsx
import React from 'react';
import Header1 from "../../components/header/header-1";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import JoinGroup from '../../components/home/home-1/JoinGroup';
import DocumentationCheckout from '@/components/booking-page/DocumentaionCheckout';

function Page({ searchParams }) {
    // console.log(searchParams);
  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
      {/* <DefaultHeader />
      <div className="mt-90" style={{ backgroundImage: 'linear-gradient(to top right, rgba(0, 0, 255, 0.3), rgba(255, 255, 255, 0.5))' }}>
        <div className="container py-50">
          <h1 className="fw-bold">Let’s plan your photo shoot</h1>
        </div>
      </div>
      <div className="container">
        <div className="bg-white py-3" style={{ marginTop: '20px', borderRadius: '10px' }}>
          <DocumentationCheckout searchParams={searchParams} />
        </div>
      </div>
      <JoinGroup />
      <DefaultFooter /> */}
      <h1>- The site is unavaiable -</h1>
    </div>
  );
}

export default Page;
