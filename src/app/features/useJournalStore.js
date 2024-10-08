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
import {create} from 'zustand';

const useJournalStore = create((set) => ({
  journals: JSON.parse(localStorage.getItem('journals')) || [],
  addJournal: (newJournal) => {
    set((state) => {
      const updatedJournals = [...state.journals, newJournal];
      localStorage.setItem('journals', JSON.stringify(updatedJournals));
      return { journals: updatedJournals };
    });
  },
  deleteJournal: (index) => {
    set((state) => {
      const updatedJournals = state.journals.filter((_, i) => i !== index);
      localStorage.setItem('journals', JSON.stringify(updatedJournals));
      return { journals: updatedJournals };
    });
  }
}));

export default useJournalStore;

