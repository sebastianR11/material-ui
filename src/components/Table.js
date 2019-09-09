import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'ID', field: 'id' },
      { title: 'Articulo', field: 'articulo' },
      { title: 'Cantidad', field: 'cantidad', type: 'numeric' },
      { title: 'Ubicacion', field: 'ubicacion' },
      { title: 'Reserva', field: 'reserva' },

    ],
    data: [
      { id: '1', articulo: 'Arduino UNO', cantidad: 30, ubicacion: 'A1', reserva: 22 },
      { id: '2', articulo: 'Arduino 2', cantidad: 10, ubicacion: 'B2', reserva: 0 },
      { id: '3', articulo: 'LED Verde', cantidad: 100, ubicacion: 'C5', reserva: 50 },
    ],
  });

  return (
    <MaterialTable
      title="Inventario"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
