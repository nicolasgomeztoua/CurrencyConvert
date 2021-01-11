import React, {useState} from 'react'
import './Usdtocurrency.css'

const Usdtocurrency = ({rates,currencies}) => { 
    
 
    

    const [baseamount,setAmount] = useState(1);
    const [placeHolder, setValue] = useState('');
 
    
    const onClick = () => {
        setAmount(placeHolder)
    }
    const enterKey = (event) => {
        if(event.keyCode === 13){
            setAmount(placeHolder)

        }
    }


    return (
      
        <div className='tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-3'>
    
            <h1 className='ma0'>{baseamount} usd equals to:</h1>
            <h2>
            {currencies }  <br></br>
            {rates*baseamount}
            </h2>


            <input type='number' placeholder= 'enter USD amount'
             onKeyDown={enterKey} 
             onChange=  {(event) => setValue(event.target.value)}/>


            <button 
            className='f6 link dim dib white bg-mid-gray' 
             onClick={onClick}
             
                    
            > Convert </button>
        </div>
    )
}

export default Usdtocurrency


