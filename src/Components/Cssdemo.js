import React from 'react'

const Cssdemo = ({ children }) => {

    function addremovecss() {
        console.log('addremovecss()')
        setShowGreenBox(!showGreenBox)
    }
    
    const [showGreenBox, setShowGreenBox] = React.useState(true);

    return (
        <>
            <div className={`bigPinkText ${showGreenBox ? 'greenBox' : ''}`}>Cssdemo top</div>

            <button onClick={addremovecss} >Add/Remove CSS class</button>

            {children}
            <div>Cssdemo bottom</div>
        </>
    )
}

export default Cssdemo