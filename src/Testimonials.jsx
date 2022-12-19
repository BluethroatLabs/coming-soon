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
        "You will come across only a few as diligent and RIDICULOUSLY EFFICIENT engineers as Rahul. I had the pleasure of working alongside Rahul as a blockchain engineer at Sublime. During the past year, I have watched him constantly strive to optimize and revamp our codebase, be it smart contracts or testing frameworks. His attention to detail has helped ELIMINATE MULTIPLE VULNERABILITIES from our protocol. He has always been the go-to person for exploring new ideas and his Make-It-Happen attitude is a bonus. He is usually the first person to help out or collaborate with other team members. He will be a great value addition to any team he joins."
    }
  }

  const [current, setCurrent] = useState(quotes[0])

  const [active, setActive] = useState(0)

  const handleSetClick = event => {
    setCurrent(quotes[event.target.getAttribute("data-quote")])
    setActive(event.target.getAttribute("data-quote"))
  }

  return (
    <div
      className="quote" >
      <p><i>{current.quote}</i></p>
      <p>{current.client}</p>
      <div
        className="cards">
        {Object.keys(quotes).map(index => (
          <span
            onClick={event => handleSetClick(event)}
            data-quote={index}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonial;
