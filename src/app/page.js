import styles from "./globals.css";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Realisation from "./components/Realisation";
// import ParticlesBackground from "./components/ParticlesBackground";
// import Logos from "./components/Logos";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import Experience from "./components/Experience";


export default function Home() {



  return (
    <main className={styles.main}>
        {/* <ParticlesBackground applyOptions={true}/> */}
        {/* <Presentation /> */}
      <Skills />
      {/* <Education /> */}
      {/* <Realisation /> */}
        {/* <Contact /> */}
        {/* <Experience/> */}
        <Footer />
    </main>
  );
}
