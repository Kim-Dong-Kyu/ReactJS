import logo from './logo.svg'; /*import 특저 파일을 불러 오는 것을 의미*/ 
//import './App.css';
import React,{Component} from'react';

class App extends Component{
  render(){
    const v_react =  "React";
    return <h1 className="react-Test">{v_react} Test</h1>
  }
}
export default App;
