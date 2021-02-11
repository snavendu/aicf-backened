import React  from 'react'
import { Form, Input, Select, Row, Col, Checkbox, Button, Upload, message, Radio, Layout, Menu, Breadcrumb, DatePicker } from 'antd';
import { UploadOutlined, HomeOutlined, SearchOutlined, DollarCircleOutlined, FileTextOutlined } from '@ant-design/icons';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const { TextArea } = Input;

const gender = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
];

const relation = [
    { label: 'Daughter', value: 'Daugher' },
    { label: 'Son', value: 'Son' },
    { label: 'Husband', value: 'Husband' },
    { label: 'Son', value: 'Son' },
    { label: 'Brother', value: 'Brother' },
    { label: 'Sister', value: 'Sister' },
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
  
  function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }


const renderForm = () => {
    return (
        <>
            {/* Row number 1 */}

            <Row gutter={[30, 20]}>
                <Col span={8}>   
                    
                <Form.Item
                    name="First Name"
                    label="First Name"
                    rules={[
                {
                    type: "text",
                },
                
                {
                    required: true,
                    message: 'Please input your First Name!',
                },
                ]}
            >
                <Input />
                    </Form.Item>
                </Col>

                <Col span={8}>   
                    
                <Form.Item
                    name="Middle Name"
                    label="Middle Name"
                    rules={[
                {
                    type: "text",
                },
                
                ]}
            >
                <Input />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    
                <Form.Item
                    name="Last name"
                    label="Last Name"
            >
                <Input />
                    </Form.Item>

                </Col>

                </Row>

            
            {/* Row number 2 */}

            <Row gutter={[30, 20]}>
                
            <Col span={12}>
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
                <Col span={12}>
                    <Form.Item
                        name="MobileNumber"
                        label="Mobile Number"
                        rules={[
                    {
                        type: "text",
                    },
                    
                    {
                        required: true,
                        message: 'Please input your Mobile Number',
                    },
                    ]}
                >
                    <Input />
                        </Form.Item>
                </Col>

                </Row>
                                
            
            {/* Row number 3 */}

            <Row gutter={[30, 20]}>

            <Col span={12}>
                <Form.Item
                    name="SonDaughterOf"
                    label="Son/Daugher of"
                    rules={[
                        {
                        required: true,
                        message: 'Please add your fathers name!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                </Col>

                
                <Col span={12}>
                    <Form.Item name="Relationship" label="Relationship" rules={[{ required: true, message: 'Select Relationship' }]}>
                        <Select options={relation} />
                    </Form.Item>
                </Col>

                
            </Row>
            
            {/* Row number 4 */}
            
            <Row gutter={[30, 40]}>
                
            <Col span={12}>
                <Form.Item
                    name="MotherTounge"
                    label="Mother Tounge">
                    <Input />
                </Form.Item>
                </Col>
            

                
                <Col span={12}>
                    <Form.Item name="Gender" label="Gender" rules={[{ required: true, message: 'Add Gender' }]}>
                        <Select options={gender} />
                    </Form.Item>
                </Col>
                
                
                
            </Row>

             {/* Row number 5 */}

            <Row gutter={[30, 20]}>
                
            <Col span={12}>
                <Form.Item
                    name="Date of Birth"
                    label="Date of Birth"
                    >
                    <DatePicker style={{ width: '100%'}} onChange={onChangeDate} />

                </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="Address"
                        label="Address">
                        <TextArea rows={1} />
                    </Form.Item>
                </Col>
            </Row>
            
            
            
            <Row gutter={[30, 20]}>
                
                <Col span={12}>
                    <Form.Item name="city" label="City" rules={[{ required: true, message: 'Add City' }]}>
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item name="district" label="District" rules={[{ required: true, message: 'Add City' }]}>
                        <Input />
                    </Form.Item>
                </Col>

            </Row>
            <Row gutter={[30, 20]}>
                
                <Col span={12}>
                    <Form.Item name="state" label="State" rules={[{ required: true, message: 'Add City' }]}>
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            {/* Row number 6 */}
            

            <Row gutter={[ 200,20]} style={{ marginTop: 10, marginBottom: 20}}>
                <Col>
                    <h3>Select Type</h3>
                    <Checkbox onChange={onChange}>Player</Checkbox>
                    <Checkbox onChange={onChange}>Arbiter</Checkbox>
                    <Checkbox onChange={onChange}>Coach</Checkbox>
                </Col>
                <Col>
                    <h3>Are you a PIO/OCI</h3>
                    <Radio>Yes</Radio>
                    <Radio>No</Radio>
                </Col>
            </Row>


            
            
             {/* Row number 7 */}


             <Row style={{marginTop: '30px'}}>
                <Col span={5}>
                    <Upload {...props}>
                        <Button type="default" icon={<UploadOutlined />}>Passport Size Photo</Button>
                    </Upload>
                    
                    <p style={{marginTop: 20}}>
                        (jpg, png or gif images only. 160x200 pixels (width x height). Maximum size 1000 KB)
                        </p>

                </Col>
                <Col span={8} offset={4}>
                    <Upload {...props}>
                        <Button type="default" icon={<UploadOutlined />}>Birth Certificate</Button>
                    </Upload>
                    <p style={{marginTop: 20}}>(Maximum size 1000 KB)</p>

                </Col>
            </Row>
            

            <Row style={{marginTop: '30px'}}>
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

    
    
 //   const { collapsed } = this.state;

   // const state = {
     //   collapsed: false,
      //};
    
   // const  onCollapse = collapsed => {
     //   console.log(collapsed);
       // this.setState({ collapsed });
     // };

    

    const [form] = Form.useForm();
  
    const onFinish = (values) => {
    
    console.log('Received values of form: ', values);

    };


    return (
        <>

            <Layout style={{ minHeight: '100vh' }}>
                
            <Sider style={{ paddingTop: 30}}>
                <div className="logo"  />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    AICF Home
                </Menu.Item>
                <Menu.Item key="2" icon={<SearchOutlined />}>
                    Search
                </Menu.Item>
                <Menu.Item key="3" icon={<FileTextOutlined />}>
                            Register New
                </Menu.Item>
                <Menu.Item key="4" icon={<DollarCircleOutlined />}>
                    Renew Membership
                </Menu.Item>
                </Menu>
                </Sider>
                <Layout className="site-layout" style={{backgroundColor: "#ffffff"}}>

                    <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>AICF PRS</Breadcrumb.Item>
                        <Breadcrumb.Item>New Registration</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ marginLeft: '20px', marginTop: '20px', marginRight: '20px' }}>
            
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
                                layout="vertical"
                        >
        
  
                        {renderForm()}
  
        
                        </Form>
            
                    </div>
                </Content>
                    {/*         <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
        
        </Layout>
        </>
    )
}



