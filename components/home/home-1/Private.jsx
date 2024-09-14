"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

function Private() {
    const CustomImage = styled(Image)`
        max-width: 25px !important;
        max-height: 25px !important;
        width: 25px;
        height: 25px;
    `;

    const { t } = useTranslation('common');

    // Ambil data dari common 
    const menuPrivate = Object.keys(t('private_tour.menu', { returnObjects: true }));
    const menuNabung = Object.keys(t('menabung.menu', { returnObjects: true }));  // Perbaikan di sini

    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div className="row mt-3">
                <div className="col-md-7">
                    <h3 className="fw-bold">
                        {t('private_tour.title')}
                    </h3>
                    <p>
                        {t('private_tour.description')}
                        <ul>
                            {menuPrivate.map((key) => {
                                const item = t(`private_tour.menu.${key}`, { returnObjects: true });
                                return (
                                    <li className='mt-2' key={key}>  {/* Tambahkan key untuk setiap elemen */}
                                        <table>
                                            <tbody> {/* Tambahkan elemen tbody untuk memperbaiki error HTML */}
                                                <tr>
                                                    <td valign='top'>
                                                        <CustomImage src={'/img/icons/checklist.svg'} width={50} height={50} />
                                                    </td>
                                                    <td>
                                                        <b> {item.title}</b> <br />
                                                        {item.subtitle}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                )
                            })}
                        </ul>
                    </p>
                </div>
                <div className="col-md-5">
                    <Image src={'/img/illustration/private.jpg'} width={600} height={'100'} unoptimized />

                    <Link
                        href="https://api.Whatsapp.com/send?phone=6282155144449&text=Hai%20Smartway.tours%2C%0ASaya%20ingin%20mendaftar%20program%20private%20tours%2C%20mohon%20bantuannya%20ya"
                        className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                    >
                        {t('private_tour.cta')} <div className="icon-arrow-top-right ml-15" />
                    </Link>
                </div>
            </div>

            {/* Bagian untuk Menabung */}
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-md-5">
                    <Image src={'/img/illustration/saving.jpg'} width={600} height={'100'} unoptimized />
                </div>
                <div className="col-md-7">
                    <h3 className="fw-bold">
                        {t('menabung.title')}
                    </h3>
                    <p>
                        {t('menabung.description')}
                        <br />
                        <ul>
                            {menuNabung.map((key) => {
                                const item = t(`menabung.menu.${key}`, { returnObjects: true });  // Perbaikan di sini
                                return (
                                    <li className='mt-2' key={key}>  {/* Tambahkan key untuk setiap elemen */}
                                        <table>
                                            <tbody> {/* Tambahkan elemen tbody untuk memperbaiki error HTML */}
                                                <tr>
                                                    <td valign='top'>
                                                        <CustomImage src={'/img/icons/checklist.svg'} width={50} height={50} />
                                                    </td>
                                                    <td>
                                                        <b>{item.title} </b> <br />
                                                        {item.subtitle}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                )
                            })}
                        </ul>
                    </p>
                    <Link
                        href="https://api.Whatsapp.com/send?phone=6282155144449&text=Hai%20Smartway.tours%2C%0ASaya%20ingin%20mendaftar%20program%20menabung%20untuk%20wisata%2C%20mohon%20bantuannya%20ya"
                        className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-3"
                    >
                        {t('menabung.cta')} <div className="icon-arrow-top-right ml-15" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Private;
