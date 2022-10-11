import { useLoaderData } from 'react-router-dom';
import Quiz from '../../Quiz/Quiz';

const Home = () => {
    const quizzes = useLoaderData();
    return (
        <div className='bg-blue-50'>
           <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 m-5'>
           {
                quizzes.data.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
           </div>
        </div>
    );
};

export default Home;