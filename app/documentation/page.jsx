import Header1 from "../../components/header/header-1";
import DefaultFooter from "../../components/footer/default";
import JoinGroup from '../../components/home/home-1/JoinGroup'
import Hero4 from "../../components/hero/hero-4";
import React from 'react'
import Travellers from "../../components/home/home-2/Travellers";
import CategoryDocumentation from "../../components/documentation/CategoryDocumentation";

function Documentation() {
  return (
    <div>
        <Header1 />
        <Hero4 />
        {/* <Travellers /> */}
        <CategoryDocumentation />
        <JoinGroup />
        <DefaultFooter />
    </div>
  )
}

export default Documentation