import React, { useState } from 'react';

const CreateEvents = ({handleUpload}) => {

    const [formData, setFormData] = useState({
      title: '',
      start: '',
      end: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validar los datos del formulario aquí si es necesario
  
      // Crear el objeto de evento
      const newEvent = {
        title: formData.title,
        start: new Date(formData.start).toISOString(),
        end: new Date(formData.end).toISOString(),
      };
  
      // agregar el evento a la base de datos
      handleUpload(newEvent);
  
      // Puedes restablecer el formulario después de enviar los datos si es necesario
      setFormData({
        title: '',
        start: '',
        end: '',
      });
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Fecha y hora de inicio:
          <input type="datetime-local" name="start" value={formData.start} onChange={handleChange} />
        </label>
        <br />
        <label>
          Fecha y hora de finalización:
          <input type="datetime-local" name="end" value={formData.end} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Agregar Evento</button>
      </form>
    );
  };
  
  export default CreateEvents;