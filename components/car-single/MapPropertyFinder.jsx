
'use client'

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapPropertyFinder() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Alwys set the container height explicitlya
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.9252990007085!2d112.75437824527192!3d-8.006640659349372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6259ce5e73b73%3A0x8266895c3ab24e99!2sSmartway%20Indonesia%20Tours%20%7C%20Open%20trip%20Bromo%2C%20Kawah%20Ijen%2C%20Bali%2C%20Lombok%2C%20Belitung!5e0!3m2!1sid!2sid!4v1718629229597!5m2!1sid!2sid" style={{ width:'100%',aspectRatio:'16/9' }}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    // <GoogleMapReact
    //   bootstrapURLKeys={{ key: "" }}
    //   defaultCenter={defaultProps.center}
    //   defaultZoom={defaultProps.zoom}
    // >
    //   <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    // </GoogleMapReact>
  );
}
