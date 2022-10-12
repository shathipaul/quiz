import { useLoaderData } from 'react-router-dom';
import Quiz from '../../Quiz/Quiz';
import img from '../../../images/quiz.jpg'

const Home = () => {
    const quizzes = useLoaderData();
    return (
        <div className='bg-blue-50'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
            <div>
            <img className='w-6/12 m-auto border-2 rounded border-blue-900' src={img} alt="" />
            </div>
            <div className='w-9/12 m-auto'>
            <h2 className='text-2xl font-bold text-blue-700 mb-5'>Welcome to Quicky Quiz</h2>
            <p>The term quiz is a capacious one: it can refer to a single game consisting of just a few questions, or it can refer to a large-scale event involving dozens or hundreds of people. Quizzes may be held on a variety of subjects, or they may be on just one. Quiz formats also vary widely, ranging from weekly quizzes at a local pub, with participants competing for glory and perhaps a few free pints, to widely broadcast television game shows such as Who Wants to Be a Millionaire, with enormous cash prizes on offer.</p>
            </div>
            </div>
            
            
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