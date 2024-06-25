import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20 bg-[#C70404] text-white'>
        <p className='py-10 px-3 font-semibold'>Built with Next.js by <Link href="https://x.com/zgbocode" className='underline'>Emmanuel Ezeigbo</Link>.</p>
    </div>
  )
}

export default Footer