import Link from 'next/link'
import React from 'react'

function TourPrices({prices}) {
  return (
    <div>
        <h3 className="text-22 fw-bold mb-20">Pilihan Paket Harga</h3>
        {/* <form action="" method="post">
            <div className="row">
                <div className="mt-2 col-md-10">
                    <select name="" id="" className="form-select" required>
                        <option value="">- Pilih Paket -</option>
                        {prices.map((item) => (
                            <option value={item.id} key={item.id} className='d-flex justify-content-between align-items-center'>
                                <span>{item.name}</span>
                                <s>{item.price}</s>
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mt-2 col-md-2">
                    <button type="sumbit" value="" className="btn btn-primary float-end w-100" >
                        Pilih paket
                    </button>
                </div>
            </div>
        </form> */}
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
                        <b>Rp. {parseInt(item.price).toLocaleString('id-ID')},-</b>
                        </td>
                        <td>
                            <Link
                                href={`/cart/${item.uuid}`}
                                className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-10"
                            >
                                Pilih Paket <div className="icon-arrow-top-right ml-15" />
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