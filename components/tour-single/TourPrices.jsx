import React from 'react'

function TourPrices({prices}) {
  return (
    <div>
        <div className="table-responsive">
            <table className="table table-hover table-striped">
                <tr className='fw-bold bg-dark-3 text-white '>
                    <th className='fw-bold'>#</th>
                    <th className='fw-bold'>Nama Paket</th>
                    <th className='fw-bold'>Harga</th>
                    <th className='fw-bold'>Order</th>
                </tr>
                {prices.map((item, index) =>
                    <tr className='border-bottom' key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                        <s>Rp. {parseInt(item.start_price).toLocaleString('id-ID')},-</s> <br />
                        <b>Rp. {parseInt(item.start_price).toLocaleString('id-ID')},-</b>
                        </td>
                        <td>
                            <a
                                href="#!"
                                className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-10"
                            >
                                Pilih Paket <div className="icon-arrow-top-right ml-15" />
                            </a>
                        </td>
                    </tr>
                )}
            </table>
        </div>
    </div>
  )
}

export default TourPrices