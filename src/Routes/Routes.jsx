import react from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import PublicLayout from '../Layout/PublicLayout';
import PrivateLayout from '../Layout/PrivateLayout';
import Dashboard from '../Pages/Admin/Dashboard';
import Ventas from '../Pages/Admin/Ventas';
import Roles from '../Pages/Admin/Roles';
import Index from '../Pages/Public';
import Feature from '../Pages/Public/Feature';

const Routes=()=>{
    return(
        <Router>
            <switch> 
                <Route path={['/dash', '/roles','/ventas']}>
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

                <Route path= {['/feature', '/']}>
                    <PublicLayout>
                        <switch>
                            <Route path='/feature'>
                                <Feature/>
                            </Route>

                            <Route path='/'>
                                <Index/>
                            </Route>
                         
                        </switch>
                    </PublicLayout>
                </Route>
            </switch>
        </Router>
    )
}

export default Routes