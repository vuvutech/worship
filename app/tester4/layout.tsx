import React from 'react'

const layouts = ({children}: {children: React.ReactNode}) => {
  return (
    <div className=' pt-20  max-w-(--breakpoint-full) mx-auto '>
        {children}
    </div>
  )
}

export default layouts