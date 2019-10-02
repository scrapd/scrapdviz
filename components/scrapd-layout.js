import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Row, Col, Icon, Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { selectView } from '../redux/store';
import React from 'react';

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

class ScrapdLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    console.log('click ', e);
    this.props.selectView(e.key);
  };

  render() {
    return (
      <div>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Logo src="/static/images/logos/scrapd-logo-128x152.png" alt="RYR logo" />
            <Menu
              theme="light"
              mode="horizontal"
              onClick={this.handleClick}
              selectedKeys={[this.props.view]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Link href="/">
                  <a>Home</a>
                </Link>{' '}
              </Menu.Item>
              <Menu.Item key="apdView">
                <Link href="/apd">
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
              <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>{this.props.children}</div>
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
  }
}

ScrapdLayout.propTypes = {
  children: PropTypes.object,
  date_filter: PropTypes.object,
  view: PropTypes.string,
  selectView: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { date_filter, fatalities, view } = state;
  return { date_filter, fatalities, view };
};

export default connect(
  mapStateToProps,
  { selectView }
)(ScrapdLayout);
