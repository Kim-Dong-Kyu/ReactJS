import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
    student1 : {
        name : "학생1", 
        description : "리액트 수강생",
    }, 
    student2 : {
        name : "학생2",
        description : "스프링 수강생",
    }
}

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile? (
                <div>
                    <h2>{profile.name}</h2>
                    <h2>{profile.description}</h2>
                </div>
            ) :(
              <p>존재하지 않는 프로필입니다</p>
            )} 
        </div>
    );
};

export default Profile;