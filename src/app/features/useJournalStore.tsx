import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Journal {
  title: string;
  content: string;
}

interface JournalStore {
  journals: Journal[];
  addJournal: (newJournal: Journal) => void;
  deleteJournal: (index: number) => void;
}

const useJournalStore = create<JournalStore>()(
  persist(
    (set) => ({
      journals: [],
      addJournal: (newJournal: Journal) => {
        set((state) => {
          const updatedJournals = [...state.journals, newJournal];
          return { journals: updatedJournals };
        });
      },
      deleteJournal: (index: number) => {
        set((state) => {
          const updatedJournals = state.journals.filter((_, i) => i !== index);
          return { journals: updatedJournals };
        });
      },
    }),
    {
      name: 'journal-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useJournalStore;


