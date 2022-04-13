import React from 'react'

const SidebarColorsTemplate = ({ children }) => {
    const [showGreenBox,setShowGreenBox] = React.useState(true);
    function changeFunc(){
        console.log('changeFunc() showGreenBox=',showGreenBox)
        setShowGreenBox(false)
    }

return (
    <>
    <div>content</div>
    <button onClick={changeFunc}>Change val</button>
    {children}
    </>
  )
}
   
export default SidebarColorsTemplate