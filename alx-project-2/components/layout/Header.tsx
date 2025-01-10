import React from 'react'
// import home from '@/pages/home'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex gap-6 bg-slate-600 p-3 rounded-md text-2xl">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
    </div>
  )
}

export default Header