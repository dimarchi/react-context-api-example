import './App.css';
import Parent from './Parent';
import Third from './Third';

function App() {
  return (
    <div className="App">
      <h1>Communication between components using ContextAPI</h1>
      <section>
        <h2>Parent to child and child to parent</h2>
        <Parent />
      </section>
      <section>
        <h2>Child to child</h2>
        <Third />
      </section>
    </div>
  );
}

export default App;
