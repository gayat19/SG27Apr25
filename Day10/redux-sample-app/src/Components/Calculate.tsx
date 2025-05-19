import { useMemo, useState } from "react";

export default function Calculate(){
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    // const [result,setResult] = useState(0);
    // const calc=()=>{
    //     setResult(num1 *1+num2 *1)
    //     console.log("function triggerd")
    // }'
    const result = useMemo(()=>{
         console.log("function triggerd")
        return num1 *1+num2 *1
    },[num1])
    return (<div>
        {result}
        <input type="number" value={num1} onChange={(event)=>{setNum1(event.target.value as any);}}/>
        <input type="number" value={num2} onChange={(event)=>{setNum2(event.target.value as any);}}/>
        {/* <button onClick={calc}>Calculate</button> */}
    </div>);

}