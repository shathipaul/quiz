import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../../Quiz/Quiz';

const Home = () => {
    const quizzes = useLoaderData();
    return (
        <div className='flex justify-evenly my-5'>
            
            {
                quizzes.data.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;