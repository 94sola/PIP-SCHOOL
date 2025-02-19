

import About from './about1';
import About1 from './about2';
import About2 from './about3';
import About3 from './about4';
import Wrapper from "./Wrapper";




export default function Home() {
  return (
    <Wrapper>
      <div className=" bg-white ">
      
        <About />

    
        <div className="content-sections">
          <About1 />
          <About2 />
          <About3/>
        
        </div>
      </div>
    </Wrapper>
  );
}