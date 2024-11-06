import React, { useState } from 'react';
import AttachmentModal from './components/AttachmentModal';
import './App.css';
import InComplete from './components/InComplete';
import ToDo from './components/ToDo';
// import Doing from './components/Doing';
// import UnderReview from './components/UnderReview';
import Completed from './components/Completed';
import OverView from './components/OverView';
import Doing from './components/Doing';
import UnderReview from './components/UnderReview';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <h1>Frontend Task</h1>
      <button onClick={openModal}>Attach Files</button>

      <div className="card-container">
    <InComplete></InComplete>  
    <ToDo></ToDo>
    <Doing></Doing>
    <UnderReview></UnderReview>
    <Completed></Completed>
    <OverView></OverView>
      </div>

      {isModalOpen && <AttachmentModal onClose={closeModal} />}
    </div>
  );
}

export default App;
