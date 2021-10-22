import { Sidebar } from './Sidebar'
import {Content} from './Content'
import './Body.css'

export const Body = () => {

    return <div className="body">
        <Sidebar/>
        <Content/>
    </div>

}