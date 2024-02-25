import Nav from "./components/Nav";
// import Lavel from "./components/About";
import Lavel2 from "./components/Skills";
import About from './components/About'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";

function App() {
  return (
    <div className="" >

     <Nav />
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection>
            <About />
          </FullpageSection>
          <FullpageSection>
            <Lavel2 />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>


    </div>
  );
}


export default App;
