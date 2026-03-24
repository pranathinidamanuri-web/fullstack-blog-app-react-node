import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import BlogDetails from './components/BlogDetails'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blogs/:id" component={BlogDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App