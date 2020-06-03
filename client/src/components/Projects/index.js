import React from 'react';
import './style.css';
import sushiMe from '../../images/sushime.png';
import burger from '../../images/burger.png';
import CodeQuiz from '../../images/codeQuiz1.png';
import eventifyYourMap from '../../images/eventifyYourMap.png';

function Projects() {
    return (
        <div id='projectsBackground'>
            <section className="content-section">
                <div id="project2" className="container">
                    <div className="content-section-heading text-center">
                        <h3 className="text-secondary mb-0">Check Out My</h3>
                        <h2 className="mb-5">Recent Projects</h2>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <a className="portfolio-item" href='https://github.com/andreathomas19460/github.io-SushiMe'>
                                <span className="caption">
                                    <span className="caption-content">
                                        <h2></h2>
                                    </span>
                                </span>
                                <h2 className="text-center">Sushi Me</h2>
                                <img className="img-fluid" src={sushiMe} alt={'sushiME'}/>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a className="portfolio-item" href='https://github.com/TeresaLiuu/Burger'>
                                <span className="caption">
                                    <span className="caption-content">
                                        <h2></h2>
                                    </span>
                                </span>
                                <h2 className="text-center">Eat The Burger</h2>
                                <img className="img-fluid" src={burger} alt={'burger'}/>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a className="portfolio-item" href="https://github.com/TeresaLiuu/CodeQuiz">
                                <span className="caption">
                                    <span className="caption-content">
                                        <h2></h2>
                                    </span>
                                </span>
                                <h2 className="text-center">Code Quiz</h2>
                                <img className="img-fluid" src={CodeQuiz} alt={'codeQuiz'}/>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a className="portfolio-item" href="https://github.com/FrantzCFelix/Eventify-your-map">
                                <span className="caption">
                                    <span className="caption-content">
                                        <h2></h2>
                                    </span>
                                </span>
                                <h2 className="text-center">Eventify Your Map</h2>
                                <img className="img-fluid" src={eventifyYourMap} alt={'eventifyYourMap'} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div >

    );
}

export default Projects;