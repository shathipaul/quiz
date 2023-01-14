import { useLoaderData } from 'react-router-dom';
import Quiz from '../../Quiz/Quiz';
import img from '../../../images/quiz.jpeg'

const Home = () => {
    const quizzes = useLoaderData();
    return (
        <div className='bg py-12 px-8 lg:px-24'>
            <img className=' mx-auto pb-10' src={img} alt="" />

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto'>
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