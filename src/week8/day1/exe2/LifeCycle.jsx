import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert('The component named Child is about to be unmounted.');
  }

  render() {
    return (
      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h1 className="text-2xl font-bold text-blue-900">Hello World!</h1>
      </div>
    );
  }
}

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true
    };
  }

  shouldComponentUpdate() {
    return true; // As requested in Part I
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="space-y-6">
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
          <h1 className="text-3xl font-bold mb-4">
            My Favorite Color is <span style={{ color: this.state.favoriteColor }}>{this.state.favoriteColor}</span>
          </h1>
          <button
            onClick={this.changeColor}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Change Color
          </button>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
          {this.state.show && <Child />}
          <div className="mt-4">
            <button
              onClick={this.deleteChild}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete Header
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LifeCycle;
