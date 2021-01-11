import React, {useState, useEffect} from 'react'
import Usdtocurrency from './Usdtocurrency'
import './Searchbar.css'

const ExchangeList = () => {
 const [dataStored, SetDataStored]= useState({ rates : []}); 
 const [search, setSearch] = useState('');


 const loadData = async () => {
     await fetch('https://currencyapi.net/api/v1/rates?key=f50olPV26Mg9Gv9uIzxI3Y8ZecJdUMAOQJJ7&base=USD')
        .then((resp) => resp.json())
        .then((data) => SetDataStored(data))    

        
    } 
    
    useEffect(() => {
    loadData()

}, [])


//converting object from api into array
const rates = Object.entries(dataStored.rates)


//filtering the api for search bar functionality
const filteredrates = rates.filter((currency) => {

return currency[0].toLowerCase().includes(search.toLowerCase())

})
 
    return (

            <div>
                 <div className='tc ma3'>
                     <img alt='usa' src='https://www.states101.com/img/usflag.svg' ></img>
                       <input type='search' placeholder='Search for currencies' className='w5 h2'
                         onChange = {(event) => setSearch(event.target.value)}
                          />
        
                    </div>  

         { filteredrates.map((currency,index) =>{ 
                return(
                      <Usdtocurrency
                          key = {index}
                             currencies={currency[0]} 
                                 rates = {currency[1]}

 /> )})} </div>  
              
    )
    
}

export default ExchangeList
