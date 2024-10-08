// // src/app/page.js
// "use client";
// import { useState } from 'react';
// import AddJournalModal from './components/AddJournalModal';
// import JournalCard from './components/JournalCard';
// import useJournalStore from './features/useJournalStore';

// export default function Home() {
//   const [showModal, setShowModal] = useState(false);
//   const journals = useJournalStore((state) => state.journals);

//   const toggleModal = () => setShowModal(!showModal);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Your  journal </h1>

//       <div className="grid grid-cols-1 gap-4 mt-6">
//         {journals.map((journal, index) => (
//           <JournalCard key={index} title={journal.title} content={journal.content} />
//         ))}
//       </div>

//       {/* Floating Action Button */}
//       <button
//         className="fixed top-10 right-10 bg-blue-600 text-white px-10 p-5  me-10 m-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
//         onClick={toggleModal}
//       >
//         +
//       </button>

//       {showModal && <AddJournalModal onClose={toggleModal} />}
//     </div>
//   );
// }


"use client";
import { useState } from 'react';
import AddJournalModal from './components/AddJournalModal'; // Adjust the import path if needed
import JournalCard from './components/JournalCard'; // Ensure this path is correct
import useJournalStore from './features/useJournalStore'; // Ensure this path is correct

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const journals = useJournalStore((state) => state.journals); // Get journals from Zustand store
  const deleteJournal = useJournalStore((state) => state.deleteJournal); // Get delete function

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">My Journals</h1>
      
    

      {/* List of Journals */}
      <ul>
        {journals.map((journal, index) => (
          <li key={index}>
            <JournalCard 
              title={journal.title} 
              content={journal.content} 
              onDelete={() => deleteJournal(index)} // Pass the delete function
            />
          </li>
        ))}
      </ul>

      {/* Add Journal Modal */}
      <button
       className="fixed bottom-10 right-10 bg-blue-600 text-white px-10 p-5  me-10 m-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
       onClick={openModal}
     >
       +
     </button>
      {isModalOpen && (
        <AddJournalModal
          onClose={() => setIsModalOpen(false)} // Close modal
        />
      )}
    </div>
  );
}
