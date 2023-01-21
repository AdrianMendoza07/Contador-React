import React from "react";
import { useState } from "react";
import img1 from './img1.png'

export const Header = () =>{
    const [count, setCount] = useState(0);
    const [coun, setCoun] = useState(true);

    return(
        <div className={coun ? 'body' : 'body1'}>
            <p>You have clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} className='Buttons'> 
                Increase
            </button>
            <button onClick={() => setCount(count * 0)} className='Buttons'> 
                Reset
            </button>
            <button onClick={() => setCount(count - 1)} className='Buttons'> 
                Decrease
            </button>
            <button onClick={() => setCoun(!coun)} className='Buttons'>
                Modo {coun ? 'body' : 'body1'}    
            </button>

            
            <img className="image" src={img1}></img>
        </div>
    )

}