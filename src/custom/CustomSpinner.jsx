import React from 'react'
import { Bars } from 'react-loader-spinner'

export default function CustomSpinner() {
    return (
        <div className='flex justify-center'>
            <Bars
            height="50"
            width="50"
            color="#b98755"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
        </div>
    )
}
