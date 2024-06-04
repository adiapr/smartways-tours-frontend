import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Private() {
  return (
    <div className='container' style={{ marginTop:'100px' }}>
        {/* <h2 className="text-30 mt-3">
            sss
        </h2>
        <p>Biarkan testimoni ini menjadi bukti komitmen kami dalam memberikan pelayanan terbaik untuk setiap perjalanan Anda.</p> */}
        <div className="row mt-3">
            <div className="col-md-7">
                <h3 className="fw-bold">
                    Nikmati Liburan Eksklusif dengan Private Tour dari Smartway!
                </h3>
                <p>
                    Apakah Anda mencari pengalaman perjalanan yang lebih pribadi dan eksklusif? <br />
                    Smartway menawarkan private tour yang dirancang khusus untuk memenuhi kebutuhan dan preferensi Anda. Dengan private tour, Anda akan mendapatkan:
                    <ul>
                        <li className='mt-2'>
                            <b><Image src={'/img/icons/checklist.svg'} width={20} height={20} /> Kebebasan Penuh</b> <br />
                            Rencanakan jadwal perjalanan Anda sesuai keinginan tanpa terganggu oleh orang lain.
                        </li>
                        <li className='mt-2'>
                            <b><Image src={'/img/icons/checklist.svg'} width={20} height={20} /> Privasi dan Kenyamanan</b> <br />
                            Nikmati momen-momen istimewa bersama keluarga atau teman dekat tanpa gangguan.
                        </li>
                        <li className='mt-2'>
                            <b><Image src={'/img/icons/checklist.svg'} width={20} height={20} /> Pemandu Pribadi</b> <br />
                            Ditemani pemandu wisata profesional yang siap memberikan informasi dan bantuan kapan saja.
                        </li>
                        <li className='mt-2'>
                            <b><Image src={'/img/icons/checklist.svg'} width={20} height={20} /> Destinasi Khusus</b> <br />
                            Jelajahi tempat-tempat eksklusif yang tidak biasa dikunjungi dalam tur reguler.
                        </li>
                    </ul>
                </p>
            </div>
            <div className="col-md-5">
                <Image src={'/img/illustration/private.jpg'} width={600} height={'100'} unoptimized />

                <Link
                    href="/booking-page"
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
                    Wujudkan Petualangan Impian Anda!
                </h3>
                <p>
                    Ingin menikmati liburan impian tanpa khawatir tentang biaya? Mulailah menabung di Smartway dan nikmati berbagai keuntungan: <br />
                    <ul>
                        <li className='mt-2'>
                            <b><Image src={'/img/icons/checklist.svg'} width={20} height={20} /> Perencanaan Keuangan Mudah</b> <br />
                            Atur anggaran liburan Anda dengan mudah dan efektif.
                        </li>
                        <li className='mt-2'>
                            <b><Image src={'/img/icons/checklist.svg'} width={20} height={20} /> Destinasi Eksklusif</b> <br />
                            Jelajahi destinasi impian Anda tanpa beban biaya yang memberatkan.
                        </li>
                        <li className='mt-2'>
                            <b><Image src={'/img/icons/checklist.svg'} width={20} height={20} /> Keamanan dan Kenyamanan</b> <br />
                            Tabungan Anda aman bersama kami, sehingga Anda bisa merencanakan liburan dengan tenang.
                        </li>
                        <li className='mt-2'>
                            <b><Image src={'/img/icons/checklist.svg'} width={20} height={20} /> Bunga Menarik</b> <br />
                            Dapatkan bunga tabungan yang kompetitif untuk mempercepat tercapainya impian Anda.
                        </li>
                    </ul>
                </p>
                <Link
                    href="/booking-page"
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