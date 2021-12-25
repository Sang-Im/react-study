import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './component/App.module.css';

function App() {
  const name = "Tom";
  const naver = {
    name : "네이버",
    url : "http://naver.com",
  }
  return (
    <div className="App">
      <h3>props : properties</h3>
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
     
}

export default App;
