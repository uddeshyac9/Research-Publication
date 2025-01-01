// Numbers.jsx
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import styles from "./Numbers.module.css"; // Import as CSS Module

const Numbers = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("numbers-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="numbers-section"
      className={styles.numbers}
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className={styles.numbersBox}>
        <div className={styles.Number}>
          <h1>
            {inView && <CountUp start={0} end={100} duration={7} />}
            +
          </h1>
          <span> Theses Writing </span>
        </div>

        <div className={styles.Number}>
          <h1>
            {inView && (
              <CountUp start={0} end={1000} duration={8} separator="," />
            )}
            +
          </h1>
          <span>Research Paper Writing</span>
        </div>

        <div className={styles.Number}>
          <h1>
            {inView && (
              <CountUp start={0} end={800} duration={9} separator="," />
            )}
            +
          </h1>
          <span>Book Writing</span>
        </div>
        <div className={styles.Number}>
          <h1>
            {inView && (
              <CountUp start={0} end={500} duration={9.5} separator="," />
            )}
            +
          </h1>
          <span>Synopses Writing</span>
        </div>
        <div className={styles.Number}>
          <h1>
            {inView && (
              <CountUp start={0} end={2000} duration={10} separator="," />
            )}
            +
          </h1>
          <span>Plagiarism</span>
        </div>
        <div className={styles.Number}>
          <h1>
            {inView && (
              <CountUp start={0} end={1000} duration={10.5} separator="," />
            )}
            +
          </h1>
          <span>Patent</span>
        </div>
        <div className={styles.Number}>
          <h1>
            {inView && (
              <CountUp start={0} end={1000} duration={11} separator="," />
            )}
            +
          </h1>
          <span>PPT/Disertation </span>
        </div>
     
      </div>
      
    </section>
  );
};

export default Numbers;
