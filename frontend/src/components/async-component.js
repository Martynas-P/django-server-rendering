const React = require('react');
const DocumentTitle = require('react-document-title');


class AsyncComponent extends React.Component {

  render() {
    return (
      <DocumentTitle title='Async Component'>
        <h1>Async Component</h1>
      </DocumentTitle>
    );
  }

};


module.exports = AsyncComponent;