import { GET_ALL_REPORTS, GET_ALL_REPORTS_SUCCESS, GET_ALL_REPORTS_FAIL,
RESOLVE_REPORT, RESOLVE_REPORT_SUCCESS, RESOLVE_REPORT_FAIL, 
BLOCK_REPORT, BLOCK_REPORT_SUCCESS, BLOCK_REPORT_FAIL,
} from '../actionTypes';

const INIT_STATE = {
  reports: [],
  error: '',
  message: '',
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch(action.type) {
    case GET_ALL_REPORTS:
    case RESOLVE_REPORT:
    case BLOCK_REPORT:
      return { ...state, loading: true };
    case GET_ALL_REPORTS_SUCCESS:
      return { ...state, loading: false, reports: action.data };
    case RESOLVE_REPORT_SUCCESS:
    case BLOCK_REPORT_SUCCESS:
      return { ...state, loading: false, message: action.data };
    case GET_ALL_REPORTS_FAIL:
      return { ...state, loading: false, reports: [], error: action.error};
    case RESOLVE_REPORT_FAIL:
    case BLOCK_REPORT_FAIL:
      return { ...state, loading: false, error: action.error, message: ''};
    default: return { ...state };
  }
}