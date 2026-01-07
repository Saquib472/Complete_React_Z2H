import { useMemo, useState } from "react"
import { findNthPrime } from "../utils/nthPrime"

const Demo = ()=>{
    const [numb, setNumb] = useState(1)
    const [theme, setTheme] = useState(false)
    const prime = useMemo(()=>findNthPrime(numb), [numb])
   
    return <div className={`col-span-10 ${theme ? 'bg-black text-white' : 'bg-white'}`}>
        <button onClick={()=>{setTheme(!theme)}} className="border border-gray-100 bg-green-300 rounded-lg p-2">Theme Change</button>
        <h1 className="font-bold mb-2">Nth Prime Calculation</h1>
        <div>
            <input value={numb} onChange={e=> e.target.value == 0 ? setNumb(1) : setNumb(e.target.value)} className="border border-gray-300 p-2 rounded-lg text-black" type="number" placeholder="Enter Number" />
        </div>
        <p className="font-bold">{prime}</p>
    </div>
}

export default Demo