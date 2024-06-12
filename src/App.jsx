import './App.css';
import { Video, Thumb } from './components/Video';
import videos from './data/data';
let name = 'tamojit';
import PlayButton from './components/playbutton';

function App() {

  return (
    <div className="App">
      hello sexy
      <div></div>
    {   
      videos.map(video=>
        <Video 
        key={video.id}
         verified={video.verified}
         title= {video.title} 
         time={video.time} 
         views={video.views}
         Channel={video.Channel}
         id = {video.id} />
      )
     }
     <div style={{clear:'both'}}>
     <PlayButton/>
     </div>
    
     
      <Thumb/>
      {name}
    </div>
  );
}

export default App;
