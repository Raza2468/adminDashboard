import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import './Dashboard.css';
import Data from '../Data';
import Cards from '../Cards/Cards';
import NewPatient from '../NewPatient';
import Expense from '../../Expense/Expense';
import SearchCom from '../Search/Search';



const { Header, Sider, Content } = Layout;

export const Dashboard = () => {

  let navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    if (trigger == 5) {
      setTrigger(0)
    }
  }, [])

  const logout = () => {
    setTrigger(5);
    navigate('/')
  }
  console.log(collapsed);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">


        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              // icon: <DashboardOutlined  onClick={()=>setTrigger(1)} />,
              // label: 'Dashboard',
              label: <div onClick={() => setTrigger(1)}><i className='fa fa-home fa-lg'></i> <span style={{ marginLeft: '5%' }}> {!collapsed ? ' Home' : ''}</span></div>,

            },
            {
              key: '2',
              // icon: <UserAddOutlined onClick={()=>setTrigger(2)} />,
              // label: 'New Patient',
              label: <div onClick={() => setTrigger(2)}><i className='fa fa-user-plus fa-lg'></i>  <span style={{ marginLeft: '5%' }}> {!collapsed ? ' New Patient' : ''}</span></div>,


            },
            {
              key: '3',
              // icon: <TeamOutlined onClick={()=>setTrigger(3)} /> ,
              // label: 'Patient Data',
              label: <div onClick={() => setTrigger(3)}><i className='fa fa-users fa-lg'></i> <span style={{ marginLeft: '5%' }}>{!collapsed ? ' Patient Data' : ''}</span></div>,

            },
            {
              key: '4',
              // icon: <DollarOutlined onClick={()=>setTrigger(4)} />,
              label: <div onClick={() => setTrigger(4)}><i className='fa fa-money fa-lg' ></i> <span style={{ marginLeft: '5%' }}> {!collapsed ? '      Expense' : ''}</span></div>,
              // label: 'Expense',
            },
            {
              key: '5',
              // icon: <LoginOutlined onClick={()=>setTrigger(5)} />,
              label: <div onClick={() => logout()}><i className='fa fa-sign-out fa-lg'></i> <span style={{ marginLeft: '5%' }}> {!collapsed ? ' Log Out' : ''}</span></div>,
              // label: 'Log Out',

            },



          ]}
        />
      </Sider>

      <Layout className="site-layout">

        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}


        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '80vh',
          }}
        >

          {
            trigger == 1 ? (
              <>
                <Cards />


                <Data />

              </>
            ) :
              trigger == 2 ? (
                <>
                  <NewPatient />
                </>
              ) :
                trigger == 3 ? (
                  <>
                    <SearchCom />
                  </>
                ) : (
                  <>
                    <Expense />

                  </>
                )
          }

        </Content>
      </Layout>
    </Layout>
  );

}

// export default () => <Dashboard />;