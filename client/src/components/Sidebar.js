import React from 'react';

function Sidebar() {
  const upcomingEvents = [
    {
      title: 'Next Issue Release',
      date: 'March 2026',
      description: 'Volume 5, Issue 2 will be published'
    },
    {
      title: 'Paper Submission Deadline',
      date: 'February 28, 2026',
      description: 'Last date for current volume submissions'
    },
    {
      title: 'Conference',
      date: 'April 2026',
      description: 'International Conference on Research'
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-banner">
        <h3>Journal Banner</h3>
        <p>Advancing Knowledge in All Fields of Research</p>
      </div>
      
      <div className="sidebar-events">
        <h3>Upcoming Events</h3>
        {upcomingEvents.map((event, index) => (
          <div key={index} className="event-item">
            <h4>{event.title}</h4>
            <p><strong>{event.date}</strong></p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
