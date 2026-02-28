import React from 'react'

const layouts = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 '>
        {children}
    </div>
  )
}

export default layouts