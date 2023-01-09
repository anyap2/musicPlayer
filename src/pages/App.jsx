import './App.css';
import NavBar from '../components/NavBar';
import NowTrack from '../components/Player';
import { React, createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Library from '../components/Library';
import Context from '../components/Context';
import Footer from '../components/Footer';
import Player from '../components/Player';
import NowPlaying from '../components/NowPlaying';
import AudioControllers from '../components/AudioContriollers';


export const StorageContext = createContext()

function App() {

  const values = Context()


  return (
    <StorageContext.Provider value={values}>
      <div className="App">
        {/* <NavBar /> */}
        <div className='appContent'>
          <Library />
          <NowPlaying />
        </div>

        <AudioControllers />
        {/* <Player /> */}

        <Routes>
          <Route path='/library' element={<Library />}></Route>
          <Route path='/nowTrack' element={<NowTrack />}></Route>
        </Routes>

      </div>
    </StorageContext.Provider>
  );
}

export default App;
