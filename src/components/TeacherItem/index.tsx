import React from 'react';

//Imagens
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

//CSS
import './styles.css';

function TeacherList(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/31465480?s=460&u=4c7ef5e42925756cc53d179ea4eec28a1db1833d&v=4" alt="Lucas Dauto"/>
                        <div>
                            <strong>Lucas Dauto</strong>
                            <span>Física</span>
                        </div>
                    </header>
                    <p>
                        É nóis caraio é trapezera buscando caraio! Boraaa, Hora do Show Porra. É nóis caraio é trapezera buscando caraio! Bora caralho, você quer ver essa porra velho.
                        <br/><br/>
                        Aqui é Body Builder Ipsum PORRA! Que não vai dá rapaiz, não vai dá essa porra. Que não vai dá rapaiz, não vai dá essa porra. Negativa Bambam negativa. Ó o homem ali porra!, é 13 porra! É 37 anos caralho!
                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherList;