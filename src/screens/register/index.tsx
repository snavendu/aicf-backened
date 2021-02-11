import React, { useState } from 'react';
import AppLayout from '@layout/app';
import RegisterForm from '@components/RegisterForm';
import { Breadcrumb, Form, message } from 'antd';
import Axios  from 'axios';
import { useHistory } from 'react-router-dom';

// tslint:disable-next-line:function-name
export default function Register() {
  const history = useHistory();
  const [btnLoading, setbtnLoading] = useState(false)

  const onFinish = (values: any) => {
    const data = {
      ...values,
      DOB: values.DOB?.format(dateFormat),
    };
    handleSubmitForm(data);
  };

  const handleSubmitForm = async (values:JSON) =>{
    const show = message.loading('Saving Values ...', 0);
    setbtnLoading(true);
    try {
     const {data} =  await Axios.post(`register`,values);
     setTimeout(show, 0);
     setbtnLoading(false);
      if (data) {
        history.push(`/checkout`, { order: data});
      }
    } catch (error) {
     setbtnLoading(false);
     setTimeout(show, 0);
    }
  }


  return (
    <AppLayout>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>AICF PRS</Breadcrumb.Item>
        <Breadcrumb.Item>New Registration</Breadcrumb.Item>
      </Breadcrumb>
      <Form name="register" onFinish={onFinish} scrollToFirstError={true} layout="vertical">
        <RegisterForm btnLoading={btnLoading} />
      </Form>
    </AppLayout>
  );
}


const dateFormat = 'DD-MM-YYYY';