const React = require('react');
const ReactDom = require('react-dom');

const HelloWorld = React.createClass({
  render () {
    return (
      <div> Hello Reactjs Program </div>
    )
  }
});

ReactDom.render(<HelloWorld />, document.getElementById('app'));
