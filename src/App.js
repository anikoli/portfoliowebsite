import './App.css';
import ProjectLink from './components/projectLink';

import Puparia from './assets/images/puparia.jpg'

function App() {
  return (
    <div className="App">
      <h1>Aniko Li</h1>
      <div className='projectContainer'>
        <ProjectLink name={"Test"} imgSrc={Puparia}/>
        <ProjectLink name={"Test"} imgSrc={Puparia}/>
        <ProjectLink name={"Test"} imgSrc={Puparia}/>
        <ProjectLink name={"Test"} imgSrc={Puparia}/>
        <ProjectLink name={"Test"} imgSrc={Puparia}/>
        <ProjectLink name={"Test"} imgSrc={Puparia}/>
      </div>
    </div>
  );
}

export default App;
