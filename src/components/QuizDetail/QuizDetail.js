import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetail = () => {
    const quizDetails = useLoaderData();
    const { name, questions } = quizDetails.data;
    return (
        <div className='bg'>
            <h2 className='pt-5 text-3xl text-center font-bold text-white'>Quiz Name: {name}</h2>
            {
                questions.map(questionD => <Question
                    key={questionD.id}
                    questionD={questionD}
                ></Question>)
            }

        </div>
    );
};

export default QuizDetail;