import {combineReducers} from 'redux';
import contactList from './clients-reducer'

const rootReducer = combineReducers({
    contactList
});
export default rootReducer;