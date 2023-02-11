import React, { useState } from "react"
import { useEffect } from "react";
import './Testimonial.css';

const Testimonial = () => {
  const quotes = {
    0: {
      client: "Zodomo.eth 🦇🔊, Canto Name Service",
      quote:
        "I went and sought out three general code reviews. Rahul's was the highest quality I received! 25+ action items and not a single one was fluff or padding.",
    },
    1: {
      client: `metadev.eth ᵍᵐ (🫡,🇮🇳) , Twitter: @poyimone`,
      quote: 
      `Detailed report. It's really great to have a second set of eyes look through the code and to make sure all the bugs are patched. No one could have done it better than Rahul. Excellent writeup and a detailed review. It was precise and I learned a lot.`
    },
    2: {
        client: `Maddiaa, Engineering @AztecNetwork`,
        quote: 
        `Also excellent write up yet again. Dare I say some of the best educational content atm.`
    },
    3: {
        client: `Kalpita, Engineering @Marlin`,
        quote: 
        "You will come across only a few RIDICULOUSLY EFFICIENT engineers as Rahul. His attention to detail has helped ELIMINATE MULTIPLE VULNERABILITIES from our protocol."
    },
    4: {
      client: `Dev Team, Brahma Finance`,
      quote:
      `One of the best audit experience we have been a part of. Rahul (and Parth) were great to work with. Their attention to details on contract design and adversarial thinking helped us along the audit process. They have delivered a well structured and comprehensive audit report.`
    }
  }

  const [state, setState] = React.useState({ num: 0 });
  const counter = React.useRef(0);
  
  React.useEffect(() => {
    if (counter.current < 10) {
      counter.current += 1;
      const timer = setTimeout(() => setState({ num: state.num + 1 }), 7000);

      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className="quote" >
      <p><i>{quotes[state.num % 5].quote}</i></p>
      <p>{quotes[state.num % 5].client}</p>
    </div>
  )
}

export default Testimonial;

