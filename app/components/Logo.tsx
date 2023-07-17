import React from 'react'
import Link from 'next/link'

function Logo() {
  return (
    <div>
          <Link className="md:flex md:justify-items-center md:gap-2.5" href="/">
              <svg  className="animate-spin" width={30} height={30}>
                  <use href="/images/sprite.svg#icon-film-1"></use>
              </svg>
          <p className="font-medium text-3xl tracking-wide text-white-text-color hidden md:flex">Filmoteka</p>
        </Link>
      </div>
  )
}

export default Logo