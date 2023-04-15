import { useDispatch, useSelector } from "react-redux";
import { fetchAppointment } from "../../redux";
import { useEffect } from "react";
import dateFormat, { masks } from "dateformat";

const TableAppointment = () => {
  const Appointments = useSelector((state) => state.Appointment.appointments);
  const dispatch = useDispatch();
  console.log('les rendez-vous', Appointments)
  

  useEffect(
    () => dispatch(fetchAppointment()),

    []
  );
  return (
    <div className="d-flex col-12 justify-content-center">
        <div class="table-responsive col-12 col-sm-10">
        <table class="table table-striped table-sm ">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
            <th scope="col">Nom du cabinet</th>
            <th scope="col">Heure</th>
          </tr>
        </thead>

        <tbody>
          {Appointments.map((Appointment, index) => (
            <tr key={Appointment.id}>
              <th scope="row">{index + 1}</th>
              <td>{Appointment.name}</td>
              <td>{Appointment.email}</td>
              <td>{dateFormat(Appointment.date, "d/m/yyyy ")}</td>
              <td>{Appointment.Cabinet.name}</td>
              <td>{Appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default TableAppointment;
