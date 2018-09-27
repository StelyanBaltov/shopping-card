import React from 'react';
import Counter from './Counter';

const Counters = ({ counters, onReset, onDelete, onIncrement, onDecrement }) => {
    return (
        <div>
            <button
                className="btn btn-primary m-2"
                onClick={onReset}>
                Reset
            </button>
            {counters.map(counter => 
                <Counter
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                    key={counter.id}
                    counter={counter} />
            )}
        </div>
    );
}

export default Counters;