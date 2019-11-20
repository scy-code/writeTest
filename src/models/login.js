
export default {

    namespace: 'login',
  
    state: {
      hello: ''
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *update({ payload }, { call, put }) {  // eslint-disable-line
        console.log(payload, 'payload')
        yield put({
          type: 'save',
          payload: payload
        })
      },
    // dispatch触发effects下的action
    *change({payload},{put}){
yield put({
  type:"save",
  payload: {
    hello:payload.msg
  }
})

    }
    },
  
    reducers: {
      save(state, action) {
        console.log(action)
        return { ...state, ...action.payload };
      },
    },
  
  };
  