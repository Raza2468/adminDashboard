import { PlusOutlined } from '@ant-design/icons';
import {  Col, DatePicker, Drawer, Form, Input, Row,Button, Select,Space } from 'antd';
import { useState } from 'react';
import ExpenseData from './ExpenseData';









const { Option } = Select;

function Expense  () {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div >
    
      <Button  type="primary" onClick={showDrawer} icon={<PlusOutlined />} size="large" style={{marginRight:"20%" }} >
        Add New Expense
      </Button>
      <Drawer
        title="Create a New Expense"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button onClick={onClose} type="primary">
        //       Submit
        //     </Button>
        //   </Space>
        // }
      >
        <Form layout="vertical" hideRequiredMark  style={{background:"#dsfdsf"}}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="item"
                label="Item"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user item',
                  },
                ]}
              >
                <Input placeholder="Please enter user item" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="amount"
                label="Amount"
                rules={[
                  {
                    required: true,
                    message: 'Please enter amount',
                  },
                ]}
              >
                <Input placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
        
          <Row gutter={16}>
           
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: '100%',
                  }}
               //   getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
         
          <Space>
            <Button onClick={onClose}   size="large">Cancel  </Button>
            <Button onClick={onClose} type="primary"   size="large">
              Save
            </Button>
          </Space>

        </Form>

      
      </Drawer>



<ExpenseData/>







    </div>
  );
};

export default Expense;