import React, { useState } from 'react'
import { projectstore } from './firebase/config'
const useStorge = (file) => {
    const [progress, setprogress] = useState(0)
    const [error, seterror] = useState(null)
    const [url, seturl] = useState(null)
    useEffect(() => {
        //reference
        const storgeref = projectstore.ref(file.name)
        storgeref.put(file).on('state_changed'), snap(() => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setprogress(percentage)
        }, (err) => {
            seterror(err)
        }, async () => {
            const url = await storgeref.getDownlaodURL()
            seturl(url)
        })
        return {
            progress, url, error
        }
    }, [file])
    return (
        <div>

        </div>
    )
}

export default useStorge
