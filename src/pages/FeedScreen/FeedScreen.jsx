import React, { useEffect, useRef, useState } from 'react';
import { LOAD_COUNT_ITEMS } from '../../utils/constants';

import styles from './FeedScreen.module.css'
import classNames from 'classnames';

function FeedScreen() {
  const [items, setItems] = useState(['Новость 1', 'Новость 2', 'Новость 3', 'Новость 4', 'Новость 5']);
  const [start, setStart] = useState(items.length ? items.length : 0);
  const listEndRef = useRef(null);

  const loadMoreItems = (evt) => {
    evt.preventDefault()
    const newItems = Array.from(
      { length: LOAD_COUNT_ITEMS }, 
      (_, i) => `Новость ${start + i + 1}`);

    setItems((prevItems) => [...prevItems, ...newItems]);
    setStart(start + 5);
  };

  useEffect(() => {
    if (listEndRef.current) {
      listEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [items]);

  return (
    <form onSubmit={loadMoreItems}>
      <h2>Лента</h2>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <li ref={listEndRef}></li>
      </ul>
      <button className={classNames(styles.btn, 'button')} onClick={loadMoreItems} type='submit'>Загрузить больше новостей</button>
    </form>
  );
}

export default FeedScreen;