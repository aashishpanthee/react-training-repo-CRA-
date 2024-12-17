import React from 'react';
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Aashish Panthee',
      age: 23,
    };
  }
  render() {
    // destructuring the props
    const {} = this.props;
    // destructuring the state
    const { firstName, age } = this.state;
    return (
      <div>
        <p>My name is {firstName}</p>
        <p>My age is {age}</p>
        <button
          onClick={() => {
            this.setState({
              firstName: 'Aabiskar Panthee',
            });
          }}
        >
          Change Name
        </button>
        <button
          onClick={() => {
            this.setState({
              age: 24,
            });
          }}
        >
          Change Age
        </button>
      </div>
    );
  }
}
export default About;
