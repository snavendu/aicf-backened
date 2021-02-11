import React, { useEffect, useState } from 'react';
import { Button, Layout, Result } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
// import Axios from 'axios';
import { SmileOutlined } from '@ant-design/icons';



// tslint:disable-next-line:function-name
export default function Checkout() {
    const history = useHistory();
    const { state }:any = useLocation();
    const order: any = state?.order;
    const [btnLoading, setbtnLoading] = useState(false);

    console.log(order);

    const handleCheckout = async (response: any) => {
        setbtnLoading(true);

        const value = {
            payment_response_id: response.razorpay_payment_id,
            channel: 'razorpay',
        };
        console.log(value);
        try {
            // const { data } = await Axios.post(`orders/${order?.id}/checkout`, value);
            // history.push('/payment/success', data);
            setbtnLoading(false);
            return;
        } catch (error) {
            setbtnLoading(false);
        }
    };

    const handlePayment = async () => {
        const amount = 500;
        const options = {
            key: 'rzp_test_hNtKQvpYRE730Z',
            key_secret: 'kBrFjTWgJH20GZE2B0RJrXgZ',
            amount: +amount * 100, // 2000 paise = INR 20, amount in paisa
            name: 'ALL INDIA CHESS FEDERATION',
            description: `ALL INDIA CHESS FEDERATION`,
            handler(response: any) {
                handleCheckout(response);
            },
            prefill: {
                name: order?.name,
                email: order?.email,
                contact: order?.mobile,
            },
            notes: {
                address: 'Hello World',
            },
        };
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, [history]);


    return (
        <Layout style={{backgroundColor:'#fff',paddingTop:'5vh'}}>
            <Layout.Content>
                <Result
                    status="success"
                    icon={<SmileOutlined />}
                    title="Successfully Register to AICF!"
                    subTitle={`Email: ${order?.email}, Phone Number: ${order?.mobile}`}
                    extra={[
                        <Button onClick={handlePayment} loading={btnLoading} type="primary" size="large" key="1">Pay Now</Button>,
                    ]}
                />
            </Layout.Content>
        </Layout>
    )
}
