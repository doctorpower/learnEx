import React, { Component } from 'react';
import './App.css';

class App extends Component {

    info = [
        {
            title: 'Терминал',
            time: '1 час',
            desc: 'Ознакомление с основами терминала UNIX',
            russian: {
                hyperlink: 'https://lifehacker.ru/terminal-commands/',
                link: 'Ссылка на обучение',
                desc: null,
            },
            english: {
                hyperlink: 'https://tutorial.djangogirls.org/en/intro_to_command_line/',
                link: 'Ссылка на обучение',
                desc: 'Необходимо изучить только для Linux',
            },
            result: 'Результатом является знание базовых команд, представленных на обучающих страницах (работа с файлами, директориями, навигация)',
        },
        {
            title: 'html/css',
            time: '6 часов',
            desc: 'Ознакомление с языком гипертекстовой разметки (html) и каскадными таблицами стилей (css)',
            russian: {
                hyperlink: 'https://htmlacademy.ru',
                link: 'Ссылка на обучение',
                desc: 'На сайте необходимо нажать кнопку "Начать учиться", после чего следовать программе обучения',
            },
            english: {
                hyperlink: 'https://learn.shayhowe.com/html-css/building-your-first-web-page/',
                link: 'Ссылка на обучение',
                desc: 'Для запуска среды разработки на этом сайте необходимо в окне "HTML Document Structure Demo" нажать на "EDIT ON CODEPEN"',
            },
            result: 'Результатом является вёрстка сайта, который я ещё не придумал',
        },
        {
            title: 'JavaScript',
            time: '8 часов',
            desc: 'Ознакомление с языком программирования - JavaScript',
            russian: {
                hyperlink: 'https://learn.javascript.ru',
                link: 'Ссылка на обучение',
                desc: 'Чтобы приступить, в окне "Язык JavaScript" нужно нажать "Введение"',
            },
            english: {
                hyperlink: 'https://www.learn-js.org/',
                link: 'Ссылка на обучение',
                desc: null,
            },
            result: 'Результатом является знание (спасибо, кэп)',
        },
        {
            title: 'React',
            time: '8 часов',
            desc: 'Ознакомление с библеотекой для разработки пользовательских интерфейсов - React',
            russian: {
                hyperlink: 'http://thewebland.net/react-js/',
                link: 'Ссылка на обучение',
                desc: null,
            },
            english: {
                hyperlink: 'http://buildwithreact.com/',
                link: 'Ссылка на обучение',
                desc: '(0_0) нужно добавить гайд для создания react app (0_0)',
            },
            result: 'Результатом является тестовое приложение, которое я ещё не придумал',
        },
        {
            title: 'Redux',
            time: '4 часа',
            desc: 'Ознакомление с библиотекой для управления состоянием приложения - Redux',
            russian: {
                hyperlink: 'https://maxfarseer.gitbooks.io/redux-course-ru/content/struktura_prilozheniya.html',
                link: 'Ссылка на обучение',
                desc: 'Начинать необходимо сразу с главы "Создание"',
            },
            english: {
                hyperlink: 'https://redux.js.org/introduction',
                link: 'Ссылка на обучение',
                desc: null,
            },
            result: 'Результатом является добавление redux к прошлому react-приложению из прошлого модуля',
        },
    ];

    render() {

        return (
            <div className="App">
                <h1>Программа обучения</h1>
                <ul>
                    <li>
                        В каждом модуле представлено два варианта обучения - на русском и на английском. Оба проходить <strong>не нужно</strong>, достаточно выбрать более удобный для себя вариант.
                    </li>
                    <li>
                        В каждом модуле есть результат - эта необходимая конечная цель.
                    </li>
                    <li>
                        После каждого модуля будеть проходить проверка ваших знаний.
                    </li>
                    <li>
                        В каждом модуле есть рассчетное время выполнения (сразу, после названия модуля) его желательно придерживаться.
                    </li>
                </ul>
                {this.info.map((item) => (
                    <div>
                        <h2>{item.title} <div className={'time'}>{item.time}</div></h2>
                        <div className={'part'}>
                            <p>{item.desc}</p>
                            <h3>Обучение на русском:</h3>
                            <div className={'content'}>
                                <a href={item.russian.hyperlink}>{item.russian.link}</a>
                                <br/>
                                {item.russian.desc ? <p>{item.russian.desc}</p>: null}
                            </div>
                            <h3>Обучение на английском:</h3>
                            <div className={'content'}>
                                <a href={item.english.hyperlink}>{item.english.link}</a>
                                <br/>
                                {item.english.desc ? <p>{item.english.desc}</p>: null}
                            </div>
                            <h3>Результат:</h3>
                            <p>{item.result}</p>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default App;
