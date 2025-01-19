"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'

const IframeWrapper = styled.div`
    iframe{
        width: 100%;
        aspect-ratio: 9/16;
        border-radius: 10px;
    }
`;

function TestimonialYoutube() {
    const [videos, setVideos] = useState([]);
    const { t } = useTranslation('common');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimony`);
                const result = await response.json();
                setVideos(result);
            } catch (error) {
                console.log('error ya : ', error)                
            }
        }
        fetchData();
    }, [])

  return (
    <div className='container mt-3'>
        <h2 className="text-30">
             
            {t('testimony.TestimoniPerjalanan')}
        </h2>
        <p>{t('testimony.TestimoniDeskripsi')}</p>

        <IframeWrapper>
            <div className="container">
                <div className="row mt-2">
                    {videos.map((item) => (
                        <div className="col-md-3 col-6 px-2" key={item.id}>
                                <iframe src={`https://www.youtube-nocookie.com/embed/${item.name}&amp;controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </IframeWrapper>
    </div>
  )
}

export default TestimonialYoutube