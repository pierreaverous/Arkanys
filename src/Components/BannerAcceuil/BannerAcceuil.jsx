import React, { useEffect } from "react"
import './_BannerAcceuilStyles.scss'
import banner from '../../ASSETS/Images/Banner/BannerAceuilArcanys.png'
const BannerAcceuil = () => {
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll(".title, .textBanner, .imageBanner");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = "running";
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elementsToAnimate.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    return(
        <main>
          <div className='containerAcceuil'>
              <div className='containerBanner'>
                  <div className='title-Banner'>
                      <h1 className='title'>Bienvenue Dans Arkanys</h1>
                      <p className='textBanner'>Bienvenue dans l'univers fascinant de notre jeu mobile blockchain, où vous pourrez collectionner des héros, des monstres et des équipements, participer à des modes de jeu captivants et profiter d'un marché dynamique. Plongez dans une aventure épique et découvrez comment jouer gratuitement, gagner des jetons et améliorer vos personnages pour dominer vos adversaires.</p>
                  </div>
                    <img className='imageBanner' src={banner} alt="image de la bannierre"/>
              </div>

          </div>

        </main>
    )
}


export default BannerAcceuil