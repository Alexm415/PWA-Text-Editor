import { openDB } from "idb";

const initdb = async () =>
  // We are creating a new database named 'Jate' which will be using version 1 of the database.
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Updating the Database");

  // Open the database
  const jateDb = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges
  const tx = jateDb.transaction("jate", "readwrite");

  // Open up the desired object store
  const store = tx.objectStore("jate");

  // Use the .put() method on the store and pass in the id and content
  const request = store.put({ id: 1, todo: content });

  // Get confirmation of the request
  const result = await request;
  console.log("Data updated in the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET all from the database");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.get(1);
  const result = await request;
  console.log("result.value", result);
  console.error("getDb not implemented");
  return result?.value;
};

initdb();
