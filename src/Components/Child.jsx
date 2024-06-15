import React from "react"
const Child =(props)=>{
    return(
        <div className="text-center border w-25 p-4" style={{backgroundColor:"lightcyan"}}>
            <h2 style={{textAlign:"center"}}>{props.count}</h2>
            <button onClick={props.pluse} className="rounded btn btn-light m-2 border">plus</button>
            <button onClick={props.minus} disabled={props.count<=0?true:false} style={props.count<=0?{backgroundColor:"red", color:"bl"}:{color:"black"}} className="rounded btn btn-light m-2 border">minus</button>
            <button onClick={props.reset} className="rounded btn btn-light m-2 border">reset</button>

        </div>
    )
}

export default Child