import { useDispatch, useSelector } from "react-redux";
import { fetchCabinet } from "../../redux";
import { useEffect } from "react";

const TableCabinets = () => {
  const Cabinets = useSelector((state) => state.Cabinet.cabinets);
  
  
    const dispatch = useDispatch();

  
    useEffect(
      () => dispatch(fetchCabinet()),
  
      []
    );

    return (
      <div className="d-flex col-12 justify-content-center py-5">
                <div className="table-responsive col-sm-9 col-12">

      <table className="table table-success  table-striped">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Nom</th>
      <th scope="col">Téléphone</th>
      <th scope="col">Email</th>
      <th scope="col">Adresse</th>

      <th scope="col">Heure d'ouverture</th>
      <th scope="col">Heure de fermeture</th>




    </tr>
  </thead>

  <tbody>
  {Cabinets.map((Cabinet, index) => (
    <tr
    key={Cabinet.id}
    >
      <th scope="row">{index+1}</th>
      <td>{Cabinet.name}</td>
      <td>{Cabinet.phone}</td>
      <td>{Cabinet.email}</td>
      <td>{Cabinet.address}</td>


      <td>{Cabinet.openTime}</td>
      <td>{Cabinet.closureTime}</td>


    </tr>

))}
  </tbody>
</table>
</div>
     </div>
    )
}

export default TableCabinets
