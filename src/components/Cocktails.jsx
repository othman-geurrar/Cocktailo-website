import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { cocktailLists, mockTailLists } from "../constants"

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimelne = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            }
        })
        parallaxTimelne
        .from("#c-strawberry", {
            x:-200 , y: 400
        })
        .from("#c-right-leaf", {
            x: 100, y: 100
        })
      
    })
  return (
    <section id="cocktails" className="noisy">
        <img src="/images/strawberry.png" alt="strawberry" id="c-strawberry" />
        <img src="/images/cocktail-right-leaf.png" alt="right leaf" id="c-right-leaf" />

        <div className="list">
            <div className="popular">
                <h2> Most Popular Mocktails:</h2>

                <ul>
                    {
                        cocktailLists.map(({name, country, detail, price}) => (
                            <li key={name} >
                               <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p >{country} | {detail}</p>
                                </div> 
                                <span>- {price}</span>
                            </li>
                        ))
                    }
                </ul>

            </div>
            <div className="loved">
                <h2> Most Loved Mocktails:</h2>

                <ul>
                    {
                        mockTailLists.map(({name, country, detail, price}) => (
                            <li key={name} >
                               <div className="me-28">
                                    <h3>{name}</h3>
                                    <p >{country} | {detail}</p>
                                </div> 
                                <span>- {price}</span>
                            </li>
                        ))
                    }
                </ul>

            </div>

        </div>
         
    </section>
  )
}

export default Cocktails