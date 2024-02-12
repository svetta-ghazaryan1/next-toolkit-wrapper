import Link from 'next/link'
import React from 'react'

export default function Layout({children}:any) {
  return (
    <div>
        
        <nav>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/users'}>Users</Link></li>
            </ul>
        </nav>
        <div>
            {children}
        </div>
    </div>
  )
}
