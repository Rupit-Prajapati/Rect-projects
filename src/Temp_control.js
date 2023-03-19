import React, { useState } from 'react'
import Header from './Header'
import {  Container } from 'react-bootstrap'

export default function Temp_control() {
   const [temperatureValue, setTemperatureValue] = useState(10)
   const [temperatureColor, setTemperatureColor] = useState('cold')
   const increaseTemperature = () => {
      const newTemperature = (temperatureValue + 1)
      if (temperatureValue === 30) return;
      if (newTemperature >= 15) {
         setTemperatureColor('hot')
      }
      setTemperatureValue(newTemperature)
   }
   const decreaseTemperature = () => {
      if (temperatureValue === 0) return;
      const newTemperature = (temperatureValue - 1)
      if (newTemperature < 15) {
         setTemperatureColor('cold')
      }
      setTemperatureValue(newTemperature)
   }
   return (
      <>
         <Header />
         <Container>
            <div className='app-container'>
               <div className="temperature-display-container">
                  <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
               </div>
               <div className="button-container">
                  <button onClick={() => increaseTemperature()}>+</button>
                  <button onClick={() => decreaseTemperature()}>-</button>
               </div>
            </div>
         </Container>
      </>
   )
}
