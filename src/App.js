import React, { Component } from 'react';
import './App.css';

class App extends Component {

    info = [
        {
            title: 'Терминал',
            desc: 'Ознакомление с основами терминала UNIX',
            russian: {
                hyperlink: 'https://lifehacker.ru/terminal-commands/',
                link: 'Ссылка на обучение',
                desc: 'some description',
            },
            english: {
                hyperlink: 'https://tutorial.djangogirls.org/en/intro_to_command_line/',
                link: 'Ссылка на обучение',
                desc: 'some description',
            },
        },
        {
            title: 'Терминал',
            desc: 'some description',
            russian: {
                hyperlink: 'https://lifehacker.ru/terminal-commands/',
                link: 'link',
                desc: 'some description',
            },
            english: {
                hyperlink: 'https://tutorial.djangogirls.org/en/intro_to_command_line/',
                link: 'link',
                desc: 'some description',
            },
        },
    ];

    render() {

        return (
            <div className="App">
                <h1>Learning program</h1>

                {this.info.map((item) => (
                    <div>
                        <h2>{item.title}</h2>
                        <div className={'part'}>
                            <p>{item.desc}</p>
                            <h3>Обучение на русском:</h3>
                            <div className={'content'}>
                                <a href={item.russian.hyperlink}>{item.russian.link}</a>
                                <br/>
                                <p>{item.russian.desc}</p>
                            </div>
                            <h3>Обучение на английском:</h3>
                            <div className={'content'}>
                                <a href={item.english.hyperlink}>{item.english.link}</a>
                                <br/>
                                <p>{item.english.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default App;
