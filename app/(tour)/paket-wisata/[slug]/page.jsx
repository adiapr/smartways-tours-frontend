"use client";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import TourIndex from '@/components/tour-single/TourIndex';

// Fungsi untuk mengambil metadata dari API
const fetchTourData = async (slug) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu-wisata/${slug}`);
  const data = await response.json();
  return data;
};

const TourSingleV1Dynamic = ({ params }) => {
  const [title, setTitle] = useState('Smartway.tours');
  const [description, setDescription] = useState('adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).');

  useEffect(() => {
    const updateMetadata = async () => {
      try {
        const data = await fetchTourData(params.slug);
        setTitle(data.name);
        setDescription(data.description || 'adalah travel agen profesional yang berdiri sejak 2016 dibawah naungan PT. Bagus Bahagia Bersama (BBB Group).');
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    updateMetadata();
  }, [params.slug]);

  return (
    <>
      <Head>
        <title>{title + ' | Smartway Tours'}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://smartway.tours/img/logo/logo-white.png"></meta>
      </Head>
      <TourIndex slug={params.slug} />
    </>
  );
};

export default TourSingleV1Dynamic;
