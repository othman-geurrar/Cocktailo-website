import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';

const Hero = () => {
  const rightOrangeRef = useRef(null);
  const viewCocktailsRef = useRef(null);

  useGSAP(() => {
    const heroSplit = new SplitText('.title', { types: 'chars , word' });
    const paragrapheSplit = new SplitText('.subtitle', { types: 'lines' });

    heroSplit.chars.forEach((char) => {char.classList.add('text-gradient')});
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.05,
    });
    gsap.from(paragrapheSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.05,
      delay: 0.7,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })  
    .to('.right-orange', { y: 200 }, 0)
    .to('.left-leaf', { y: -200 }, 0);
 
  }, []);

  useGSAP(() => {
    gsap.to(rightOrangeRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: 'none',
    });
  });

  useGSAP(() => {
    gsap.from(viewCocktailsRef.current, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: 'expo.out',
      delay: 1.4,
    });
  });

  return (
    <>
        <section id="hero" className="noisy">
          <h1 className="title">MOJITO</h1>

          <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf"/>
          <img ref={rightOrangeRef} src="/images/orange.png" alt="right-orange" className="absolute right-orange top-1/2 right-2 h-40"/>
          <div className='body'>
            <div className="content"> 
              <div className="space-y-5 hidden md:block">
                <p className="subtitle pl-38">Cool. Crisp. Classic</p>
                <p className='subtitle pl-38'>Savor the Spirit<br /> of Summer </p>

              </div>
              <div className='view-cocktails'>
                <p className='subtitle'>
                  Each cocktail on our menu artfully blends  premium ingredients 
                  and  inventive flair crafted to awaken and enchant your senses.
                </p>
                <a ref={viewCocktailsRef} href="#cocktails">View Cocktails</a>

              </div>
              </div>
          </div>
        </section>
        
    </>
  )
}

export default Hero