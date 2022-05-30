import { AutoComplete, Space } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import TableCom from './ExpenseTable';



const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];

function ExpenseData  ()  {
    return(
<>

     
  <AutoComplete
    style={{
      width: 600,
  //    marginLeft:"20%",
    }}
    size="large"
    options={options}
    placeholder="Search Item"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
  {/* <AutoComplete
    style={{
      width: 300,
    }}
    options={options}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
   */}
  
    <Button type="primary" icon={<SearchOutlined />}  style={{  textAlign: 'center',marginLeft:"2%"}} size="large"  >
      Search
    </Button>
    




<TableCom/>


</>
)
};

export default ExpenseData;