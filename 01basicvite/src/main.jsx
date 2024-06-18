import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElement ={
    type : 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me!'
}


function MyApp() {
    return (
        <div>
            <h1> Custom React App</h1>
        </div>
    )
}


const AnotherElement = (

    <a href='https://www.google.com' target='_blank'>   Click me! </a>
)


const areactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank',
    },
    'Click me!'
)



ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
    
)



