import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Counters from './components/Counters';

class App extends Component {
    constructor() {
        super()

        this.state = {
            counters: [
                { id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 0 },
                { id: 4, value: 0,},
                { id: 5, value: 0 }
            ]
        }
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({
            counters
        })
    }

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        if(counters[index].value !== 0) {
            counters[index].value--;
        }

        
        this.setState({
            counters
        })
    }

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({
            counters
        })
    }

    handleDelete = (id) => {
        const counters = this.state.counters.filter(counter => counter.id !== id)

        this.setState({
            counters
        })
    }

    render() {
        return (
            <div>
                <NavBar
                    totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className='container'>
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDecrement={this.handleDecrement}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete} />
                </main>
            </div>
        );
    }
}

export default App;
