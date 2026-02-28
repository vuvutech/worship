import React from 'react'

const layouts = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='p-2'>
        {children}
    </div>
  )
}

export default layouts