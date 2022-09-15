import logo from './logo.svg'; /*import 특저 파일을 불러 오는 것을 의미*/ 
import Counter from './Hooks/Counter'
import Info from './Hooks/Info'
import Reducer from './Hooks/Reducer'
import { useState } from 'react';

  const App = () => {
    /*const [visible, setVisible] = useState(false);
     <div>
        <button onClick={()=> {
            setVisible(!visible);
          }
        }>
          {visible ? '보이기' : '숨기기'}
        </button>
        {visible && <Info/>}
      </div>
    )*/
    return <Reducer></Reducer>

  };

export default App;
