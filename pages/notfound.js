import Image from 'next/image';

import nofund from "../assets/nofund.png"


function Nofound() {
    return (
        <div className="col-12 d-flex py-5">
                <div className="col-12 col-sm-4 p-5">
                <Image src={nofund} width="300" height="300" className="" alt="No fund" />
                </div>
                <div className="col-sm-8 col-12">
                    <div className="d-flex py-5 align-items-center">
                       <h1 className="d-flex py-5">404 | Cette page n'a pas été trouvée</h1> 
                    </div>
                </div>
        </div>
    )
}

export default Nofound
