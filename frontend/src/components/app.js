const React = require('react');
const Link = require('react-router').Link;
const connect = require('react-redux').connect;
const ReactRedux = require('react-redux');
const DocumentTitle = require('react-document-title');


class App extends React.Component {

  render() {
    return (
      <DocumentTitle title='Home page'>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/component-a">Component A</Link></li>
            <li><Link to="/square/36">Square 36</Link></li>
          </ul>
          {this.props.children}
        </div>
      </DocumentTitle>
    );
  }

}

module.exports = App;