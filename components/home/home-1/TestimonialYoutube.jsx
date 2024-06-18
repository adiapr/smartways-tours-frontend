"use client"
import React from 'react'
import styled from 'styled-components'

const IframeWrapper = styled.div`
    iframe{
        width: 100%;
        aspect-ratio: 9/16;
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
                <div className="col-md-3 col-6 px-2">
                        <iframe width="315" height="560" src="https://www.youtube-nocookie.com/embed/wFcNQJa6oBM?si=6LAhytFcYUi6Shpq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-md-3 col-6 px-2">
                        <iframe width="315" height="560" src="https://www.youtube-nocookie.com/embed/nl1yIG92-Yw?si=pj_cn7Uqec1tBSsc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-md-3 col-6 px-2">
                        <iframe width="315" height="560" src="https://www.youtube-nocookie.com/embed/eVsq6drdEV8?si=M0Td2yMwTEsnct0m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-md-3 col-6 px-2">
                        <iframe width="315" height="560" src="https://www.youtube-nocookie.com/embed/_Awjuuok7vk?si=ws4Wv6lJeqQsAOis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </IframeWrapper>
    </div>
  )
}

export default TestimonialYoutube