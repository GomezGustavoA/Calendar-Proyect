import axios from 'axios';
import { useEffect } from 'react';
import Calendar from './components/calendarDayGridMonth/Calendar';
import CalendarTimeGridDay from './components/calendarTimeGridDay/CalendarTimeGridDay';
import MiniCalendar from './components/miniCalendar/Minicalendar';
import { useDispatch, useSelector } from 'react-redux';
import { addValueView} from './redux/datePosition';
import { addEvents} from './redux/events';
import CreateEvents from './components/CreateEvents/CreateEvents';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const viewValue = useSelector((state) => state.datePosition.view);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`http://localhost:3000/calendar/events`);
        dispatch(addEvents(data));
        // dispatch(resetevents())
      } catch (error) {
        window.alert('Error en la carga de los eventos');
        console.log(error);
      }
    }
  
    fetchData();  // Ejecutar al inicio
  
    // Lista de dependencias vacía
  }, []);

  const handleUpload = async (event) => {
    try {
      const {title, start, end} = event;
      await axios.post('http://localhost:3000/calendar/events', { title, start, end });
      
      // Después de crear el evento, realiza una nueva solicitud para obtener la lista actualizada
    const { data } = await axios.get('http://localhost:3000/calendar/events');
    dispatch(addEvents(data))

    } catch (error) {
      console.log(error);
      window.alert(error.response.data.message);
    }
  };

  const handleView = () => {
    dispatch(addValueView(!viewValue))
  }

  return (
    <>
    { viewValue ?
      <div >
        <Calendar/>
        <button onClick={handleView}>cambiar</button>
      </div>
      :
      <div className='container2'>
        <CalendarTimeGridDay/>
        <div>
        <button onClick={handleView}>cambiar</button>
        <MiniCalendar/>
        </div>

      </div>
    }
    <CreateEvents handleUpload={handleUpload}/>
    </>
  )
}

export default App;