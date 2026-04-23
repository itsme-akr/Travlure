import { createContext, useContext, useEffect, useState } from "react";

const SaveContext = createContext();

export const SaveProvider = ({ children }) => {
  const [collections, setCollections] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("collections");
    if (stored) setCollections(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("collections", JSON.stringify(collections));
  }, [collections]);

  const addToCollection = (collectionName, place) => {
    setCollections((prev) => {
      const existing = prev[collectionName] || [];

      if (existing.find((p) => p.name === place.name)) return prev;

      return {
        ...prev,
        [collectionName]: [...existing, place],
      };
    });
  };

  const removeFromCollection = (collectionName, place) => {
    setCollections((prev) => ({
      ...prev,
      [collectionName]: prev[collectionName].filter(
        (p) => p.name !== place.name
      ),
    }));
  };

  const isSavedAnywhere = (place) => {
    return Object.values(collections).some((list) =>
      list.some((p) => p.name === place.name)
    );
  };

  return (
    <SaveContext.Provider
      value={{
        collections,
        addToCollection,
        removeFromCollection,
        isSavedAnywhere,
      }}
    >
      {children}
    </SaveContext.Provider>
  );
};

export const useSave = () => useContext(SaveContext);