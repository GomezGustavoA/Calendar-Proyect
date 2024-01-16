import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styles from '../calendarDayGridMonth/calendar.module.css';
import { useSelector } from 'react-redux';

const CalendarTimeGridDay = () => {
  const events = useSelector(state => state.events);

  return (
    <div className={styles.mainCalendar}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="timeGridDay"
        weekends={true}
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: null,
        }}
        slotMinTime="08:00:00"  // Configura la hora de inicio
        slotMaxTime="20:01:00"  // Configura la hora de finalización
      />
    </div>
  );
};

export default CalendarTimeGridDay;