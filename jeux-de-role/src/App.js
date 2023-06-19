import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Terrain from './Pages/Terrain';

function App() {
  return (
    <>
      <Router>
        <Terrain/>
      </Router>
    </>
  )
}

export default App;
