import React from 'react'

const Test = () => {
    const searchCatFacts = async (fact) => {
        const response = await fetch(`https://catfact.ninja/fact?max_length=${fact}`)
        const data = await response.json()
        console.log(data)
    }
    searchCatFacts()

  return (
    <div>Test</div>
  )
}

export default Test