import logo from './logo.svg'; /*import 특저 파일을 불러 오는 것을 의미*/ 
import Counter from './Hooks/Counter'
import Info from './Hooks/Info'
  const App = () => {
    return <Counter></Counter>;
  }

  const info = () => {
    return <Info></Info>
  };

export default info;
