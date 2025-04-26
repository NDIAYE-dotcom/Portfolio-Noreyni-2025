import Profile from '../../assets/home.jpg';
import { Link } from 'react-router';
import { RiArrowRightLine } from "react-icons/ri";
import'./home.css';


const Home = () => {
    return (
        <section className='home-container grid'>
            <img src={Profile} alt='' className='home-img' />
           <div className='home-content'>
                <h1 className='home-title'>
                    <span> I'am Noreyni</span> <br />   
                </h1>
                <h2 className='home-2title'>Graphiste Designer - Web Developer - Community Manager</h2>

                <p className='home-description'>
                Passionné par le numérique et la création visuelle, j’allie infographie, marketing digital et développement web pour aider les marques à se démarquer. <br />Grâce à ma maîtrise de Photoshop, Illustrator et Premiere Pro, je crée des visuels percutants qui renforcent l’identité de mes clients. <br />

En tant que community manager, j’élabore des stratégies digitales efficaces pour engager et fidéliser les audiences. <br /> Toujours en quête d’évolution,  je me spécialise également en design UX/UI et développement web, avec un focus sur HTML, CSS, JavaScript, tailwindcss, Next.js & React afin de concevoir des expériences digitales modernes et performantes.
                </p>

                <Link to='/about' className='button'>
                A propos de moi
                <span className='button-icon'>
                <RiArrowRightLine />
                </span>
                </Link> 
            </div>

            <div className='color-block'></div>
        </section>
    );
};
export default Home;