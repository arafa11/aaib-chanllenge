import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { getRportsAsync, resolveReportAsync, blockReportAsync} from '../../redux/actions/reportsActions';

const Reports = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRportsAsync());
  },['reports']);
  const reports = useSelector((state) => state.reports.reports);
  console.log('rep', reports);

  const resolve = (reportId) => {
    dispatch(resolveReportAsync(reportId));
  }

  const block = (reportId) => {
    dispatch(blockReportAsync(reportId));
  }

  const renderReport = () => {
    return reports && reports.map((report,i) => {
      return (
        <div className="report-row">
          <div className="row">
            <div className="col-sm-4">
              <p>Id: {report.id}</p>
              <p>State: {report.state}</p>
              <p><a href="#">Details</a></p>
            </div>
            <div className="col-sm-4">
              <p>Type: {report.payload.reportType}</p>
              <p>Message: {report.payload.message}</p>
            </div>
            <div className="col-sm-4">
              <Button color="primary" size="sm" className="action-button" onClick={resolve(report.id)}>resolve</Button>
              <Button color="danger" size="sm" className="action-button" onClick={block(report.id)}>block</Button>
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="container">
      <div className="reportsPage">
        
        <div className="row">
          <div className="col-sm-12">
            <h3>Reports</h3>
          </div>
        </div>
        { renderReport() }
      </div>
    </div>
  )
}

export default Reports;