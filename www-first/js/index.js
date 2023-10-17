    ReactDOM.render(<div>
    <h1>Привет</h1>
    <h2>Привет ещё раз</h2>
    </div>
    , document.getElementById('app'))


 // Без JSX
 ReactDOM.render(React.createElement('input', {
    placeholder: 'Help text',
    onClick: () => console.log('Clicked'),
    onMouseEnter: () => console.log('Mouse Over'),
 })
    , document.getElementById('app'))

    // С JSX

    const inputClick = () => console.log('Clicked')
    const mouseOver = () => console.log('Mouse Over')
    const helpText = 'Help text!'

    const elements = (<div>
        <h1>{helpText}</h1>
    <input placeholder = {helpText} onClick= {inputClick} onMouseEnter= {mouseOver}/>
    <p>{1 + 5}</p>
    <p>{helpText === 'Help text!' ? 'Yes' : 'No'}</p>
    </div>)
    const app = document.getElementById('app')
    ReactDOM.render(elements, app)