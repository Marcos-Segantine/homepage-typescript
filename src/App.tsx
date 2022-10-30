import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { Blog } from "./components/blog";
import { ExternalLink } from './components/ExternalLink'

function App() {
  return (
    <div className="App">
      <AboutUs />
      <Services />
      <Features />
      <ExternalLink />
      <Blog />
    </div>
  );
}

export default App;
