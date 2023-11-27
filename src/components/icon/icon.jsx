import React            from 'react';
import { Burger }       from './ic_burger.jsx'
import { Logo }         from './ic_logo.jsx'
import { Call }         from "./ic_call.jsx";
import { Chat }         from "./ic_chat.jsx";
import { CheakStatus }  from "./ic_checkstatus.jsx";
import { Profile }      from "./ic_profile.jsx";
import { Repair }       from "./ic_repair.jsx";
import { Close }        from "./ic_close.jsx";
import { Search }       from "./ic_search.jsx";
import { Expland }      from "./ic_expland.jsx";
import { Arrow }        from "./ic_arrow.jsx";
import { ArrowRight }   from "./ic_arrowRight.jsx";

const Icon = props => {
    switch (props.name.toLowerCase()) {
        case 'burger':
            return <Burger {...props} />
        case 'logo':
            return <Logo {...props} />
        case 'call':
            return <Call {...props} />
        case 'chat':
            return <Chat {...props} />
        case 'checkstatus':
            return <CheakStatus {...props} />
        case 'profile':
            return <Profile {...props} />
        case 'repair':
            return <Repair {...props} />
        case 'close':
            return <Close {...props} />
        case 'search':
            return <Search {...props} />
        case 'expland':
            return <Expland {...props} />
        case 'arrow':
            return <Arrow {...props} />
        case 'arrowright':
            return <ArrowRight {...props} />
        default:
            return <div />
    }
}

export { Icon };