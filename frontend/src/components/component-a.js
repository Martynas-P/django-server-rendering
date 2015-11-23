const React = require('react');
const DocumentTitle = require('react-document-title');


class ComponentA extends React.Component {

  render() {
    return (
      <DocumentTitle title='Component A'>
        <h1>Component A</h1>
      </DocumentTitle>
    );
  }




};


module.exports = ComponentA;