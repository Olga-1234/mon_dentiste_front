import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux';
import { useEffect } from 'react';
import style from "./style.module.css"

const TableUsers = () => {
    const Users = useSelector((state) => state.User.users);

    const dispatch = useDispatch();

    useEffect(
        () => dispatch(fetchUser()),

        []
    );
    console.log('les users', Users);

    return (
      // <h2>Section title</h2>
    <div className={`  d-flex col-12 justify-content-center`}>
        <div className={`table-responsive col-sm-9 ${style.respensivepadding} col-12`}>
        <table className="table table-striped table-sm ">
        <thead>
                    <tr>
                 <th scope="col"></th>
                 <th scope="col">Nom</th>
                 <th scope="col">PreNom</th>
                 <th scope="col">Email</th>
                 <th scope="col">Adresse</th>
                 <th scope="col">Téléphone</th>
                 <th scope="col">roles</th>
                 <th scope="col">sexe</th>
                 <th scope="col">cabinet</th>
             </tr>
         </thead>
        <tbody>
           {Users.map((User, index) => (
               <tr key={User.id}>
                   <th scope="row">{index + 1}</th>
                   <td>{User.userName}</td>
                   <td>{User.userfirstName}</td>
                   <td>{User.email}</td>
                   <td>{User.address}</td>
                   <td>{User.tel}</td>
                   <td>{User.roles}</td>
                   <td>{User.sexe}</td>
                   <td>{User.cabinet}</td>
               </tr>
           ))}
       </tbody>
        </table>
      </div>
  
    </div>
    
    
    );
};

export default TableUsers;
