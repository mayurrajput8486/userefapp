import React, { useRef } from 'react'

const Updatestyle = () => {
    const divRef = useRef(null)

    const h2Ref = useRef(null)

    const divhandler = () =>{
        divRef.current.style.cssText = 'background-color : red; width : 250px; height : 150px; margin : auto; transition : 3s '
        //document.getElementById('div').style.cssText = ''
    }

    const h2Handler = () =>{
        h2Ref.current.innerHTML = 'Welcome to ReactJS'
    }
  return (
    <div>
        <h2>Learn useRef () Hook </h2>
        <div ref={divRef}
            style={{
                width : '150px', 
                height : '150px', 
                backgroundColor : 'orange', 
                margin : 'auto'
                }}>
        </div>
        <button onClick={divhandler}>Update CSS</button>

        <h2 ref={h2Ref}>Hello.....</h2>
        <button onClick={h2Handler}>Change Content</button>
    </div>
  )
}

export default Updatestyle