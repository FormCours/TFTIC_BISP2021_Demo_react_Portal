import './App.css';
import PortalTo from './components/portal-to/portal-to';
import Counter from './components/counter/counter'

function App() {
  return (
    <div className="App">
      
      <PortalTo target="demo1">
        <p>Hello World</p>
      </PortalTo>

      <PortalTo target="demo2">
        <p>Test</p>
      </PortalTo>
      
      <PortalTo target="demo3">
        <Counter />
      </PortalTo>

    </div>
  );
}

export default App;
