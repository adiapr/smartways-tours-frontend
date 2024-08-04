import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div>
        <p>
        <b className='text-black'>PT. Bagus Bahagia Bersama</b> <br />
        Jalan Nakula 51 Tumpang, <br className='d-md-none d-block' /> Malang, Indonesia 65156
        </p>
        <ul>
            <li>
                <Link href={'https://api.Whatsapp.com/send/?phone=6282155144449&text&type=phone_number&app_absent=0'}>
                    <i className="bi bi-telephone-fill"></i> +62 341 788733 (Office)
                </Link>
            </li>
            <li>
                <Link href={'https://api.Whatsapp.com/send/?phone=6282155144449&text&type=phone_number&app_absent=0'}>
                    <i className="bi bi-Whatsapp"></i> +62 821 5514 4449 (Smartway Indonesia)
                </Link>
            </li>
            <li>
                <Link href={'https://api.Whatsapp.com/send/?phone=6282155144449&text&type=phone_number&app_absent=0'}>
                    <i className="bi bi-Whatsapp"></i> +62 821 1001 3311  (Smartway Internasional)
                </Link>
            </li>
            
            <li>
                <Link href={'mailto:info@smartway.tours'}>
                    <i className="bi bi-mailbox2"></i> info@smartway.tours
                </Link>
            </li>
        </ul>
        <div className="w-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.925247199751!2d112.75924380000001!3d-8.006646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6259ce5e73b73%3A0x8266895c3ab24e99!2sSmartway%20Indonesia%20Tours%20%7C%20Open%20trip%20Bromo%2C%20Kawah%20Ijen%2C%20Bali%2C%20Lombok%2C%20Belitung!5e0!3m2!1sid!2sid!4v1719842491252!5m2!1sid!2sid" style={{ border:0, width:"100%", borderRadius: '10px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Contact