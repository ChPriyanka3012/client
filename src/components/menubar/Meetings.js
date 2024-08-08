import React, { useState, useEffect } from 'react';
import './Meetings.css'; 

const Meetings = () => {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [eventsToday, setEventsToday] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formDate, setFormDate] = useState(new Date().toISOString().substr(0, 10));
  const [formTime, setFormTime] = useState('12:00');
  const [formEventName, setFormEventName] = useState('');

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  useEffect(() => {
    const today = new Date().getDate();
    const filteredEvents = events.filter((event) => event.date === today);
    setEventsToday(filteredEvents);
  }, [events]);

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  const addEvent = (date, time, eventName) => {
    const newEvent = { date, time, eventName };
    const isToday = date === new Date().getDate();

    setEvents([...events.filter(event => event.date !== date || event.time !== time), newEvent]);

    if (isToday) {
      setEventsToday([...eventsToday, newEvent]);
    }
  };

  const getEventsForDate = (date) => {
    return events.filter((event) => event.date === date);
  };

  const isPastDate = (date) => {
    const today = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentDateObject = new Date(currentYear, currentMonth, date);
    return currentDateObject < today;
  };

  const handleDayClick = (date) => {
    const isToday = date === new Date().getDate();
    if (!isPastDate(date) || isToday) {
      setFormDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), date).toISOString().substr(0, 10));
      setShowForm(true);
    }
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const numOfWeeks = Math.ceil(daysInMonth / 7);

  const getDaysArray = () => {
    const daysArray = [];
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const previousMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

 
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      daysArray.push({
        date: previousMonthDays - i,
        isCurrentMonth: false,
        isClickable: false,
        events: getEventsForDate(previousMonthDays - i),
      });
    }

 
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push({
        date: i,
        isCurrentMonth: true,
        isClickable: !isPastDate(i),
        events: getEventsForDate(i),
      });
    }

 
    const totalDaysDisplayed = daysArray.length;
    const daysRemaining = 7 - (totalDaysDisplayed % 7 === 0 ? 7 : totalDaysDisplayed % 7);

    for (let i = 1; i <= daysRemaining; i++) {
      daysArray.push({
        date: i,
        isCurrentMonth: false,
        isClickable: false,
        events: getEventsForDate(i),
      });
    }

    return daysArray;
  };

  const handleCreateMeeting = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date(formDate).getDate();
    if (formEventName) {
      addEvent(date, formTime, formEventName);
      setShowForm(false);
      setFormDate(new Date().toISOString().substr(0, 10)); 
      setFormTime('12:00'); 
      setFormEventName('');
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="arrow-button" onClick={goToPreviousMonth}>&lt;</button>
        <h2 className="calendar-title">{monthName}</h2>
        <button className="arrow-button" onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="calendar-days">
        {[...Array(numOfWeeks * 7).keys()].map((index) => {
          const dayInfo = getDaysArray()[index];
          const { date, isCurrentMonth, isClickable, events } = dayInfo;

          return (
            <button
              key={index}
              className={`calendar-day ${!isCurrentMonth ? 'disabled' : ''} ${isClickable ? 'clickable' : ''} ${events.length > 0 ? 'has-event' : ''}`}
              onClick={() => handleDayClick(date)}
            >
              {isCurrentMonth ? date : ''}
              {events.length > 0 && (
                <div className="event-tooltip">
                  {events.map((event, index) => (
                    <div key={index} className="event-tooltip-item">
                      {event.eventName} at {formatTime(event.time)}
                    </div>
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>
      {eventsToday.length > 0 && (
        <div className="events-today">
          <h3 className="events-today-title">Meetings Today:</h3>
          <ul className="events-today-list">
            {eventsToday.map((event, index) => (
              <li key={index} className="events-today-item">
                <span className="events-today-event">{event.eventName} at {formatTime(event.time)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="calendar-events-section">
        <h3 className="calendar-event-title">All Events:</h3>
        <ul className="calendar-event-list">
          {events.map((event, index) => (
            <li key={index} className="calendar-event-item">
              <span className="calendar-event-date">{event.date}</span>&nbsp;
              <span className="calendar-event-name">{event.eventName}</span>&nbsp; 
              <span className="calendar-event-time">{formatTime(event.time)}</span>

            </li>
          ))}
        </ul>
        <button className="create-meeting-button" onClick={handleCreateMeeting}>Create Meeting</button>
      </div>
      {showForm && (
        <div className="meeting-form">
          <button className="close-form-button" onClick={handleCloseForm}>X</button>
          <h3>Create New Meeting</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Date:
              <input 
                type="date" 
                value={formDate}
                onChange={(e) => setFormDate(e.target.value)}
              />
            </label>
            <label>
              Time:
              <input 
                type="time" 
                value={formTime}
                onChange={(e) => setFormTime(e.target.value)}
              />
            </label>
            <label>
              Event Name:
              <input 
                type="text" 
                value={formEventName}
                onChange={(e) => setFormEventName(e.target.value)}
                required
              />
            </label>
            <button type="submit">Add Event</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Meetings;
