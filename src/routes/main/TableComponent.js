import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 100,
  },
];

const TableComponent = () => {
  return (
    <div>
      <BootstrapTable keyField="id" data={products} columns={columns} />
    </div>
  );
};

export default TableComponent;
