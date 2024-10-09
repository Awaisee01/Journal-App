"use client";

import { useState } from 'react';
import AddJournalModal from './components/AddJournalModal.tsx'; 
import JournalCard from './components/JournalCard'; 
import useJournalStore from './features/useJournalStore.tsx';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const journals = useJournalStore((state) => state.journals); 
  const deleteJournal = useJournalStore((state) => state.deleteJournal); 

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">My Journals</h1>
      <ul>
        {journals.map((journal, index) => (
          <li key={index}>
            <JournalCard 
              title={journal.title} 
              content={journal.content} 
              onDelete={() => deleteJournal(index)} 
            />
          </li>
        ))}
      </ul>
      <button
       className="fixed bottom-10 right-10 bg-blue-600 text-white px-10 p-5  me-10 m-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
       onClick={openModal}
     >
       +
     </button>
      {isModalOpen && (
        <AddJournalModal
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}
