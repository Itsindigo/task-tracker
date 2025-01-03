import { openDB } from 'idb';

const DB_NAME = 'task-tracker';
const STORE_NAME = 'task-checkboxes';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
};

export const saveCheckboxState = async (weekNumber, day, activity, isChecked) => {
  const db = await initDB();
  const id = `${weekNumber}-${day}-${activity}`;
  await db.put(STORE_NAME, { id, weekNumber, day, activity, isChecked });
};

export const getCheckboxStates = async (weekNumber) => {
  const db = await initDB();
  const allEntries = await db.getAll(STORE_NAME);
  return allEntries.filter((entry) => entry.weekNumber === weekNumber);
};
