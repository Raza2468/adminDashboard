import React from 'react';


import { Table, Radio, Divider, InputNumber, message } from 'antd';

import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space } from 'antd';
import { EditTwoTone } from '@ant-design/icons';

const { Option } = Select;

function Edit () {
  const [visible, setVisible] = React.useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const success = () => {
    message.success('This is a success message');
  };
  return (
    <>
    
      <Button onClick={showDrawer} icon={<EditTwoTone />}>
      
      </Button>
      <Drawer
        title="Edit Patient"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button onClick={onClose} type="primary">
        //       Submit
        //     </Button>
        //   </Space>
        // }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Patient Name"
                label="Patient Name"
                rules={[{ required: true, message: 'Please enter patient name' }]}
              >
                <Input placeholder="Please enter patient name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="Date"
                rules={[{ required: true, message: 'Please choose the dateTime' }]}
              >
                <DatePicker
                // .RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={trigger => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              {/* <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: 'Please select an owner' }]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item> */}
                <Form.Item
                name="name"
                label="Number"
                rules={[{ required: true, message: 'Please enter user number' }]}
              >
                <Input placeholder="Please enter user number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              {/* <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: 'Please choose the type' }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item> */}
                <Form.Item
                name="name"
                label="Age"
                rules={[{ required: true, message: 'Please enter user age' }]}
              >
                <Input placeholder="Please enter user age" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              {/* <Form.Item
                name="approver"
                label="Approver"
                rules={[{ required: true, message: 'Please choose the approver' }]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item> */}
                <Form.Item
                name="name"
                label="Address"
                rules={[{ required: true, message: 'Please enter user address' }]}
              >
                <Input placeholder="Please enter user address" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="PC"
                rules={[{ required: true, message: 'Please choose the pc' }]}
              >
                  <Input placeholder="Please enter user pc" />
                
              </Form.Item>
            </Col>
          </Row>


          <Row gutter={16}>
            <Col span={12}>
              {/* <Form.Item
                name="approver"
                label="Approver"
                rules={[{ required: true, message: 'Please choose the approver' }]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item> */}
                <Form.Item
                name="name"
                label="Treatment"
                rules={[{ required: true, message: 'Please enter user treatment' }]}
              >
                <Input placeholder="Please enter user treatment" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="Next Visit"
                rules={[{ required: true, message: 'Please choose the next visit' }]}
              >
                <DatePicker
                // .RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={trigger => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>


          <Row gutter={16}>
            <Col span={12}>
              {/* <Form.Item
                name="approver"
                label="Approver"
                rules={[{ required: true, message: 'Please choose the approver' }]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item> */}
                <Form.Item
                name="name"
                label="Total Amount"
                rules={[{ required: true, message: 'Please enter user total amount' }]}
              >
                <Input placeholder="Please enter user total amount" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="Paid Amount"
                rules={[{ required: true, message: 'Please choose the paid amount' }]}
              >
                  <Input placeholder="Please enter user paid amount" />
                
              </Form.Item>
            </Col>
          </Row>



          <Row gutter={16}>
            <Col span={24}>
              {/* <Form.Item
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
              </Form.Item> */}


<Radio.Group
        onChange={({ target: { value } }) => {
        
        }}
      
      >
        <Radio value="Male">Male</Radio>
        <Radio value="Female">Female</Radio>
      </Radio.Group>

            </Col>
          </Row>
        </Form>
       
          <Space>
            <Button  onClick={onClose}>Cancel</Button>
            <Button onClick={success} type="primary">
              Submit
            </Button>
          </Space>
        
      </Drawer>
    </>
  );
};

export default Edit;