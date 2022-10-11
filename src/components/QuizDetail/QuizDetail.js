import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetail = () => {
    const qD = useLoaderData();

    console.log(qD.data);
    return (
        <div>
           
        </div>
    );
};

export default QuizDetail;