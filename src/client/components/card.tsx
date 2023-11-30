import {FC} from "react";
import {Content} from "../_metronic/layout/components/content";
import {Outlet} from "react-router-dom";

const Card: FC = ({children}) => {
    return (<div className='card card-flush'>
        {/*<div className='card-body'></div>*/}
        {/*<Content>*/}
        {children}
        {/*<Outlet/>*/}
        {/*</Content>*/}
    </div>)
}

export {Card}