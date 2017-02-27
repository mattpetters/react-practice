import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
    render(){
        return (
          <div className="container-fluid">
              <Header/>
              {this.props.children}
          </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}; //add children as required prop type on this component

export default App;