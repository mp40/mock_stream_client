import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
            <Link to='pagetwo'>Navigate To Page Two</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            <button>Click Me</button>
            <Link to='pageone'>Navigate to Page One</Link>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={PageOne}/>
                    <Route path='/pagetwo' compnet={PageTwo}/>
                </div>
            </BrowserRouter>
        </div>
    ) 
}

export default App