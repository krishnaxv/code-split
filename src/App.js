import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class DynamicImport extends Component {
  state = {
    isLoading: false,
    component: null
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    this.props.load().then(module =>
      this.setState({
        isLoading: false,
        component: module.default
      })
    );
  }

  render() {
    const { component: Component } = this.state;
    return Component ? <Component {...this.props} /> : <p>Loading ...</p>;
  }
}

const App = props => (
  <Switch>
    <Route
      path="/"
      exact
      render={() => <DynamicImport load={() => import('./Home')} />}
    />
    <Route
      path="/1"
      exact
      component={() => <DynamicImport load={() => import('./1')} />}
    />
    <Route
      path="/2"
      exact
      component={() => <DynamicImport load={() => import('./2')} />}
    />
    <Route
      path="/3"
      exact
      component={() => <DynamicImport load={() => import('./3')} />}
    />
  </Switch>
);

export default App;
