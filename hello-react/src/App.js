import logo from './logo.svg'; /*import 특저 파일을 불러 오는 것을 의미*/ 
import './App.css';

function App() {
  const v_react = "React";
  return (
    <>
      {/*주석입니다*/}
      <h1 className="react-Test">{v_react} Test</h1>
      /*이렇게 하면 주석 안됨*/ 
    </> 
  );
}

export default App;
