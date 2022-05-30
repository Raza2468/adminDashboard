import { AutoComplete, Space } from 'antd';
import React from 'react';
import Data from '../Data';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
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

function SearchCom  ()  {
    return(
<>

      
  <AutoComplete
    style={{
      width: 600,
      marginLeft:"20%",
     // background:"#ljklljkl"
    }}
    size="large"
    options={options}
    placeholder="Search Patient"
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
  
    <Button type="primary" icon={<SearchOutlined />}  style={{  textAlign: 'center',  marginLeft:"3%"}} size="large"  >
      Search
    </Button>
    





<Data  style={{marginTop:20}}
/>

</>
)
};

export default SearchCom;