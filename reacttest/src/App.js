import './App.css';
import ActionItems from './components/ActionItems';
import {Routes, Route} from 'react-router-dom';
import { Contact } from './components/Contact';
import Summary from './components/Summary';
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage';
import 'bootstrap/dist/css/bootstrap.css';
import Appointments from './components/Appointments';
import Documents from './components/Documents';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <>
  <Navbar/>

<Routes>
    <Route exact path="/" element={<Summary/>}/>
    <Route exact path="/about" element={<Contact/>}/>
    <Route exact path="/actionitems" element={<ActionItems/>}/>
    <Route exact path="/appointments" element={<Appointments/>}/>
    <Route exact path="/documents" element={<Documents/>}/>
    <Route exact path="/tasks" element={<Tasks/>}/>

    <Route exact path='*' element={<ErrorPage/>}/>
</Routes>   
 </>
  );
}

export default App;
