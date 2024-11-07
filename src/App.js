
// import React, { useState } from 'react';
// import './App.css';
// import InComplete from './components/InComplete';
// import ToDo from './components/ToDo';
// import Doing from './components/Doing';
// import UnderReview from './components/UnderReview';
// import Completed from './components/Completed';
// import OverView from './components/OverView';
// import AttachmentModal from './components/AttachmentModal';
// import { ToastContainer } from 'react-toastify'; // Import ToastContainer

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="app">
//       <h1>Frontend Task</h1>
//       <button onClick={openModal}>Add Task</button>

//       <div className="card-container">
//         <InComplete />
//         <ToDo />
//         <Doing />
//         <UnderReview />
//         <Completed />
//         <OverView />
//       </div>

//       {/* Modal Component */}
//       {isModalOpen && <AttachmentModal onClose={closeModal} />}

//       {/* ToastContainer for notifications */}
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API requests
import './App.css';
import InComplete from './components/InComplete';
import ToDo from './components/ToDo';
import Doing from './components/Doing';
import UnderReview from './components/UnderReview';
import Completed from './components/Completed';
import OverView from './components/OverView';
import AttachmentModal from './components/AttachmentModal';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]); // State to store fetched tasks
  const [loading, setLoading] = useState(false); // State to track loading state
  const [error, setError] = useState(null); // State to track errors

  // Fetch tasks from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/v1/card');
        setTasks(response.data); // Store data in state
      } catch (err) {
        setError('Failed to fetch tasks');
        toast.error('Error fetching tasks!'); // Show error toast
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Fetch tasks on component mount
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Filter tasks by category
  const filterTasksByCategory = (category) => {
    return tasks.filter((task) => task.category === category);
  };

  return (
    <div className="app">
      <h1>Frontend Task</h1>
      <button onClick={openModal}>Add Task</button>

      {/* Loading state */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Loading tasks...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="error-overlay">
          <p>{error}</p>
        </div>
      )}

      <div className="card-container">
        <InComplete tasks={filterTasksByCategory('inComplete')} />
        <ToDo tasks={filterTasksByCategory('ToDo')} />
        <Doing tasks={filterTasksByCategory('Doing')} />
        <UnderReview tasks={filterTasksByCategory('underReview')} />
        <Completed tasks={filterTasksByCategory('completed')} />
        <OverView tasks={filterTasksByCategory('overView')} />
      </div>
      {/* ['completed', 'inComplete', 'ToDo', 'Doing', 'overView', 'underReview'] */}
      {/* Modal Component */}
      {isModalOpen && <AttachmentModal onClose={closeModal} />}

      {/* ToastContainer for notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default App;
