import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CardEvent from '../cardEvent/CardEvent';
import { useSelector, useDispatch } from 'react-redux';
import { cardEventView } from '../../redux/cardEventSlice';
import formatToDDMMYYHHMM from '../../util/formatToDDMMYYHHMM';
import styles from './calendar.module.css';

const Calendar = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);
  const cardEventSearch = useSelector(state => state.cardEventSlice.cardEventInfo);

  console.log(cardEventSearch)

  const handleEventClick = (info) => {
    if (info.event.start && info.event.end) {
      const formattedStartDate = formatToDDMMYYHHMM(new Date(info.event.start));
      const formattedEndDate = formatToDDMMYYHHMM(new Date(info.event.end));
      dispatch(cardEventView({ id: info.event._def.publicId, title: info.event.title, formattedStartDate, formattedEndDate }));
    }
  };

  return (
    <div className={styles.mainCalendar}>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView={"dayGridMonth"}
        weekends={true}
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: null,
        }}
        width='600px'
        height='600px'
        eventClick={handleEventClick}
      />
      <div>
        <CardEvent />
      </div>
    </div>
  );
};

export default Calendar;