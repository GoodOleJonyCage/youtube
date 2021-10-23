import { Sidebar } from './Sidebar'
import { Content } from './Content'
import './Body.css'

export const Body = (props) => {

    return <div className="body">
        <Sidebar {...props}/>
        <Content {...props} />
    </div>

}