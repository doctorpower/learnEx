import React, { Component } from 'react';
import './App.css';

class App extends Component {

    info = [
        {
            title: 'Терминал',
            time: '1 час',
            desc: 'Ознакомление с основами терминала UNIX',
            russian: [{
                hyperlink: 'https://lifehacker.ru/terminal-commands/',
                link: 'Обучение',
                desc: null,
            }],
            english: [{
                hyperlink: 'https://tutorial.djangogirls.org/en/intro_to_command_line/',
                link: 'Обучение',
                desc: 'Необходимо изучить только для Linux',
            }],
            result: 'Результатом является знание базовых команд, представленных на обучающих страницах (работа с файлами, директориями, навигация)',
        },
        {
            title: 'html/css',
            time: '6 часов',
            desc: 'Ознакомление с языком гипертекстовой разметки (html) и каскадными таблицами стилей (css)',
            russian: [{
                hyperlink: 'https://htmlacademy.ru',
                link: 'Обучение',
                desc: 'На сайте необходимо нажать кнопку "Начать учиться", после чего следовать программе обучения',
            }],
            english: [{
                hyperlink: 'https://learn.shayhowe.com/html-css/building-your-first-web-page/',
                link: 'Обучение',
                desc: 'Для запуска среды разработки на этом сайте необходимо в окне "HTML Document Structure Demo" нажать на "EDIT ON CODEPEN"',
            }],
            result: 'Результатом является вёрстка сайта, который я ещё не придумал',
        },
        {
            title: 'JavaScript',
            time: '8 часов',
            desc: 'Ознакомление с языком программирования - JavaScript',
            russian: [{
                hyperlink: 'https://learn.javascript.ru',
                link: 'Обучение',
                desc: 'Чтобы приступить, в окне "Язык JavaScript" нужно нажать "Введение"',
            }],
            english: [{
                hyperlink: 'https://www.learn-js.org/',
                link: 'Обучение',
                desc: null,
            }],
            result: 'Результатом является знание (спасибо, кэп)',
        },
        {
            title: 'React.js',
            time: '8 часов',
            desc: 'Ознакомление с библеотекой для разработки пользовательских интерфейсов - React',
            russian: [
                {
                    hyperlink: 'http://thewebland.net/react-js/',
                    link: 'Обучение',
                    desc: null,
                },
                {
                    hyperlink: 'https://webformyself.com/5-luchshix-praktik-v-arxitekture-react/',
                    link: 'Структура React-приложения',
                    desc: 'Для изучения лучшей практики приложений на React',
                }
                ],
            english: [
                {
                    hyperlink: 'https://github.com/facebook/create-react-app',
                    link: 'Создание первого приложения на React',
                    desc: 'Важно для изучения! Необходимо прочесть readme.md для развертывания первого проекта',
                },
                {
                    hyperlink: 'http://buildwithreact.com/',
                    link: 'Обучение',
                    desc: 'В процесе освоения материала нужно использовать приложение, полученное на прошлом шаге',
                },
                {
                    hyperlink: 'http://thewebland.net/react-js/',
                    link: 'Структура React-приложения',
                    desc: 'Для изучения лучшей практики приложений на React',
                },
            ],
            result: 'Результатом является тестовое приложение, которое я ещё не придумал',
        },
        {
            title: 'Redux',
            time: '4 часа',
            desc: 'Ознакомление с библиотекой для управления состоянием приложения - Redux',
            russian: [
                {
                    hyperlink: 'https://maxfarseer.gitbooks.io/redux-course-ru/content/struktura_prilozheniya.html',
                    link: 'Обучение',
                    desc: 'Начинать необходимо сразу с главы "Создание"',
                },
            ],
            english: [{
                hyperlink: 'https://redux.js.org/introduction',
                link: 'Обучение',
                desc: null,
            }],
            result: 'Результатом является добавление redux к react-приложению из прошлого модуля',
        },
        {
            title: 'Bootstrap',
            time: '4 часа',
            desc: 'Ознакомление с CSS фреймворком - Bootstrap',
            russian: [
                {
                    hyperlink: 'https://webformyself.com/kak-ispolzovat-bootstrap-s-react/',
                    link: 'Обучение',
                    desc: null
                },
                {
                    hyperlink: 'http://bootstrap-4.ru/docs/4.0/components/alerts/',
                    link: 'Все bootstrap компоненты',
                    desc: 'Для просмотра всех компонентов и более подробного ознакомления'
                },
            ],
            english: [
                {
                    hyperlink: 'https://react-bootstrap.github.io/getting-started/introduction',
                    link: 'Обучение',
                    desc: null,
                },
                {
                    hyperlink: 'https://getbootstrap.com/docs/4.0/components/alerts/',
                    link: 'Все bootstrap компоненты',
                    desc: 'Для просмотра всех компонентов и более подробного ознакомления'
                },
            ],
            result: 'Результатом является добавление bootstrap к сайту',
        },
        {
            title: 'Node.js',
            time: '8 часов',
            desc: 'Ознакомление с серверной платформой для работы с JavaScript ',
            russian: [
                {
                    hyperlink: 'http://www.nodebeginner.ru/#server-side-javascript',
                    link: 'Обучение',
                    desc: null
                },
                {
                    hyperlink: 'https://medium.com/devschacht/node-hero-chapter-7-4078fa61ece6',
                    link: 'Файловая структура проекта',
                    desc: 'Для изучения правильной структуры проекта'
                },
            ],
            english: [
                {
                    hyperlink: 'https://www.w3schools.com/nodejs/',
                    link: 'Обучение',
                    desc: null,
                },
                {
                    hyperlink: 'https://medium.com/codebase/structure-of-a-nodejs-api-project-cdecb46ef3f8',
                    link: 'Файловая структура проекта',
                    desc: 'Для изучения правильной структуры проекта'
                },
            ],
            result: 'Результатом является добавление серверной части к приложению',
        },
        {
            title: 'Express',
            time: '4 часа',
            desc: 'Ознакомление с фреймворком для приложений Node.js - Express',
            russian: [
                {
                    hyperlink: 'https://expressjs.com/ru/',
                    link: 'Обучение',
                    desc: 'Необходимо изучить сначала "Начало работы" затем "Руководство"'
                },
            ],
            english: [
                {
                    hyperlink: 'https://expressjs.com/',
                    link: 'Обучение',
                    desc: 'Необходимо изучить сначала "Getting Started" затем "Guide',
                },
            ],
            result: 'Результатом является использование Express в серверной части приложения',
        },

    ];

    render() {

        return (
            <div className="App">
                <h1>Программа обучения</h1>
                <ul>
                    <li>
                        В каждом модуле представлено два варианта обучения - на русском и на английском. Оба проходить
                        <strong> не нужно</strong>, достаточно выбрать более удобный для себя вариант.
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
                {this.info.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title} <div className={'time'}>{item.time}</div></h2>
                        <div className={'part'}>
                            <p>{item.desc}</p>
                            <h3>Обучение на русском:</h3>
                            <div className={'content'}>
                                {item.russian.map((item, index) => (
                                    <div className={'subContent'} key={index}>
                                        <a href={item.hyperlink} target="_blank">{item.link}</a>
                                        <br/>
                                        {item.desc ? <p>{item.desc}</p>: null}
                                    </div>
                                    ))}
                            </div>
                            <h3>Обучение на английском:</h3>
                            <div className={'content'}>
                                {item.english.map((item, index) => (
                                    <div className={'subContent'} key={index}>
                                        <a href={item.hyperlink} target="_blank">{item.link}</a>
                                        <br/>
                                        {item.desc ? <p>{item.desc}</p>: null}
                                    </div>
                                ))}
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
