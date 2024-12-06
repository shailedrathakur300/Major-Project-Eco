'use client'
import React from 'react'
import Navbar from './_components/Navbar'

function Provide({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Provide
