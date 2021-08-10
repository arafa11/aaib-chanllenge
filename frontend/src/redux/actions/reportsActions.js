import axios from '../../utils/axios'
import { GET_ALL_REPORTS, GET_ALL_REPORTS_SUCCESS, GET_ALL_REPORTS_FAIL,
  RESOLVE_REPORT, RESOLVE_REPORT_SUCCESS, RESOLVE_REPORT_FAIL, 
  BLOCK_REPORT, BLOCK_REPORT_SUCCESS, BLOCK_REPORT_FAIL,
} from '../actionTypes';

export const getRportsAsync = () => {
  return async dispatch => {
    dispatch(getReports());
    try {
      const getReportsResponse = await axios.get('reports/open');
      console.log('response: getReports', getReportsResponse);
      if(getReportsResponse.status === 200) {
        dispatch(getReportsSuccess(getReportsResponse.data));
      }else {
        console.log('responseError: getReports', getReportsResponse);
        dispatch(getReportsFail(getReportsResponse.message));
      }
    } catch (error) {
      console.log('error: getOTP', error.message);
      dispatch(getReportsFail(error.message));
    }
  }
}

const getReports = () => { return { type: GET_ALL_REPORTS }; }
const getReportsSuccess = (data) => { return { type: GET_ALL_REPORTS_SUCCESS, data }; }
const getReportsFail = (error) => { return { type: GET_ALL_REPORTS_FAIL, error }; }

export const resolveReportAsync = (reportId) => {
  return async dispatch => {
    dispatch(resolveReport());
    try {
      const resolveReportResponse = await axios.put('reports/resolve/'+reportId);
      console.log('response: resolveReport', resolveReportResponse);
      if(resolveReportResponse.status === 200) {
        dispatch(resolveReportSuccess(resolveReportResponse.data));
      }else {
        console.log('responseError: resolveReport', resolveReportResponse);
        dispatch(resolveReportFail(resolveReportResponse.message));
      }
    } catch (error) {
      console.log('error: resolve', error.message);
      dispatch(resolveReportFail(error.message));
    }
  }
}

const resolveReport = () => { return { type: RESOLVE_REPORT }; }
const resolveReportSuccess = (data) => { return { type: RESOLVE_REPORT_SUCCESS, data }; }
const resolveReportFail = (error) => { return { type: RESOLVE_REPORT_FAIL, error }; }


export const blockReportAsync = (reportId) => {
  return async dispatch => {
    dispatch(blockReport());
    try {
      const blockReportResponse = await axios.put('reports/resolve/'+reportId);
      console.log('response: resolveReport', blockReportResponse);
      if(blockReportResponse.status === 200) {
        dispatch(blockReportSuccess(blockReportResponse.data));
      }else {
        console.log('responseError: blockReport', blockReportResponse);
        dispatch(blockReportFail(blockReportResponse.message));
      }
    } catch (error) {
      console.log('error: block', error.message);
      dispatch(blockReportFail(error.message));
    }
  }
}

const blockReport = () => { return { type: BLOCK_REPORT }; }
const blockReportSuccess = (data) => { return { type: BLOCK_REPORT_SUCCESS, data }; }
const blockReportFail = (error) => { return { type: BLOCK_REPORT_FAIL, error }; }