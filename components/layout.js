import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Row, Col, Icon, Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { setView } from '../redux/store';

const { Content, Footer, Header } = Layout;

const FooterIconStyle = {
  fontSize: '2em'
};

const FooterIconStyleLeft = {
  margin: '0 0.5em 0 0'
};

const FooterIconStyleRight = {
  margin: '0 0 0 0.5em'
};

const Logo = styled.img({
  display: 'inline-block',
  height: '3em',
  background: 'rgba(255, 255, 255, 0.2)',
  margin: '1em',
  float: 'left'
});

const ScrapdLayout = props => (
  <div>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Logo src="/static/images/logos/scrapd-logo-128x152.png" alt="RYR logo" />
        <Menu theme="light" mode="horizontal" selectedKeys={[props.view]} style={{ lineHeight: '64px' }}>
          <Menu.Item key="apdView">
            <Link href="/">
              <a>APD</a>
            </Link>{' '}
          </Menu.Item>
          <Menu.Item key="archiveView">
            <Link href="/archives">
              <a>Archives</a>
            </Link>{' '}
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>{props.children}</div>
        </Content>
      </Layout>
      <Footer>
        <Row>
          <Col style={{ textAlign: 'left' }} span={8}>
            <a target="_blank" rel="noopener noreferrer" href="https://ant.design/">
              <Icon type="ant-design" style={{ ...FooterIconStyle, ...FooterIconStyleLeft }} />
            </a>
          </Col>
          <Col style={{ textAlign: 'center' }} span={8}>
            ScrAPDviz powered by Ant Design
          </Col>
          <Col style={{ textAlign: 'right' }} span={8}>
            <a target="_blank" rel="noopener noreferrer" href="mailto:info@scrapd.org">
              <Icon type="mail" style={{ ...FooterIconStyle, ...FooterIconStyleRight }} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/scrapd">
              <Icon type="github" style={{ ...FooterIconStyle, ...FooterIconStyleRight }} />
            </a>
          </Col>
        </Row>
      </Footer>
    </Layout>
  </div>
);

ScrapdLayout.propTypes = {
  children: PropTypes.array,
  setView: PropTypes.func.isRequired,
  view: PropTypes.string
};

const mapStateToProps = state => {
  const { view } = state;
  return { view };
};

export default connect(
  mapStateToProps,
  { setView }
)(ScrapdLayout);
