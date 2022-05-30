import { Radio, Space, Table, Tag, Button, PlusOutlined, showDrawer } from 'antd';
import { useState } from 'react';
import { EyeTwoTone } from '@ant-design/icons';
import Edit from './Edit';
import View from './View';

const columns = [
  {
    title: 'Invoice #',
    dataIndex: 'invoice',
    key: 'invoice',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Treatment',
    dataIndex: 'treatment',
    key: 'treatment',
  },
  {
    title: 'Next Visit',
    dataIndex: 'nextvisit',
    key: 'nextvisit',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          if (tag === 'loser') {
            color = 'volcano';
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">



        <Edit />
        <View />


        {/* <EyeTwoTone  twoToneColor="#eb2f96" />
        <a>Delete</a> */}
      </Space>
    ),
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

function Data() {

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

export default Data;