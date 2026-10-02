"use client"
export default function Button(){
    return(
        <button
        onClick={()=>{
            alert("BUTTON CLICKED")
        }}>
            Click Me!!
        </button>
    )
}