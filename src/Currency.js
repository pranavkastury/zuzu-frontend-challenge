import React, { useState, useEffect } from 'react'
import {Paper, FormControl, Select, Button} from '@material-ui/core';
import './App.css'
import Axios from 'axios';
const Currency = () => {
  const [textOne, settextOne] = useState()
  const [textTwo, settextTwo] = useState()
  const [country, setCountry] = useState([])
  const [countryTwo, setCountryTwo] = useState([])
  const [value, setValue] = useState(1)
  const [valueTwo, setValueTwo] = useState(1)

  useEffect(() => {
    getData();
  },[])
  async function getData() {
    const result = await Axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_API_KEY}`)
    // console.log(result.data)
    setCountry(result.data.rates);
    setCountryTwo(result.data.rates);
  }
  function convert (e) {
    e.preventDefault()
    let num=(valueTwo/value)* textOne
    settextTwo(num)
  }

  return (
    <div className="currency">
      <Paper className="paper">
        <h3>Currency Converter</h3>
        <form onSubmit={convert} className="form">
        <div className="form-group">
          <label htmlFor="">
          <input type="number" variant='outlined' value={textOne || ""} onChange={(e)=> settextOne(e.target.value)} autoComplete='off' placeholder="From..."/>
          </label>
          <FormControl className="dropdown" variant='outlined' onChange={(e)=>setValue(e.target.value)}>
          <Select native>
            {Object.keys(country).map((value, index)=>(
              <option key={index} value={country[value]}>{value}</option>
            ))}
          </Select>
          </FormControl>
        </div>
        <div>
          <label htmlFor="">
          <input type="number" variant='outlined' value={textTwo || ""} onChange={(e)=> settextTwo(e.target.value)} autoComplete='off' placeholder="To..." disabled />
          </label>
          <FormControl className="dropdown" variant='outlined' onChange={(e)=>setValueTwo(e.target.value)}>
          <Select native>
            {Object.keys(countryTwo).map((value, index)=>(
              <option key={index} value={country[value]}>{value}</option>
            ))}
          </Select>
          </FormControl>
        </div>
        <Button type="submit"  className="button" variant="contained">Convert</Button>
        </form>
      </Paper>
    </div>
  )
}
export default Currency;
