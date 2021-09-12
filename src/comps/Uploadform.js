import React from 'react'
const changehandler = (e) => {
    console.log("Chnage has been happen")
}
const Uploadform = () => {
    return (
        <form>
            <input type='file' onChange={changehandler} />
        </form>
    )
}

export default Uploadform