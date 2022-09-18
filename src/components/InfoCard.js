import React from 'react'

const isIncome = Math.round(Math.random());
const InfoCard = () => {
  return (
    <div style={{textAlign: 'center', padding: '0 10%' }}>
      Try Saying: <br /> 
      Add {isIncome ? 'Income ' : 'Expense '} 
      for  &#8377;  {isIncome ? '100 ' :  '50 '} 
      in category {isIncome ? 'Business ' :'Food '} 
      for {isIncome ? 'Monday' :'Friday'} 
    </div>
  )
}

export default InfoCard
