"use client"
import React from 'react'
import styled from 'styled-components'

const IframeWrapper = styled.div`
    iframe{
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 10px;
    }
`;

function TestimonialYoutube() {
  return (
    <div className='container mt-3'>
        <h2 className="text-30">
            Testimony Perjalanan Kami
        </h2>
        <p>Biarkan testimoni ini menjadi bukti komitmen kami dalam memberikan pelayanan terbaik untuk setiap perjalanan Anda.</p>

        <IframeWrapper>
            <div className="row mt-2">
                <div className="col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9kVvsDjQfvA?si=N4uHyMIbr_EZZG1r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/N9ESAFZjDfw?si=un1JO2i-OLqbg36J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/IiOeRd8GAq8?si=q0mpQ3STCZsXc64n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-md-6">
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_fUsGKLYC8o?si=jpZ-2pooI9wJEJc1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </IframeWrapper>
    </div>
  )
}

export default TestimonialYoutube