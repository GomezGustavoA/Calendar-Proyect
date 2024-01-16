import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styles from './MiniCalendar.module.css';
import { useSelector } from 'react-redux';


const MiniCalendar = () =>{
    const events = useSelector(state => state.events);

    return (
        <div className={styles.miniCalendar}>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
            />
        </div>
    )
    }

export default MiniCalendar;