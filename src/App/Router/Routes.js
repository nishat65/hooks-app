import React from 'react'
import { Route } from 'react-router-dom'

import RoutesConfig from './RoutesConfig'

const Routes = () => {
    return ( 
        <React.Fragment>
            {
                RoutesConfig.map((routeConfig) => {
                   return (
                       <div key={routeConfig.routeKey}>
                           <Route  
                           {...routeConfig}
                           />
                        </div>
                   )
                })
            }
        </React.Fragment>
     );
}
 
export default Routes;