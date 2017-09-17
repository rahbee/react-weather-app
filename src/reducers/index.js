import {combineReducers} from 'redux';
import BooksReducer from './reducer_books'

let books = [];
const rootReducer = combineReducers({
  books : BooksReducer
});

export default rootReducer;