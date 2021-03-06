import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div class="row">
    <div class="col-1">
     <h4><span className={this.getBadgeClasses()} >{this.formatCount()}</span></h4>
    </div>
    <div class="col">
      <button
          onClick={()=>this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
     <button
          onClick={()=>this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={this.props.counter.value===0?"disabled":""}
        >
          -
        </button>
      <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
    </div>
  </div>


    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value:count} = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;



