import TourIndex from '@/components/tour-single/TourIndex';

export const metadata = {
  title: 'Paket Wisata | Smartway tours',
  description: 'Petualangan menanti Anda dengan berbagai aktivitas seru dan menarik yang kami tawarkan di setiap paket wisata kami.',
};


const TourSingleV1Dynamic = async ({ params }) => {
  return <TourIndex slug={params.slug} />;
};

export default TourSingleV1Dynamic;
