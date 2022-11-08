import {Link} from 'react-router-dom'
const Home = () =>{
    return(
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보이는 페이지</p>
            <ul>
                <li>
                    <Link to='/about'>소개</Link>
                </li>
                <li>
                    <Link to='/profiles/student1'>학생1의 프로필</Link>
                </li>
                <li>
                    <Link to='/profiles/student2'>학생2의 프로필</Link>
                </li>
                <li>
                    <Link to='/profiles/void'>존재하지 않는 프로필</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;