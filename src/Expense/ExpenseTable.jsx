import { Radio, Space, Table, Tag, Button, PlusOutlined, showDrawer } from 'antd';
import { useState } from 'react';



const columns = [
  {
    title: 'S.NO',
    dataIndex: 's.nO',
    key: 's.nO',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  
 

];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser', 'sfj'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'loser'],
  },
];

function TableCom() {

  const [bottom, setBottom] = useState('bottomRight');
  return (
    <div style={{marginTop:20}}>
      <Table
        columns={columns}
        pagination={{
          position: [ bottom],
        }}
        dataSource={data}
      />
    </div>
  );
};

export default TableCom;