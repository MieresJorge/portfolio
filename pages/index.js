import Layout from '../components/Layout'
import {Skills,proyectos} from '../public/profile'
import Link from 'next/link'

const index = () => (
    <Layout>
        {/*Header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4 ">
                            <img className="img-fluid pl-5" src="https://media-exp1.licdn.com/dms/image/C4D03AQGHD7CiOjFyOw/profile-displayphoto-shrink_200_200/0/1606697848977?e=1622073600&v=beta&t=gIc7UbsTjFvgLq8wbjqx-nEgeozM5v_K2P1CB6KZGtk" alt=""/>
                        </div> 
                    <div className="col-md-8">
                    <h1>Mieres Jorge Nicolas</h1>
                    <h3>Desarrollador web</h3>
                    <p>Terminando la tecnicatura en programacion de la UTN y a parte estudio de forma autodidacta desarrollo web tanto el FRONTEND como el BACKEND y a lo largo un año fui aprendiendo herramientas para poder realizar mis propios proyectos y generar conocimiento y experiencia en herramientas de desarrollo </p>
                    <a href="blog" className="btn btn-light">Hire me</a>
                    </div>    
                    </div>
                </div>
            </div>
        </header>
        {/**Second section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                    {
                        Skills.map(({skill,percentage},i) => (
                            <div className="py-3" key={i}>
                        <h5>{skill}</h5>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-danger" 
                            role="progressbar" style={{width:`${percentage}%`}} aria-valuenow="10" a
                            ria-valuemin="0" 
                            aria-valuemax="100">
                            </div>
                        </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                    <ul>
                    <li>
                        <h1>Estudios</h1>
                        <h3>Tecnicatura Superior en programacion</h3>
                        <h5>En curso</h5>
                        </li>
                    </ul>
                    <ul>
                    <li>
                        <h1>Conocimientos</h1>
                        <h3>Front End</h3>
                        <h5>HTML y CSS</h5>
                        <p>Mis primeros pasos al realizar paginas me llevaron a aprender HTML y CSS logrando mis primeras paginas estaticas</p>
                        <h5>JavaScript</h5>
                        <p>Fue un paso necesario para mejorar mis paginas y aplicar mis conocimientos en programacion para realizar paginas mucho mas dinamicas e interactivas</p>
                        <h5>React JS y NEXT</h5>
                        <p>Con manejo de JS busque un framework para trabajar y decidi por react en el cual hice esta pagina de portfolio junto a NEXT JS</p>
                        <h5>MYsql</h5>
                        <p>Necesario para hacer mis primeras pagians conectadas a base de datos la cual conecte por primera vez con PHP pero actualmente uso NODE</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        {/**PORTFOLIO */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">PORTFOLIO</h1>
                        </div>
                        {
                        proyectos.map(({name,descrption,image},i) => (
                                <div className="col-md-4 p-2" key={i}>
                                <div className="card h-100">
                                    <div className="overflow">
                                    <img src={`/${image}`} alt="" className="card-img-top"/>
                                    </div>
                                    <div className="card-body">
                                        <h3>{name}</h3>
                                        <p>{descrption}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-4">
                    <Link  href="/github">
                    <a className="btn btn-outline-light">GitHub</a>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </Layout>
)
export default index