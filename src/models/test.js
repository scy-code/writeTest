
export default {

    namespace: 'test',
  
    state: {
        age:50
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *chengemodule({ value }, { call, put }) {  // eslint-disable-line
        yield put({ 
          type: 'save' ,
          payload:{
            age:value.sendmsg
          }
        
        });
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  