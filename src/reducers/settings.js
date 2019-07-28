export default (state =
  {loading: false,
   setting: {}
  },
   action) => {
     switch(action.type) {

       case 'SEDNING_SETTINGS':
         return {...state, loading: true}

       case 'CREATE_SETTINGs':
       return {...state, loading: false, settings: action.settings}

       default:
         return state;
     }
   }
