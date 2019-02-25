import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevStates) {
    console.log("prevProps", prevProps);
    console.log("prevStates", prevStates);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  //   state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"]
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.props.tags.length === 0) return <p>There are not tags!</p>;

    return (
      <ul>
        {this.props.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   handleIncrement = product => {
  //     console.log(product);
  //     //console.log("Increment clicked!", this);
  //     this.setState({ value: this.state.value + 1 });
  //   };

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
