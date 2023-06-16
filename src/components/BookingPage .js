import BookingForm from "./BookingForm.js";

function BookingPage({time,setTime}) {
    return (
      <>
        <BookingForm time={ time} setTime={setTime} />
      </>
    );
}
export default BookingPage