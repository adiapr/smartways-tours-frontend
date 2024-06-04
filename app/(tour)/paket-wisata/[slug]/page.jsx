// import TourIndex from '@/components/tour-single/TourIndex';

// export const metadata = {
//   title: 'Smartway.tours',
//   description: 'adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).',
// };


// const TourSingleV1Dynamic = async ({ params }) => {
//   // console.log(params);
//   return <TourIndex slug={params.slug} />;
// };

// export default TourSingleV1Dynamic;
"use client";
import React, { useEffect, useState } from 'react';
import TourIndex from '@/components/tour-single/TourIndex';

// Fungsi untuk mengambil metadata dari API
const fetchTourData = async (slug) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu-wisata/${slug}`);
  const data = await response.json();
  return data;
  
};

const TourSingleV1Dynamic = ({ params, data }) => {
  
  const [title, setTitle] = useState('Smartway.tours');
  const [description, setDescription] = useState('adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).');

  useEffect(() => {
    const updateMetadata = async () => {
      try {
        const data = await fetchTourData(params.slug);
        console.log(data.name);
        setTitle(data.name);
        setDescription(data.description || 'adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).');
        document.title = data.name + ' | Smartway Tours' || 'Smartway.tours'; // Update the page title
        // Optionally, update the meta description tag
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', data.description || 'adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).');
        }
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    updateMetadata();
  }, [params.slug]);

  return <TourIndex slug={params.slug} />;
};

export default TourSingleV1Dynamic;

