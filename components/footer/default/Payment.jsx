import Image from 'next/image'
import React from 'react'

function Payment() {
  return (
    <div>
        <Image className='mt-3 mx-2' src={'/img/pembayaran/bca.png'} width={80} height={30} />
        <Image className='mt-3 mx-2' src={'/img/pembayaran/bni.png'} width={80} height={30} />
        <Image className='mt-3 mx-2' src={'/img/pembayaran/bri.png'} width={80} height={30} />
        <Image className='mt-3 mx-2' src={'/img/pembayaran/mandiri.png'} width={80} height={30} />
        <Image className='mt-3 mx-2' src={'/img/pembayaran/permata.png'} width={80} height={30} />
        <Image className='mt-3 mx-2' src={'/img/pembayaran/gopay.png'} width={80} height={30} />
        <Image className='mt-3 mx-2' src={'/img/pembayaran/shopeepay.png'} width={80} height={30} />
        <Image className='mt-3 mx-2' src={'/img/pembayaran/qris.png'} width={80} height={30} />
        <Image className='mt-3 mx-2' src={'/img/pembayaran/mastercard.webp'} width={80} height={30} />
        <Image className='mt-3 mx-2' src={'/img/pembayaran/visa.webp'} width={80} height={30} />
        <Image className='mt-3 mx-2' src={'/img/pembayaran/alfamart.png'} width={80} height={30} />
        <Image className='mt-3 mx-2' src={'/img/pembayaran/alfamidi.png'} width={80} height={30} />
    </div>
  )
}

export default Payment