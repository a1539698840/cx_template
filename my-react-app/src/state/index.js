import {observable, action} from 'mobx';
import user from './user'
let AppState = observable({
    theme: 'light',
    ...user

})
AppState.changeTheme = action((value) => {
    AppState.theme = value
})

AppState.setUserInfo = action((value) => {
    AppState.userInfo = value
})

export default AppState