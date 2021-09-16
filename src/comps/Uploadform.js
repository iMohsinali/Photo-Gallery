import React, { useState } from 'react'
import Progressbar from './Progressbar'

const Uploadform = () => {
    const [file, setfile] = useState(null)
    const [error, seterror] = useState(null)
    const types = ['image/png', 'image/jpg']
    const changehandler = (e) => {
        let selected = e.target.files[0]
        if (selected && types.includes(selected.type)) {
            setfile(selected)
            seterror('')
        }
        else {
            setfile(null)
            seterror('please select an image type of png/jpg')
        }
    }
    return (
        <form>
            <input type='file' onChange={changehandler} />
            <div className='output'>
                {
                    error && <div className='error'>{error} </div>

                }
                {
                    file && <div className='files'>{file.name} </div>

                }
                {
                    file && <Progressbar file={file} setfile={setfile} />

                }
            </div>
        </form>
    )
}

export default Uploadform