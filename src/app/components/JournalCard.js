// // src/app/components/JournalCard.js
// import { MdDelete } from "react-icons/md";

// const JournalCard = ({ title, content  }) => {
//     return (
//       <div className="p-4 border rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold">{title}</h2>
//        <div className="flex  justify-between">
//        <p>{content}</p>
//        <i  className="text-3xl"><MdDelete /></i>
//        </div>
//       </div>
//     );
//   };
  
//   export default JournalCard;

import { MdDelete } from "react-icons/md";

const JournalCard = ({ title, content, onDelete }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex justify-between items-center">
        <p className="flex-1">{content}</p>
        <button 
          onClick={onDelete} 
          className="text-3xl text-red-500 hover:text-red-700 focus:outline-none"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default JournalCard;

  