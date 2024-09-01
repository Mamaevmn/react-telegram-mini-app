import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import WebSocketScreen from '../pages/WebSocketScreen/WebSocket';
import FeedScreen from '../pages/FeedScreen/FeedScreen';
import WeatherScreen from '../pages/WeatherScreen/WeatherScreen';

import styles from './App.module.css'
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import classNames from 'classnames';

function App() {
  return (
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Routes>
            <Route path="/websocket" element={<WebSocketScreen />} />
            <Route path="/weather" element={<WeatherScreen />} />
            <Route path="/feed" element={<FeedScreen />} />
            <Route path="/" exact element={<WebSocketScreen />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <nav className={styles.nav}>
          <Link to="/websocket" className={classNames(styles.btnLink, ({ isActive }) => isActive ? styles.active : undefined)}>
            WebSocket
          </Link>
          <Link to="/weather"  className={classNames(styles.btnLink, ({ isActive }) => isActive ? styles.active : undefined)}>
            Weather
          </Link>
          <Link to="/feed"  className={classNames(styles.btnLink, ({ isActive }) => isActive ? styles.active : undefined)}>
            Feed
          </Link>
        </nav>
      </div>
  );
}

export default App;