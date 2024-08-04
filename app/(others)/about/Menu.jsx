"use client"
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

const IframeWrapper = styled.div`
    .card-side{
        top: 150px;
        width: 250px;
        z-index: 0 ;
        position: fixed;

        @media (max-width: 768px) {
            position: static;
            display: none;
            top: auto;
            width: 100%;
            z-index: auto;
        }
    }
`;

function Menu() {
  return (
    <IframeWrapper>
      <div className="card card-side">
                <div className="card-body">
                  <Link href="#tentang">
                    <h6 className="fw-bold">
                      Profil Perusahaan 
                    </h6>
                  </Link>
                  <hr />
                  <Link href="#ceo">
                    <h6 className="fw-bold">
                      CEO Letter
                    </h6>
                  </Link>
                  <hr />
                  <Link href="#kenapa">
                    <h6 className="fw-bold">
                      6 alasan Kenapa memilih Smartway
                    </h6>
                  </Link>
                  <hr />
                  <Link href="#tim">
                    <h6 className="fw-bold">
                      Tim Smartway
                    </h6>
                  </Link>
                </div>
      </div>
    </IframeWrapper>
  )
}

export default Menu