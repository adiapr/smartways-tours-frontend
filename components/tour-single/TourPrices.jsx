import Link from 'next/link'
import React from 'react'

function TourPrices({prices}) {
  return (
    <div>
        <h3 className="text-22 fw-bold mb-20">Penawaran menarik bulan ini!</h3>
        <div className="table-responsive">
            <table className="table table-hover table-striped">
                <tr className='fw-bold bg-dark-3 text-white '>
                    <th className='fw-bold px-1 py-3'>#</th>
                    <th className='fw-bold px-1 py-3'>Jenis Tur</th>
                    <th className='fw-bold px-1 py-3'>Harga</th>
                    <th className='fw-bold px-1 py-3'>Pesan sekarang</th>
                </tr>
                {prices.map((item, index) =>
                    <tr className='border-bottom' key={item.id}>
                        <td className='px-1 py-1'>{index + 1}</td>
                        <td className='px-1 py-1'>{item.name}</td>
                        <td className='px-1 py-1'>
                        <s>Rp. {parseInt(item.start_price).toLocaleString('id-ID')},-</s> <br />
                        <b>Rp. {parseInt(item.price).toLocaleString('id-ID')},-</b>
                        </td>
                        <td className='px-1 py-1'>
                            <Link
                                href={`/cart/${item.uuid}`}
                                className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-10"
                            >
                                Pilih <div className="icon-arrow-top-right ml-15" />
                            </Link>
                        </td>
                    </tr>
                )}
            </table>
        </div>
    </div>
  )
}

export default TourPrices