 
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="flex-md      ">
            <div className="flex pt-16 flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                     
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded ">
                                <Link
                                    to="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <i className="fas fa-address-book"></i>
                                    <span>Contacts</span>
                                </Link>
                            </li>
                            <li className="rounded">
                                <Link
                                    to="home"
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                    <i className="fas fa-database"></i>

                                    <span>Charts And Maps</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}