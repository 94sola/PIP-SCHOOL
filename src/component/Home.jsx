import Hero from './hero';
import Pip from './pip';
import Pip1 from './PIP1';








export default function Home() {
  return (
    <div className="home-page">
      
      <Hero />

   
      <div className="content-sections">
        <Pip />
        <Pip1 />
      </div>
    </div>
  );
}

