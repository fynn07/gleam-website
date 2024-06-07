import React, { useEffect, useRef } from 'react';

const Gigs = () => {
  const gigsData = [
    { src: "/assets/gleam-gig-additional-1.jpeg", alt: "Grip EP Launch", text: "Grip Consequences: EP Release" },
    { src: "/assets/gleam-gig-1.jpeg", alt: "haersthetic by jade: year 2", text: "Haersthetic By Jade: Year 2" },
    { src: "/assets/gleam-gig-2.jpeg", alt: "all under molave", text: "All Under Molave" },
    { src: "/assets/gleam-gig-3.jpeg", alt: "showgaze night", text: "Showgaze Night" },
    { src: "/assets/gleam-gig-4.jpeg", alt: "hostile youth", text: "Hostile Youth" },
    { src: "/assets/gleam-gig-5.jpeg", alt: "latag vol 3", text: "Latag Vol 3" },
    { src: "/assets/gleam-gig-6.jpeg", alt: "gazin into the abyss", text: "Gazin Into the Abyss" },
    { src: "/assets/gleam-gig-7.jpeg", alt: "latag vol 2", text: "Latag Vol 2" },
    { src: "/assets/gleam-gig-8.jpeg", alt: "the jurro project", text: "The Jurro Project" },
    { src: "/assets/gleam-gig-9.jpeg", alt: "Latag", text: "Latag" },
    { src: "/assets/gleam-gig-10.jpeg", alt: "Born to Rock", text: "Born to Rock" },
    { src: "/assets/gleam-gig-11.jpeg", alt: "fuzzed out session", text: "Fuzzed-Out Session" },
    { src: "/assets/gleam-gig-12.jpeg", alt: "underground screams", text: "Underground Screams" },
  ];

  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          entry.target.classList.remove('animate-fadeOut');
        } else {
          entry.target.classList.add('animate-fadeOut');
          entry.target.classList.remove('animate-fadeIn');
        }
      });
    }, {
      threshold: 0.1,
    });

    itemsRef.current.forEach(item => observer.observe(item));

    return () => {
      itemsRef.current.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen my-40 z-50">
      <div className="flex flex-col gap-11">
        <h2 className="text-center text-white font-oswald text-4xl animate-fadeOut" ref={el => itemsRef.current[0] = el}>Past Gigs</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {gigsData.map((gig, index) => (
            <div key={index} className="flex flex-col w-1/4 gig-item animate-fadeOut" ref={el => itemsRef.current[index + 1] = el}>
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                <img className="object-cover w-full h-full" src={gig.src} alt={gig.alt} />
              </div>
              <p className="text-center font-pragati text-white drop-shadow-md text-xl">{gig.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
