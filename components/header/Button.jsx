import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function ButtonHeader({session}) {
    const router = useRouter();
    const [currentUrl, setCurrentUrl] = useState('/');

    useEffect(()=> {
        setCurrentUrl(window.location.pathname)
    }, []);
  return (
    <div>
        {session ? (
          // Jika pengguna sudah login, tampilkan avatar dan dropdown
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <img
                src={session.user.image || "/default-avatar.png"}
                alt=
                className="rounded-circle"
                width="30"
                height="30"
              /> */}
              <i className="bi bi-person-circle me-1"></i> {session.user.name}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {/* <li><a className="dropdown-item" href="/dashboard/db-booking">Dashboard</a></li> */}
              <li><a className="dropdown-item" href="#" onClick={() => signOut()}>Logout</a></li>
            </ul>
          </div>
        ) : (
          // Jika pengguna belum login, tampilkan tombol Masuk/Daftar
          <Link
            href={`/signup?callbackUrl=${encodeURIComponent(currentUrl)}`}
            className="button px-30 fw-400 text-14 border-primary -outline-primary h-50 text-primary ml-20"
          >
            Masuk / Daftar
          </Link>
        )}
    </div>
  )
}

export default ButtonHeader