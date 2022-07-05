import { useState } from 'react'

const Test = () => {
    const [fact, setFact] = useState('')
    const searchCatFacts = async (fact) => {
        const response = await fetch(`https://catfact.ninja/fact?max_length=${fact}`)
        const data = await response.json()
        console.log(data.fact)
        setFact(data.fact)
    }

  return (
    <div>
        {/* {searchCatFacts()} */}
    <button onClick={() => searchCatFacts()}>Click for Cat Facts</button>
    <h1>
        {fact}
    </h1>
    </div>
  )
}

export default Test