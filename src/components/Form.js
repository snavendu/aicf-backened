import React from 'react'
import { Form, Input, Select, Row, Col, Checkbox, Button, Upload, message, Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const { TextArea } = Input;

const areas = [
    { label: 'Beijing', value: 'Beijing' },
    { label: 'Shanghai', value: 'Shanghai' },
];

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
};
  
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  



const renderForm = () => {
    return (
        <>
            <Row gutter={[30, 20]}>
                <Col span={8}>   
                    
                <Form.Item
                    name="Full Name"
                    label="Full Name"
                    rules={[
                {
                    type: "text",
                },
                
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ]}
            >
                <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    
                <Form.Item
                    name="Telephone/Fax"
                    label="Telephone/Fax"
            >
                <Input />
                    </Form.Item>

                </Col>
                <Col span={8}>
                <Form.Item
                    name="Email"
                    label="Email"
                    rules={[
                {
                    type: "Email",
                },
                
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ]}
            >
                <Input />
                    </Form.Item>
                </Col>                
            </Row>
            <Row gutter={[30, 20]}>
                
                <Col span={8}>
                    <Form.Item name="State" label="State" rules={[{ required: true, message: 'Missing State' }]}>
                        <Select options={areas} />
                    </Form.Item>
                </Col>

                <Col>
                <Form.Item
                    name="Son/Daughter"
                    label="Son/Daughter Of"
                    rules={[
                        {
                        required: true,
                        message: 'Please add your fathers name!',
                        },
                    ]}
                    hasFeedback
                    >
                    <Input />
                </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="Relationship" label="Relationship" rules={[{ required: true, message: 'Add relationship' }]}>
                        <Select options={areas} />
                    </Form.Item>
                </Col>
            </Row>
            

            <Row gutter={[ 30, 20]}>
                
                <Col span={6}>
                    <Form.Item name="Gender" label="Gender" rules={[{ required: true, message: 'Select Gender' }]}>
                        <Select options={areas} />
                    </Form.Item>
                </Col>

                <Col span={6}>
                <Form.Item
                    name="Mother-tounge"
                    label="Mother Tounge"
                    >
                    <Input />
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item
                    name="Mobile Phone"
                    label="Mobile Phone"
                    >
                    <Input />
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item
                    name="Date of Birth"
                    label="Date of Birth"
                    >
                    <Input />
                </Form.Item>
                </Col>
                
            </Row>

            <Row gutter={[ 30, 20]}>
                <Col span={12}>
                    <Form.Item
                        name="Address"
                        label="Address">
                        <TextArea rows={2} />
                    </Form.Item>
                </Col>
            </Row>

            <Row style={{ marginTop: 20 }}>
                <Col span={10}>
                    <Upload {...props}>
                        <Button type="default" icon={<UploadOutlined />}>Passport Size Photo</Button>
                    </Upload>
                    
                    <h4 style={{marginTop: 20}}>
                        (jpg, png or gif images only. 160x200 pixels (width x height). Maximum size 1000 KB)
                        </h4>

                </Col>
                <Col span={10} offset={4}>
                    <Upload {...props}>
                        <Button type="default" icon={<UploadOutlined />}>Birth Certificate</Button>
                    </Upload>
                    <h4 style={{marginTop: 20}}>(Maximum size 1000 KB)</h4>

                </Col>
            </Row>

            <Row gutter={[ 30,20]} style={{ marginTop: 20, marginBottom: 20}}>
                <Col span={8}>
                    <h3>Select Type</h3>
                    <Checkbox onChange={onChange}>Player</Checkbox>
                    <Checkbox onChange={onChange}>Arbiter</Checkbox>
                    <Checkbox onChange={onChange}>Coach</Checkbox>
                </Col>
                <Col span={8}>
                    <h3>Are you a PIO/OCI</h3>
                    <Radio>Yes</Radio>
                    <Radio>No</Radio>
                </Col>
            </Row>
            

            <Row justify="end">
                <Col>
                
        <Form.Item >
          <Button type="primary" size="large" htmlType="submit">
            Submit Form
          </Button>
        </Form.Item>
                </Col>
            </Row>

        </>
    )
}
  

    




export default function FormPRS() {

    

    const [form] = Form.useForm();
  
    const onFinish = (values) => {
    
    console.log('Received values of form: ', values);

    };


    return (
        <div style={{ margin: '40px' }}>
            
            <div style={{ marginBottom: 40}}>

            <h2>
                All India Chess Federation
        </h2>
            
            <p>
                    For existing players please go to your player page and click on extend membership
            </p>
                
            </div>

            

        <Form
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        
  
        {renderForm()}
  
        
      </Form>
            
        </div>
    )
}



