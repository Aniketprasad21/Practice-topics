import React from 'react'
const InlineCss= ()=>{
    return(
        <div>
            <h1 style={{backgroundColor:"black",color:"white" }}>Inline Css Example</h1>
            <nav style={{background:"red",
                        height:"70px",
                        width:"100%",
                        fontFamily:"sans-serif",
                        display:"flex",
                        justifyContent:"space-between",

            }}>
                <aside>logo</aside>
                <ul style={{display:"flex",
                    justifyContent:"center",
                    gap:"20px"
                }}>
                    <l1>home</l1>
                    <l1>about</l1>
                    <l1>contacts</l1>
                </ul>
            </nav>
        </div>
        
    )
}
export default InlineCss;