import Image from 'next/image';
import React from 'react'

function WhyTake() {
    const helpBlockContent = [
        {
            id: 1,
            icon: "/img/pages/help/icons/1.svg",
            title: "Capture the Moment",
            text: `Preserve every special occasion with professional-grade photography.`,
        },
        {
            id: 2,
            icon: "/img/pages/help/icons/2.svg",
            title: "Seamless Payment",
            text: `Enjoy hassle-free transactions and secure payment options.`,
        },
        {
            id: 3,
            icon: "/img/pages/help/icons/3.svg",
            title: "Flexible Scheduling",
            text: `Easily adjust your booking or request refunds with our flexible policies.`,
        },
        {
            id: 4,
            icon: "/img/pages/help/icons/4.svg",
            title: "Exclusive Discounts",
            text: `Unlock special offers and promo codes for your next shoot.`,
        },
        {
            id: 5,
            icon: "/img/pages/help/icons/5.svg",
            title: "Day-of Excellence",
            text: `Experience seamless coordination and top-tier service on your big day.`,
        },
        {
            id: 6,
            icon: "/img/pages/help/icons/6.svg",
            title: "Tailored Packages",
            text: `Choose from customizable packages to suit your unique needs.`,
        },
    ];
    

  return (
    <>
    <div className="container">
        <h3 className="fw-bold">
            Why take photos with us?
        </h3>
        <p>
        We bring your moments to life with professional quality and creative vision.
        </p>
        <div className="row y-gap-30 pt-10 lg:pt-40">
            {helpBlockContent.map((item) => (
            <div className="col-lg-4 col-6 px-1" key={item.id}>
                <div className="bg-blue-1-05 rounded-4 px-md-50 px-10 py-40">
                    <div className="size-70 bg-white rounded-full flex-center">
                        <Image width={30} height={30} src={item.icon} alt="icon" />
                    </div>
                    <div className="mt-24">
                    <div className="text-18 fw-bold">{item.title}</div>
                        <p className="mt-5">{item.text}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default WhyTake