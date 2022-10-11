import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetail = () => {
    const quizDetails = useLoaderData();
    const {name, questions} = quizDetails.data;
    return (
        <div>
           <h2 className='text-2xl font-bold text-blue-700 mb-5'>Quiz Name: {name}</h2>
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