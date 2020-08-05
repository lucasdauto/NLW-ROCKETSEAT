import React from 'react';
import { Link } from 'react-router-dom';

//icons e images
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

//CSS
import './styles.css';
import PageHeader from '../../components/PageHeader';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="subject">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>
        </div>
    )
}
export default TeacherList;