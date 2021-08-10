import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const AppBreadcrumb = () => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default AppBreadcrumb;