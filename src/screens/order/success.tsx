import React, {  useEffect } from 'react';
import { Button, Layout, Result } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';

// tslint:disable-next-line:function-name
function PaymentSuccess(props: any) {
  const { state }:any = useLocation();
  const history = useHistory();
  const order  = state?.order;

  const handleUserPackages = async () => {
    // const { data } = await Axios.get(`user/active-packages`);
    // props.setActivePackages(data);
  };

  useEffect(() => {
    handleUserPackages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Layout.Content style={{ padding: '20px' }}>
        <Result
          status="success"
          title="Successfully Purchased!"
          subTitle={`Txt ID: ${order?.payment_response_id} `}
          extra={[
            <Button key="home" type="primary" onClick={() => history.replace('/')}>
              Home
            </Button>,
          ]}
        />
      </Layout.Content>
    </Layout>
  );
}


export default PaymentSuccess;
