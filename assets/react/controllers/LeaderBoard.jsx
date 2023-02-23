import React from "react";
import './styles/Leaders.css';

const LeaderBoard = ({ progressions }) => {
  const users = JSON.parse(progressions);

  return (
    <div className="leader-container">
      <div className="leaderboard">
        <div className="head">
          <i className="fas fa-crown"></i>
          <h2>Leaders</h2>
        </div>
        <div className="body">
          <ol>
            {users.map((user, index) => (
              <li key={`leader-${index}`}>
                <mark>{user.user.username} ({user.user.age} ans)</mark>
                <small>{user.score}</small>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
