import react from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import PublicLayout from '../Layout/PublicLayout';
import Dashboard from '../Pages/Admin/Dashboard';
import Roles from '../Pages/Admin/Roles';
import Index from '../Pages/Public';

const Routes=()=>{
    return(
        <Router>
            <switch> 
                <Route path={['/dash', 'roles','ventas']}>
                    <PrivateLayout>
                        <switch>
                            <Route path='/dash'>
                                <Dashboard/>
                            </Route>
                            <Route path='/roles'>
                                <Roles/>
                            </Route>
                            <Route path='/ventas'>
                                <Ventas/>
                            </Route>
                        </switch>
                    </PrivateLayout>
                </Route>

                <Route path='/'>
                    <PublicLayout>
                        <Index />
                    </PublicLayout>
                </Route>
            </switch>
        </Router>
    )
}

export default Routes