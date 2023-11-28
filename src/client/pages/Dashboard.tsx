import {FC} from 'react'
import {useIntl} from 'react-intl'

import {ChartsWidget1} from "../_metronic/partials/widgets";
import {PageLink, PageTitle} from "../_metronic/layout/core";

const DashboardPage: FC = () => (<div>
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>

        this is the text from the dashboard page
        {/*<ChartsWidget1 className={"card-xl-stretch mb-xl-8"}/>*/}
    </div>

</div>);

const DashboardBreadCrumbs: Array<PageLink> = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        isSeparator: false,
        isActive: false,
    }
]

const DashboardWrapper: FC = () => (<div>
        <PageTitle breadcrumbs={DashboardBreadCrumbs}>Dashboard</PageTitle>

        <DashboardPage/>
    </div>
);

export {DashboardWrapper};