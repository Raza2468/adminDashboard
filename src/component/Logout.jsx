import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
import { Content } from 'antd/lib/layout/layout';

function LogOut ()  {

    return(
  <>
   
   
    <Avatar
      style={{
        backgroundColor: '#87d068',
   //    marginLeft:'200px'
       
      }}
      icon={<UserOutlined />}
    />
  </>
);
    }
export default LogOut;