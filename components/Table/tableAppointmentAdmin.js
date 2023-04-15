import { useDispatch, useSelector } from "react-redux";
import { fetchAppointmentAdmin } from "../../redux";
import { useEffect,useState } from "react";
import moment from 'moment';

import dateFormat, { masks } from "dateformat";
const TableAppointmentAdmin = () => {
  const AppointmentsAdmins = useSelector((state) => state.AppointmentAdmin.appointments);
  const dispatch = useDispatch();
  console.log(' tous les rdv admin les rendez-vous', AppointmentsAdmins)
  

  useEffect(
    () => dispatch(fetchAppointmentAdmin()),
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
            <th scope="col">Nom du cabinet</th>
            <th scope="col">Heure</th>

          </tr>
        </thead>

        <tbody>
          {AppointmentsAdmins.map((AppointmentAdmin, index) => (
            <tr key={AppointmentAdmin.id}>
              <th scope="row">{index + 1}</th>
              <td>{AppointmentAdmin.name}</td>
              <td>{AppointmentAdmin.email}</td>
              <td>{dateFormat(AppointmentAdmin.date, "d/m/yyyy ")}</td>
              <td>{AppointmentAdmin.User.tel}</td>
              <td>{AppointmentAdmin.Cabinet.name}</td>
              <td>{AppointmentAdmin.time}</td>

              

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  
  );
};

export default TableAppointmentAdmin;
