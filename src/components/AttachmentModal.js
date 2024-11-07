// import React, { useState } from 'react';
// import axios from 'axios';
// import './AttachmentModal.css';

// const AttachmentModal = ({ onClose }) => {
//   const [task, setTask] = useState({
//     title: "Task 10",
//     category: "Doing",  // Default category
//     count: 9
//   });

//   // Handle form field changes (like category)
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTask((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const taskData = {
//       title: task.title,
//       category: task.category,
//       count: task.count,
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/v1/card', taskData);
//       console.log('Response:', response.data);
//       onClose();  // Close modal after successful submission
//     } catch (error) {
//       console.error('Error uploading task:', error);
//     }
//   };

//   return (
//  <div className='modal-container'>
//      <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="close-btn" onClick={onClose}>Close</button>
//         <h2>Task Details</h2>
        
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Title</label>
//             <input
//               type="text"
//               name="title"
//               value={task.title}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label>Category</label>
//             <select
//               name="category"
//               value={task.category}
//               onChange={handleChange}
//             >
//               <option value="completed">Completed</option>
//               <option value="inComplete">In Complete</option>
//               <option value="ToDo">To Do</option>
//               <option value="Doing">Doing</option>
//               <option value="overView">Overview</option>
//               <option value="underReview">Under Review</option>
//             </select>
//           </div>

//           <div>
//             <label>Count</label>
//             <input
//               type="number"
//               name="count"
//               value={task.count}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit">Submit Task</button>
//         </form>
//       </div>
//     </div>
//  </div>
//   );
// };

// export default AttachmentModal;


import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import styles for Toast notifications
import './AttachmentModal.css';

const AttachmentModal = ({ onClose }) => {
  const [task, setTask] = useState({
    title: "Task 10",
    category: "Doing",  // Default category
    count: 9
  });

  // Handle form field changes (like category)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      title: task.title,
      category: task.category,
      count: task.count,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/v1/card', taskData);
      console.log('Response:', response.data);

      // Show success toast notification
      toast.success("Task submitted successfully!");
      onClose();  // Close modal after successful submission
    } catch (error) {
      console.error('Error uploading task:', error);

      // Show error toast notification
      toast.error("Failed to submit task. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>Task Details</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Category</label>
            <select
              name="category"
              value={task.category}
              onChange={handleChange}
            >
              <option value="completed">Completed</option>
              <option value="inComplete">In Complete</option>
              <option value="ToDo">To Do</option>
              <option value="Doing">Doing</option>
              <option value="overView">Overview</option>
              <option value="underReview">Under Review</option>
            </select>
          </div>

          <div>
            <label>Count</label>
            <input
              type="number"
              name="count"
              value={task.count}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit Task</button>
        </form>
      </div>
    </div>
  );
};

export default AttachmentModal;
