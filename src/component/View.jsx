import {  Col, Divider, Drawer, List, Row, Button } from 'antd';
import { useState } from 'react';
import { EyeTwoTone } from '@ant-design/icons';
import './View.css';


const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

function View () {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>


      {/* <List
        dataSource={[
          {
            id: 1,
            name: 'Lily',
          },
         
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <a onClick={showDrawer} key={`a-${item.id}`}>
                View Profile
              </a>,
            ]}
          >
            <List.Item.Meta
             
            />
          </List.Item>
        )}
      /> */}

<Button onClick={showDrawer} icon={<EyeTwoTone />}>
      
      </Button>
      <Drawer width={640} placement="right" closable={false} onClose={onClose} visible={visible}>
        <p
          className="site-description-item-profile-p"
          style={{
            marginBottom: 24,
          }}
        >
          Patient Details
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Patient Name" content="Lily" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Age" content="AntDesign@example.com" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Gender" content="HangZhou" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Status" content="China🇨🇳" />
          </Col>
        </Row>
  
        <Divider />
         <p className="site-description-item-profile-p">Contact</p>

         <Row>
          <Col span={12}>
            <DescriptionItem title="Phone Number:" content="February 2,1900" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Address:" content="-" />
          </Col>
        </Row>
         <Divider />
         <p className="site-description-item-profile-p">Treatment</p>

         <Row>
          <Col span={12}>
            <DescriptionItem title="PC" content="February 2,1900" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Treatment" content="-" />
          </Col>
        </Row>
         <Divider />
         <p className="site-description-item-profile-p">Visit</p>

         <Row>
          <Col span={12}>
            <DescriptionItem title="First Visit" content="February 2,1900" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Next Visit" content="-" />
          </Col>
        </Row>
         <Divider />
         <p className="site-description-item-profile-p">Amount</p>

         <Row>
          <Col span={12}>
            <DescriptionItem title="Total Amount" content="February 2,1900" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Paid Amount" content="-" />
          </Col>
        </Row>
        {/* <Divider />
        <Row>
          <Col span={12}>
            <DescriptionItem title="Position" content="Programmer" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Responsibilities" content="Coding" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Department" content="XTech" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Skills"
              content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Email" content="AntDesign@example.com" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Github"
              content={
                <a href="http://github.com/ant-design/ant-design/">
                  github.com/ant-design/ant-design/
                </a>
              }
            />
          </Col>
        </Row> */}
      </Drawer>
    </>
  );
};

export default View;