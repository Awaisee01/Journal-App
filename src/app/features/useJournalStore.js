// import create from 'zustand';

// const useJournalStore = create((set) => ({
//   journals: [],
//   addJournal: (newJournal) => set((state) => ({
//     journals: [...state.journals, newJournal],
//   })),
//   deleteJournal: (index) => set((state) => ({
//     journals: state.journals.filter((_, i) => i !== index),
//   })),
// }));

// export default useJournalStore;


// src/app/features/useJournalStore.js
import create from 'zustand';

const LOCAL_STORAGE_KEY = 'journals';

const useJournalStore = create((set) => {
  // Load journals from local storage when the store is initialized
  const loadJournals = () => {
    const savedJournals = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedJournals ? JSON.parse(savedJournals) : [];
  };

  return {
    journals: loadJournals(),
    addJournal: (newJournal) => {
      set((state) => {
        const updatedJournals = [...state.journals, newJournal];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedJournals)); // Save to local storage
        return { journals: updatedJournals };
      });
    },
    deleteJournal: (index) => {
      set((state) => {
        const updatedJournals = state.journals.filter((_, i) => i !== index);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedJournals)); // Save to local storage
        return { journals: updatedJournals };
      });
    },
  };
});

export default useJournalStore;
