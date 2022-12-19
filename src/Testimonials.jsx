import React, { useState } from "react"
import './Testimonial.css';

const Testimonial = () => {
  const quotes = {
    0: {
      client: "Zodomo.eth 🦇🔊, Canto Name Service",
      quote:
        "I went and sought out three general code reviews. Rahul's was the highest quality I received! 25+ action items and not a single one was fluff or padding.",
    },
    1: {
        client: `Maddiaa0, Engineering @AztecNetwork`,
        quote: 
        `Also excellent write up yet again. Dare I say some of the best educational content atm.`
    },
    2: {
        client: `Kalpita, Engineering @Marlin`,
        quote: 
        "You will come across only a few as diligent and RIDICULOUSLY EFFICIENT engineers as Rahul. His attention to detail has helped ELIMINATE MULTIPLE VULNERABILITIES from our protocol. His Make-It-Happen attitude is a bonus."
    }
  }

  const [current, setCurrent] = useState(quotes[0])

  const [active, setActive] = useState(0)

  const handleSetClick = event => {
    setCurrent(quotes[event.target.getAttribute("data-quote")])
    setActive(event.target.getAttribute("data-quote"))
  }

  return (
    <div className="quote" >
      <p><i>{current.quote}</i></p>
      <p>{current.client}</p>
      <div className="cards">
        {Object.keys(quotes).map(index => (
          <button onClick={event => handleSetClick(event)} data-quote={index}> {++index } </button>
        ))}
      </div>
    </div>
  )
}

export default Testimonial;
