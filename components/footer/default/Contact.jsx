import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div>
        <p>
        Jl. Nakula No.51, Tumpang I, Tumpang, Kec. Tumpang, Kabupaten Malang, Jawa Timur 65156
        </p>
        <ul>
            <li>
                <Link href={'https://api.whatsapp.com/send/?phone=6282155144449&text&type=phone_number&app_absent=0'}>
                    <i className="bi bi-telephone-fill"></i> +62 82155144449
                </Link>
            </li>
            <li>
                <Link href={'mailto:info@smartway.tours'}>
                    <i className="bi bi-mailbox2"></i> info@smartway.tours
                </Link>
            </li>
            <li>
                <Link href={'https://maps.app.goo.gl/ZHBVTUD1EySTdpTp6'} target='_blank'>
                    <i className="bi bi-pin-map-fill"></i> Lihat Lokasi
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Contact