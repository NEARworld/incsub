import Navigation from 'Components/Navigation';
import Main from './pages/Main';
import 'Styles/App.scss';

function App() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
