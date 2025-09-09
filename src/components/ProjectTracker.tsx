import React, { useState } from 'react';
import './ProjectTracker.css';

interface ProjectTrackerProps {
  progress: number;
}

const ProjectTracker: React.FC<ProjectTrackerProps> = ({ progress }) => {
  const [showPercentage, setShowPercentage] = useState(false);

  return (
    <div className="project-tracker">
      <div className="progress-label">Progress</div>
      <div 
        className="progress-bar-container"
        onMouseEnter={() => setShowPercentage(true)}
        onMouseLeave={() => setShowPercentage(false)}
      >
        <div 
          className="progress-bar"
          style={{ width: `${progress}%` }}
        >
          {showPercentage && (
            <div className="progress-percentage">
              {progress}%
            </div>
          )}
        </div>
        <div className="progress-background"></div>
      </div>
    </div>
  );
};

export default ProjectTracker;
