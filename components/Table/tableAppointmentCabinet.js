import { useDispatch, useSelector } from "react-redux";
import { fetchAppointmentCabinet } from "../../redux";
import { useEffect } from "react";
import dateFormat, { masks } from "dateformat";

const TableAppointmentCabinet = () => {
  const AppointmentsCabinets = useSelector((state) => state.AppointmentCabinet.appointments);
  const dispatch = useDispatch();
  console.log('les rendez-vous', AppointmentsCabinets)
  

  useEffect(
    () => dispatch(fetchAppointmentCabinet()),

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
            <th scope="col">Téléphone</th>
            <th scope="col">Heure</th>

          </tr>
        </thead>

        <tbody>
          {AppointmentsCabinets.map((AppointmentsCabinet, index) => (
            <tr key={AppointmentsCabinet.id}>
              <th scope="row">{index + 1}</th>
              <td>{AppointmentsCabinet.name}</td>
              <td>{AppointmentsCabinet.email}</td>
              <td>{dateFormat(AppointmentsCabinet.date, "d/m/yyyy ")}</td>
              <td>{AppointmentsCabinet.User.tel}</td>
              <td>{AppointmentsCabinet.time}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default TableAppointmentCabinet;
