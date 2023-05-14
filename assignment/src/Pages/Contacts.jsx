import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Popup from "../Components/Popup"
import { removeContact } from "../Redux/action"

const Contacts = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [singleContact, setSingleContact] = useState({})
    let data = undefined
    const AllContacts = useSelector((store) => store.contacts)
    const dispatch = useDispatch()

    const togglePopup = (contact) => {
        setSingleContact(contact)
        setIsOpen(!isOpen)
    }

    useEffect(() => {

    }, [dispatch, AllContacts.length])

    return (
        <div className="justify-center pt-16 text-gray-50 p-4 box-border  ">
            <div className="mt-10 text-center m-5">
                <button className=" p-3 text-yellow-500 border border-yellow-500   sm:text-sm sm:ml-8">
                    <Link to="/contact">
                        Create Contact
                    </Link>
                </button>
            </div>
            {AllContacts.length == 0 && <div className="m-auto w-fit p-4 align-middle align-middle text-yellow-500 justify-center">
                <h4 className="  p-4" style={{border:'2px orange solid'}}>❌ No Contact Found. Please add a contact from the Create Contact button.</h4>
            </div>}
            <div id="contact_list" className="grid grid-cols-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {AllContacts.map((el) => {
                    return <div key={el.id} className="flex-col box bg-orange-600 rounded-lg shadow-md m-4 p-3 text-white sm:p-3 sm:ml-11 sm:mr-0">
                        <div onClick={() => togglePopup(el)} className="w-3/4 m-auto">
                             
                            <div className="p-4 box">
                                    {isOpen &&
                                        <Popup close={() => togglePopup(data)} el={singleContact} />

                                    }
                                </div>    <div className="text-center bg-yellow-100 text-black  w-full p-3 sm:text-sm">
                                    <p>  {el.first_name}</p>
                                    <p>  {el.last_name}</p>
                                    <p>  {el.status == "active" ? "Active" : "Inactive"}</p>
                                </div>

                            </div>

                            <div className="grid my-2">
                                <Link to={`edit/${el.id}`}>
                                <button className="rounded-pill w-full mb-2 px-6 py-1  bg-yellow-400 text-white sm:px-2 sm:py-1">

                                        Edit
                                    </button>
                                </Link>
 
                                <button onClick={() => dispatch(removeContact(el.id))} className="rounded px-6 py-1  bg-red-600 text-white sm:px-2 sm:py-1">Delete</button>
                            </div>
                        </div>
                    })
                }


            </div>

        </div>
    )
}

export default Contacts