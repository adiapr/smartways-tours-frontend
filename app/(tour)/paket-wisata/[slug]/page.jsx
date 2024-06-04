import TourIndex from '@/components/tour-single/TourIndex';

export const metadata = {
  title: 'Smartway.tours',
  description: 'adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).',
};


const TourSingleV1Dynamic = async ({ params }) => {
  return <TourIndex slug={params.slug} />;
};

export default TourSingleV1Dynamic;
