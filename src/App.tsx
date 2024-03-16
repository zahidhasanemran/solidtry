import type { Component } from 'solid-js';
import Routes from './Routes'
import Header from './components/global/Header'
import Footer from './components/global/Footer'

const App: Component = () => {
  return (
    <div>
      <Header></Header>
        <Routes />
      <Footer></Footer>
    </div>
  );
};

export default App;
