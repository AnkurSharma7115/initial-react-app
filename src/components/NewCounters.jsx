import React, { Component } from 'react'
import Counter from './Counter'

export class NewCounters extends Component {
    
    render() {
        return (
            <div>
                <button onClick={this.props.onReset} className='btn btn-primary btn-sm m-2'>RESET</button>
                { this.props.counters.map(counter =>
                    <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter} />
                )}
            </div>
        )
    }
}

export default NewCounters
