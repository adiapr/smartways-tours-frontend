"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components';

function Private() {
    const CustomImage = styled(Image)`
  max-width: 25px !important;
  max-height: 25px !important;
  width: 25px;
  height: 25px;
`;

  return (
    <div className='container' style={{ marginTop:'100px' }}>
        {/* <h2 className="text-30 mt-3">
            sss
        </h2>
        <p>Biarkan testimoni ini menjadi bukti komitmen kami dalam memberikan pelayanan terbaik untuk setiap perjalanan kamu.</p> */}
        <div className="row mt-3">
            <div className="col-md-7">
                <h3 className="fw-bold">
                Nikmati Liburan Eksklusif dengan Private Tour dan Custom Tour dari Smartway!
                </h3>
                <p>
                    Buat kamu yang mau liburan tapi nggak mau digabung sama peserta tur lain. Kamu bisa banget nih request untuk ambil private tour. Kamu juga bisa tentuin destinasi tujuan perjalanan kamu sesuai dengan preferensi lewat layanan custom tour. Travel consultant Smartway bakal bantu kamu ngerencanain dan bikin itinerary perjalanan terbaik! Dengan 2 skema tur ini, kamu bakal dapet banyak keuntungan!
                    <ul>
                        <li className='mt-2'>
                            <table>
                                <tr>
                                    <td valign='top'><CustomImage src={'/img/icons/checklist.svg'} width={50} height={50} /> </td>
                                    <td>
                                        <b> Bisa berangkat kapan aja</b> <br />
                                        Yup, betul banget 2 skema tur ini memungkinkan untuk dijalankan kapan aja. Kamu bebas tentuin tanggal keberangkatannya!
                                    </td>
                                </tr>
                            </table>
                             
                        </li>
                        <li className='mt-2'>
                            <table>
                                <tr>
                                    <td valign='top'><CustomImage src={'/img/icons/checklist.svg'} width={50} height={50} /> </td>
                                    <td>
                                        <b> Privasi dan Kenyamanan</b> <br />
                                        Untuk privasi dan kenyaman kamu ga perlu khawatir karena kamu ga bakal digabung sama peserta tur lain. Kamu bisa bebas berekspresi, maksimalin konten, rayakan momen istimewa tanpa sungkan / terganggu sama orang lain yang ga kamu kenal.
                                    </td>
                                </tr>
                            </table>
                        </li>
                        <li className='mt-2'>
                            <table>
                                <tr>
                                    <td valign='top'><CustomImage src={'/img/icons/checklist.svg'} width={50} height={50} /> </td>
                                    <td>
                                        <b> Kebebasan waktu</b> <br />
                                        Kamu bisa leluasa tentuin durasi kunjungan di masing-masing destinasi wisata.
                                    </td>
                                </tr>
                            </table>
                            
                        </li>
                        <li className='mt-2'>
                            <table>
                                <tr>
                                    <td valign='top'><CustomImage src={'/img/icons/checklist.svg'} width={50} height={50} /> </td>
                                    <td>
                                        <b> Request destinasi</b> <br />
                                        Buat kamu yang suka sama destinasi hidden gems yang ga banyak orang tau, skema tur ini cocok banget buat kamu karena kamu bisa request ke destinasi-destinasi unik sesuai dengan preferensi kamu. Asik banget kan! 
                                    </td>
                                </tr>
                            </table>
                            
                        </li>
                        <li className='mt-2'>
                            <table>
                                <tr>
                                    <td valign='top'><CustomImage src={'/img/icons/checklist.svg'} width={50} height={50} /> </td>
                                    <td>
                                        <b> Cocok buat liburan keluarga, perusahaan, acara fun games/outing kantor.</b> <br />
                                        Yup, udah lebih dari 40.000+ tamu (dari total 200.000+ tamu Smartway sejak 2016), yang udah cobain skema tur ini. Sekarang giliran kamu dan orang tersayang nih, gaskeun!
                                    </td>
                                </tr>
                            </table>
                            
                        </li>
                    </ul>
                </p>
            </div>
            <div className="col-md-5">
                <Image src={'/img/illustration/private.jpg'} width={600} height={'100'} unoptimized />

                <Link
                    href="https://api.Whatsapp.com/send?phone=6282155144449&text=Hai%20Smartway.tours%2C%0ASaya%20ingin%20mendaftar%20program%20private%20tours%2C%20mohon%20bantuannya%20ya"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Daftar Private Tour <div className="icon-arrow-top-right ml-15" />
                </Link>
            </div>
            
        </div>
        <div className="row" style={{ marginTop:'100px' }}>
            <div className="col-md-5">
                <Image src={'/img/illustration/saving.jpg'} width={600} height={'100'} unoptimized />

                
            </div>
            <div className="col-md-7">
                <h3 className="fw-bold">
                    Wujudkan Petualangan Impianmu!
                </h3>
                <p>
                    <b>Pengen liburan tapi susah nabungnya.</b> Eits tenang! Smartway punya program nabung buat kamu yang susah nahan godaan dan kelola pengeluaran harian yang suka bikin kamu boncos di akhir bulan. <br />
                    Kamu bisa daftar program nabung buat liburan kamu berikutnya ke destinasi impian! Gabung dan nikmati berbagai macam keuntungannya:
                     <br />
                    <ul>
                        <li className='mt-2'>
                            <table>
                                <tr>
                                    <td valign='top'><CustomImage src={'/img/icons/checklist.svg'} width={50} height={50} /> </td>
                                    <td>
                                        <b> Terpercaya dan Amanah</b> <br />
                                        Sudah ratusan orang coba program nabung trip Smartway dari tahun 2016. Kamu bisa cek dokumen legalitas perusahaan dan testimoni pelanggan kami di google review, Tripadvisor, social media (Instagram, Tiktok, Facebook, dan Youtube).
                                    </td>
                                </tr>
                            </table>
                            
                        </li>
                        <li className='mt-2'>
                            <table>
                                <tr>
                                    <td valign='top'><CustomImage src={'/img/icons/checklist.svg'} width={50} height={50} /> </td>
                                    <td>
                                        <b> Request skema nabung</b> <br />
                                        Atur anggaran liburan kamu dengan mudah dan efektif. Perencanaan keuangan mudah karena berorientasi pada kemampuan nabung masing- masing peserta.
                                    </td>
                                </tr>
                            </table>
                            
                        </li>
                        <li className='mt-2'>
                            <table>
                                <tr>
                                    <td valign='top'><CustomImage src={'/img/icons/checklist.svg'} width={50} height={50} /> </td>
                                    <td>
                                        <b> Tanpa bunga</b> <br />
                                        Ga perlu khawatir kena bunga karena program ini didesain untuk bantu kamu merencanakan perjalanan terbaik bersama Smartway! Jadi kami cuma bantu simpen uang kamu aja, tanpa kena bunga sepeserpun!
                                    </td>
                                </tr>
                            </table>
                            
                        </li>
                    </ul>
                </p>
                <Link
                    href="https://api.Whatsapp.com/send?phone=6282155144449&text=Hai%20Smartway.tours%2C%0ASaya%20ingin%20mendaftar%20program%20menabung%20untuk%20wisata%2C%20mohon%20bantuannya%20ya"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-3"
                >
                    Daftar Program Menabung <div className="icon-arrow-top-right ml-15" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Private