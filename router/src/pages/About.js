import { useLocation, useSearchParams } from "react-router-dom";

const About = () =>{
    //const location = useLocation();
    const [searchParamsm, setSearchParams] = useSearchParams();
    const detail = searchParamsm.get('detail');
    const mode = searchParamsm.get("mode");

    const onToggleDetail = () =>{
        setSearchParams({mode, detail:detail === 'true'? false  : true});
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) +1;
        setSearchParams({mode: nextMode, detail});
    };

    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
            <p>detail : {detail}</p>
            <p>mode: {mode}</p> 
            <button onClick ={onToggleDetail}>Toggle detail</button>
            <button onClick ={onIncreaseMode}>mode +1</button>
        </div>
    );
};

export default About;