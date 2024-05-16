import './Mainpage.css'
import Users from './Data'

function Mainpage() {


    return (
        <div>
            <div className="container">
                <div className='row'>
                    <div className="cards-main">
                        
                            {
                                Users.map((Users) => {
                                    return (
                                        <>
                                        <div className="allcards gap-3 d-flex justify-center col-12">
                                            <div className="col-4 border-radius card-pote">
                                                {/* Top Card */}
                                                <div className="topCard d-flex">
                                                    <div className="topCardLeft">
                                                        <img src={Users.image} alt="" />
                                                    </div>
                                                    <div className="topCardRight">
                                                        <div className="name">
                                                            <h1>"{Users.firstName}"</h1>
                                                        </div>
                                                        <div className="email">
                                                            <p>{Users.email}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Bottom Card */}
                                                <div className="bottomCard">
                                                    <div className="fullName p-9"><b>FullName :</b>
                                                         <u>{Users.firstName} {Users.maidenName} {Users.lastName}</u>
                                                    </div>
                                                    <div className="phone p-9">
                                                        <b>Phone : </b><u>{Users.phone}</u>
                                                    </div>
                                                    <div className="dob p-9">
                                                        <b>DOB : </b><u>{Users.birthDate}</u>
                                                    </div>
                                                    <div className="address p-9">
                                                        <b>Address : </b><u>{Users.address.address} {Users.address.city}</u>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Mainpage;





// <div className="col-4 border-radius">
//                                 {/* Top Card */}
//                                 <div className="topCard d-flex">
//                                     <div className="topCardLeft">
//                                         <img src={person.image} alt="" />
//                                     </div>
//                                     <div className="topCardRight">
//                                         <div className="name">
//                                             <h1>{person.firstName}</h1>
//                                         </div>
//                                         <div className="email">
//                                             <p>{person.email}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Bottom Card */}
//                                 <div className="bottomCard">
//                                     <div className="fullName p-9">
//                                         {person.firstName} {person.maidenName} {person.lastName}
//                                     </div>
//                                     <div className="phone p-9">
//                                         {person.phone}
//                                     </div>
//                                     <div className="dob p-9">
//                                         {person.birthDate}
//                                     </div>
//                                     <div className="address p-9">
//                                         {person.address.address} {person.address.city}
//                                     </div>
//                                 </div>
//                             </div>