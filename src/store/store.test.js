import expect from 'expect'
import {createStore} from 'redux'
import rootReducer from '../reducers'
import initialState from '../reducers/initialState'

describe('Store',() => {
  /*it('Should handle creating courses', () => {
    const store = createStore(rootReducer, initialState)
    const course = {
      title: 'Clean Course'
    }

    const action = courseActions.createCourseSuccess(course)
    store.dispatch(action)

    const actual = store.getState().courses[0]
    const expected = {
      title: 'Clean Course'
    }

    expect(actual).toEqual(expected)
  })*/
})
