import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import WebSocketScreen from '../pages/WebSocketScreen/WebSocket';
import FeedScreen from '../pages/FeedScreen/FeedScreen';
import WeatherScreen from '../pages/WeatherScreen/WeatherScreen';

import styles from './App.module.css'
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import classNames from 'classnames';
import CurrencyScreen from '../pages/CurrencyScreen/CurrencyScreen';

function App() {
  return (
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Routes>
            <Route path="/websocket" element={<WebSocketScreen />} />
            {/* <Route path="/weather" element={<WeatherScreen />} /> */}
            <Route path="/currency" element={<CurrencyScreen />} />
            <Route path="/feed" element={<FeedScreen />} />
            <Route path="/" exact element={<WebSocketScreen />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <nav className={styles.nav}>
          <NavLink to="/websocket" className={({ isActive }) => classNames(styles.btnLink, { [styles.active]: isActive })}>
            WebSocket
          </NavLink>
          {/* <NavLink to="/weather" className={({ isActive }) => classNames(styles.btnLink, { [styles.active]: isActive })}>
            Weather
          </NavLink> */}
          <NavLink to="/currency" className={({ isActive }) => classNames(styles.btnLink, { [styles.active]: isActive })}>
            Курс ЦБ РФ
          </NavLink>
          <NavLink to="/feed" className={({ isActive }) => classNames(styles.btnLink, { [styles.active]: isActive })}>
            Лента
          </NavLink>
        </nav>
      </div>
  );
}

export default App;