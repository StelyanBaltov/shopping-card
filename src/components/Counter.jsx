import React, { Component } from 'react';

export default class Counter extends Component {
    formatValue() {
        const { value } = this.props.counter;

        return value === 0 ? <span>Zero</span> : value;
    }

    renderTags() {
        const tags = <ul>{this.state.tags.map((tag) => <li key={tag}>{ tag }</li>)}</ul>

        return tags;
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';

        return classes;
    }

    getButtonClasses() {
        let classes = 'btn btn-secondary m-1 ';   
        classes += this.props.counter.value === 0 ? 'disabled' : null;

        return classes
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()} >{this.formatValue()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className='btn btn-secondary m-1' >
                    +
                </button>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className={this.getButtonClasses()} >
                    -
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger m-1">
                        X
                    </button>
            </div>
            
        );
    }


}