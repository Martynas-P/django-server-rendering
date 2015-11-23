const React = require('react');
const connect = require('react-redux').connect;
const DocumentTitle = require('react-document-title')


class Square extends React.Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: 'CLEAR_SQUARE_RESULT'
    });
  }

  onClick() {
    this.props.dispatch({
      type: 'SQUARE_NUMBER',
      number: this.props.params.number
    });
  }

  render() {
    return (
      <DocumentTitle title={'Square ' + this.props.params.number}>
        <div>
          <h1>Square</h1>
          <p>Number to square: <strong>{this.props.params.number}</strong></p>
          <p>Result: {this.props.squaredNumber}</p>
          <button onClick={this.onClick}>Square!</button>
        </div>
      </DocumentTitle>
    );
  }

};


module.exports = connect((store) => ({squaredNumber: store.squaredNumber}))(Square);