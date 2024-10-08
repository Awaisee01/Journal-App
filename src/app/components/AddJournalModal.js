// "use client";
// import { useState } from 'react';
// import useJournalStore from '../features/useJournalStore';
// const AddJournalModal = ({ onClose }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const addJournal = useJournalStore((state) => state.addJournal);

//   const handleSubmit = () => {
//     addJournal({ title, content });
//     onClose();
//   };


//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">Add New Journal</h2>

//         <input
//           type="text" 
//           placeholder="Title"
//           className="border p-2 w-full mb-4"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
        
//         <textarea
//           placeholder="Content"
//           className="border p-2 w-full mb-4"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />

//         <div className="flex justify-end space-x-4">
//           <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
//             Cancel
//           </button>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddJournalModal;


"use client";
import { useState } from 'react';
import useJournalStore from '../features/useJournalStore';

const AddJournalModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const addJournal = useJournalStore((state) => state.addJournal);

  const handleSubmit = () => {
    if (title.trim() && content.trim()) { // Ensure title and content are not empty
      addJournal({ title, content });
      setTitle(''); // Reset input fields
      setContent('');
      onClose(); // Close modal
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Journal</h2>
        <input
          type="text" 
          placeholder="Title"
          className="border p-2 w-full mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea
          placeholder="Content"
          className="border p-2 w-full mb-4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex justify-end space-x-4">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJournalModal;

