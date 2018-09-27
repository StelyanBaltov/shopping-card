import React, { Component } from 'react';

export default class Counter extends Component {
    formatValue() {
        const { value } = this.props.counter;

        return value === 0 ? <span>Zero</span> : value;
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';

        return classes;
    }

    render() {
        return (
            <div className='row'>
                <div className='col-1'>
                    <span className={this.getBadgeClasses()} >{this.formatValue()}</span>
                </div>
                <div className='col'>
                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className='btn btn-secondary m-1' >
                        +
                    </button>
                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className='btn btn-secondary m-1'
                        disabled={this.props.counter.value === 0}>
                        -
                    </button>
                    <button
                        onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger m-1">
                        X
                    </button>
                </div>
            </div>
            
        );
    }


}