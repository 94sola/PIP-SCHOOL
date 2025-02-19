import Hero from './hero';
import Pip from './pip';
import Pip1 from './PIP1';
import Pip2 from './team';
import Pip3 from './pip3';
import Pip4 from './pip2';
import Pip5 from './pip4';




export default function Home() {
  return (
    <div className="font-serif">
      
      <Hero />

   
      <div className="content-sections">
        <Pip />
        <Pip3 />
        <Pip1 />
        <Pip2 />
        <Pip4 />
        <Pip5 />
      </div>
    </div>
  );
}

