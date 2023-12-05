import { AppRoute } from "app/provider/routes";
import {Navbar} from "widgets/Navbar";

export const App = () => {
    return (
        <div>
            <Navbar />
            <div>
                <AppRoute />
            </div>
        </div>
    )
}
