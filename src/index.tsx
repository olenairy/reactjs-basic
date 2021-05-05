import ReactDOM from 'react-dom'
import GuestList from './state/GuestList'
import Parent from './props/Parent'
import UserSearch from './state/UserSearch'
import UserSearchClass from './classes/UserSearchClass'
import UserSearchRef from './refs/UserSearchRef'

import EventComponent from './events/EventComponent'
const App = () => {

    return ( <div>
        <GuestList />
        <hr />
        <Parent />
        <hr />
        <UserSearch />
        <hr />
        <EventComponent />

        <UserSearchRef />
    </div>)

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
