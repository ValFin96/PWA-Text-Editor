import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const txtEditDb = await openDB('jate', 1);
  const trans = txtEditDb.transaction('jate', 'readwrite');
  const store = trans.objectStore('jate');
  const request = store.put({ id: 1, value: content });

  const result = await request;
  console.log('Data is saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const txtEditDb = await openDB('jate', 1);
  const trans = txtEditDb.transaction('jate', 'readonly');
  const store = trans.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
