import AccordionContent from "./ItineraryContent";
import MapPropertyFinder from "./MapPropertyFinder";
import styled from 'styled-components';
// import style from './style/tours.modules.css'

const IframeWrapper = styled.div`
  iframe {
    width: 100%;
    aspect-ratio: 1/1;
  }
`;

const index = ({tour}) => {
  // console.log(tour.tour_schedules);
  return (
    <div className="row y-gap-30">
      <div className="col-lg-4 iteraryy">
        <div className="relative">
          <div className="border-test" />
          <div className="accordion -map row y-gap-20" id="itineraryContent">
            <AccordionContent schedule={tour.tour_schedules} />
          </div>
        </div>
      </div>
      {/* End col-lg-4 */}

      <div className="col-lg-8">
        <IframeWrapper className="rounded-4 ">
        {/* <MapPropertyFinder /> */}
          <div dangerouslySetInnerHTML={{ __html: tour.map }} />
        </IframeWrapper>
      </div>
    </div>
  );
};

export default index;
