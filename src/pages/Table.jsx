import { useState, useEffect, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';

export default function Table({ items, onCreateAnother }) {
  const [filterOption, setFilterOption] = useState('All');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (selectedRowData) {
      setActiveItem(selectedRowData);
    }
  }, [selectedRowData]);

  const handleRowClick = (item) => {
    setSelectedRowData(item);
  };

  const filteredItems = useMemo(() => {
    if (filterOption === 'All') return items;
    return items.filter(
      (item) =>
        item.userRole === filterOption ||
        item.bodyType === filterOption ||
        item.compName === filterOption ||
        item.brand === filterOption
    );
  }, [items, filterOption]);

  const columns = useMemo(
    () => [
      { header: 'Item Name', accessorKey: 'guitModel' },
      { header: 'Body Type', accessorKey: 'bodyType' },
      { header: 'Brand', accessorKey: 'brand' },
      { header: 'Stock', accessorKey: 'stock' },
      { header: 'Company Name', accessorKey: 'compName' },
      { header: 'User Role', accessorKey: 'userRole' },
    ],
    []
  );

  const table = useReactTable({
    data: filteredItems,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 3,
      },
    },
  });

  let detailContent = <p>Click a row in the table to view details.</p>;
  if (activeItem) {
    detailContent = (
      <div>
        <p><strong>Item Name:</strong> {activeItem.guitModel}</p>
        <p><strong>Body Type:</strong> {activeItem.bodyType}</p>
        <p><strong>Brand:</strong> {activeItem.brand}</p>
        <p><strong>Stock:</strong> {activeItem.stock}</p>
        <p><strong>Company Name:</strong> {activeItem.compName}</p>
        <p>
          <strong>User Role Badge:</strong> <span>[{activeItem.userRole}]</span>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Registry Table View</h1>

      <div>
        <button onClick={onCreateAnother}>Create Another Order</button>
      </div>

      <div>
        <label>Filter By: </label>
        <select
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Consumer">Consumer</option>
          <option value="Merchant">Merchant</option>
          <option value="Electric">Electric</option>
          <option value="Acoustic">Acoustic</option>
          <option value="Bass">Bass</option>
          <option value="Classical">Classical</option>
          <option value="Ibanez">Ibanez</option>
          <option value="Yamaha">Yamaha</option>
          <option value="Fender">Fender</option>
          <option value="Gibson">Gibson</option>
          <option value="Gretsh">Gretsh</option>
        </select>
      </div>

      <table border="1" cellPadding="8" style={{ marginTop: '1rem', width: '100%' }}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Body Type</th>
            <th>Brand</th>
            <th>Stock</th>
            <th>Company Name</th>
            <th>User Role</th>
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            const item = row.original;
            return (
              <tr
                key={row.id}
                onClick={() => handleRowClick(item)}
                style={{ cursor: 'pointer' }}
              >
                <td>{item.guitModel}</td>
                <td>{item.bodyType}</td>
                <td>{item.brand}</td>
                <td>{item.stock}</td>
                <td>{item.compName}</td>
                <td>{item.userRole}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <span style={{ margin: '0 1rem' }}>
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount() || 1}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Active Item Profile Detail Card</h2>
        {detailContent}
      </div>
    </div>
  );
}
