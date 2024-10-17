import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <div className='loader'>
            <Image src="/assets/icons/loader.svg" alt="loader" width={25} height={25} />
            Loading...
        </div>
    )
}

export default Loader
