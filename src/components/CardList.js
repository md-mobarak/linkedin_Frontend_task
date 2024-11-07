/* eslint-disable react/jsx-no-comment-textnodes */


import React, { useState } from 'react';
import './CardList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPaperclip, faCalendarAlt, faComment,faLayerGroup,faBackpack} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const CardList = ({ card }) => {
//   const  description= `While Font Awesome doesn't have a specific icon for a backpack, you can try using a combination of icons or a custom SVG to represent it.`;
 const comments= Math.floor(Math.random() * 10) + 1;
//  const attachments= Math.floor(Math.random() * 5) + 1;
 const  dueDate =`2024-12-0${10 + 1}`
//  const  taskName=  `Task ${tasks?.title + 1}`;


  const [attachments, setAttachments] = useState(Math.floor(Math.random() * 5) + 1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAttachmentCount, setNewAttachmentCount] = useState(0);
  const cardId = card?._id;
const description =' While Font Awesome doesn’t have a specific icon for a backpack, you can try using a combination of icons or a custom SVG to represent it.'
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAttachmentChange = (e) => setNewAttachmentCount(parseInt(e.target.value));

  const handleAttachmentUpdate = async () => {
    const updatedAttachments = attachments + newAttachmentCount;
    try {
      await axios.put(`https://backend-task-from-linkedin.vercel.app/api/v1/card/${cardId}`, {
        count: updatedAttachments,
      });
      setAttachments(updatedAttachments);
      closeModal();
    } catch (error) {
      console.error('Error updating attachment count:', error);
    }
  }
  return (
    <div className="card-list">
      {
        <div  className="card">
          <div className="card-header">
            <div className='card-top'>
            <img className='user-img' src="https://img.freepik.com/premium-vector/young-prince-royal-attire_1308-173359.jpg?w=740" alt=''/>
            <h3 className="task-name">Client Name</h3>
            </div>
            <div className='card-top'>
            <img className='user-img' src="https://img.freepik.com/free-vector/young-prince-traditional-attire_1308-174397.jpg?t=st=1730904758~exp=1730908358~hmac=142b09e629fbf9ac3b6fe273b6d21647e2cf3aa317c61c4d95cbb32a018426a7&w=740" alt=''/>
            <h3 className="task-name">Sadik istiak</h3>
            </div>
          </div>
          
          <p className="task-description" title='While Font Awesome doesnt have a specific icon for a backpack you can try using a combination of icons or a custom SVG to represent it'>
 <FontAwesomeIcon icon={faLayerGroup}/> {description.length >= 10 ? description.split(' ').slice(0, 7).join(' ') + '...' : description} <FontAwesomeIcon icon={faBriefcase} /></p>
          <div className="card-footer">
            <div className="stat">
                <img className='user-img' src="https://img.freepik.com/free-vector/young-prince-traditional-attire_1308-174397.jpg?t=st=1730904758~exp=1730908358~hmac=142b09e629fbf9ac3b6fe273b6d21647e2cf3aa317c61c4d95cbb32a018426a7&w=740" alt=''/>
            </div>
            <div className="stat">
                <img className='user-img' src="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?t=st=1730904681~exp=1730908281~hmac=18704e28487de7d5039b848970c9c86c406984a85d2f3c262817544065810c5d&w=740" alt=''/>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faComment} className="stat-icon" />
              <span>{comments}</span>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faPaperclip} onClick={openModal} style={{ cursor: 'pointer' }}  className="stat-icon" />
              <span>{attachments}</span>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faCalendarAlt} className="stat-icon" />
              <span>{dueDate}</span>
            </div>
          </div>
              {/* Modal for Attachment Update */}
      {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Update Attachments</h2>
              <input
                type="number"
                value={newAttachmentCount}
                onChange={handleAttachmentChange}
                placeholder="Enter number of attachments"
              />
              <button onClick={handleAttachmentUpdate}>Update</button>
              <button className='cencel_btn' onClick={closeModal}>Cancel</button>
            </div>
          </div>
        )}
        </div>
    }
    </div>
  );
};

export default CardList;

// import React, { useState } from 'react';
// import './CardList.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBriefcase, faPaperclip, faCalendarAlt, faComment, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// const CardList = ({ card }) => {
//   const [attachments, setAttachments] = useState(Math.floor(Math.random() * 5) + 1);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newAttachmentCount, setNewAttachmentCount] = useState(0);
//   const cardId = card?._id;

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleAttachmentChange = (e) => setNewAttachmentCount(parseInt(e.target.value));

//   const handleAttachmentUpdate = async () => {
//     const updatedAttachments = attachments + newAttachmentCount;
//     try {
//       await axios.put(`http://localhost:5000/api/v1/card/${cardId}`, {
//         count: updatedAttachments,
//       });
//       setAttachments(updatedAttachments);
//       closeModal();
//     } catch (error) {
//       console.error('Error updating attachment count:', error);
//     }
//   };

//   return (
//     <div className="card-list">
//       <div className="card">
//         <div className="card-header">
//           <div className="card-top">
//             <img
//               className="user-img"
//               src="https://img.freepik.com/premium-vector/young-prince-royal-attire_1308-173359.jpg?w=740"
//               alt="Client"
//             />
//             <h3 className="task-name">Client Name</h3>
//           </div>
//           <div className="card-top">
//             <img
//               className="user-img"
//               src="https://img.freepik.com/free-vector/young-prince-traditional-attire_1308-174397.jpg"
//               alt="Sadik Istiak"
//             />
//             <h3 className="task-name">Sadik Istiak</h3>
//           </div>
//         </div>

//         <p className="task-description">
//           <FontAwesomeIcon icon={faLayerGroup} /> 
//           While Font Awesome doesn’t have a specific icon for a backpack, you can try using a combination of icons or a custom SVG to represent it. 
//           <FontAwesomeIcon icon={faBriefcase} />
//         </p>

//         <div className="card-footer">
//           <div className="stat">
//             <FontAwesomeIcon icon={faComment} className="stat-icon" />
//             <span>{Math.floor(Math.random() * 10) + 1}</span>
//           </div>
//           <div className="stat">
//             <FontAwesomeIcon icon={faPaperclip} className="stat-icon" onClick={openModal} style={{ cursor: 'pointer' }} />
//             <span>{attachments}</span>
//           </div>
//           <div className="stat">
//             <FontAwesomeIcon icon={faCalendarAlt} className="stat-icon" />
//             <span>2024-12-11</span>
//           </div>
//         </div>

//         {/* Modal for Attachment Update */}
//         {isModalOpen && (
//           <div className="modal-overlay">
//             <div className="modal-content">
//               <h2>Update Attachments</h2>
//               <input
//                 type="number"
//                 value={newAttachmentCount}
//                 onChange={handleAttachmentChange}
//                 placeholder="Enter number of attachments"
//               />
//               <button onClick={handleAttachmentUpdate}>Update</button>
//               <button onClick={closeModal}>Cancel</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardList;
