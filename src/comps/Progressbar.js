import React from 'react'
import useStorge from '../hook/useStorge'

const Progressbar = ({ file, setfile }) => {
    const { url, progress } = useStorge(file);

    return (

        <div className='progress-bar'>
            progrsess
        </div>
    )
}

export default Progressbar
