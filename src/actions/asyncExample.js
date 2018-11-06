import {
  createAction
} from 'redux-actions'

const promiseFunction = () => Promise.resolve(5)
//async
export const testAsyncFunction = createAction('TEST_ASYNC_FUNCTION', async () => {
  let rst = await promiseFunction ()
  return rst || 0
})