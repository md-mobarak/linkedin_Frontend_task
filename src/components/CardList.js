

import React from 'react';
import './CardList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPaperclip, faCalendarAlt, faComment,faLayerGroup,faBackpack} from '@fortawesome/free-solid-svg-icons';

const CardList = () => {
  // Mock data for cards
  const cardsData = Array.from({ length: 9 }).map((_, index) => ({
    clientName: `Client ${index + 1}`,
    taskName: `Task ${index + 1}`,
    comments: Math.floor(Math.random() * 10) + 1,
    attachments: Math.floor(Math.random() * 5) + 1,
    dueDate: `2024-12-0${index + 1}`,
    description: `While Font Awesome doesn't have a specific icon for a backpack, you can try using a combination of icons or a custom SVG to represent it.`
  }));

  return (
    <div className="card-list">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <div className='card-top'>
            <img className='user-img' src="https://img.freepik.com/premium-vector/young-prince-royal-attire_1308-173359.jpg?w=740" alt=''/>
            <h3 className="task-name">Client Name</h3>
            </div>
            <div className='card-top'>
            <img className='user-img' src="https://img.freepik.com/free-vector/young-prince-traditional-attire_1308-174397.jpg?t=st=1730904758~exp=1730908358~hmac=142b09e629fbf9ac3b6fe273b6d21647e2cf3aa317c61c4d95cbb32a018426a7&w=740" alt=''/>
            <h3 className="task-name">Sadik istiak</h3>
            </div>
           
            {/* <FontAwesomeIcon icon={faEllipsisV} className="menu-icon" /> */}
          </div>
          
          <p className="task-description" title='While Font Awesome doesnt have a specific icon for a backpack you can try using a combination of icons or a custom SVG to represent it'>
 <FontAwesomeIcon icon={faLayerGroup}/> {card.description.length >= 10 ? card.description.split(' ').slice(0, 7).join(' ') + '...' : card.description} <FontAwesomeIcon icon={faBriefcase} /></p>
          <div className="card-footer">
            <div className="stat">
                <img className='user-img' src="https://img.freepik.com/free-vector/young-prince-traditional-attire_1308-174397.jpg?t=st=1730904758~exp=1730908358~hmac=142b09e629fbf9ac3b6fe273b6d21647e2cf3aa317c61c4d95cbb32a018426a7&w=740" alt=''/>
            </div>
            <div className="stat">
                <img className='user-img' src="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?t=st=1730904681~exp=1730908281~hmac=18704e28487de7d5039b848970c9c86c406984a85d2f3c262817544065810c5d&w=740" alt=''/>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faComment} className="stat-icon" />
              <span>{card.comments}</span>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faPaperclip} className="stat-icon" />
              <span>{card.attachments}</span>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faCalendarAlt} className="stat-icon" />
              <span>{card.dueDate}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
