import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function BookingForm({time, setTime}) {
  const [date,setDate]=useState('')
  
  const [guest,setGuest]=useState('')
  const [occasion,setOccasion] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

  };

  const formStyle = {
    display: "grid",
    gap: 20,
    maxWith:200,
  };
  return (
    <form style={formStyle}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={(e) => {
          setDate(e.target.value);
          console.log(date);
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time "
        onChange={(e) => {
          setTime(e.target.value);
          console.log(time);
        }}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        onChange={(e) => {
          setGuest(e.target.value);
          console.log(guest);
        }}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={(e) => {
          setOccasion(e.target.value);
          console.log(occasion);
        }}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;