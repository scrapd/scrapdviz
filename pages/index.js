import ScrapdAgeGraph from '../components/scrapd-age-graph';
import ScrapdFatalityContainer from '../components/fatality-counter/container';
import ScrapdGrid from '../components/scrapd-grid';
import ScrapdMonthGraph from '../components/scrapd-month-graph';
import ScrapdPieGraph from '../components/scrapd-pie-graph';
import ScrapdTimeGraph from '../components/scrapd-time-graph';
import ScrapdWeekdayGraph from '../components/scrapd-weekday-graph';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { Row, Col, Icon, Layout } from 'antd';
import { connect } from 'react-redux';

const { Content, Footer, Header } = Layout;
const ScrapdMap = dynamic(() => import('../components/scrapd-map'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

const GraphArea = styled.div({
  display: 'inline-flex',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignContent: 'space-around'
});

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
  height: '2em',
  background: 'rgba(255, 255, 255, 0.2)',
  margin: '1em'
});

const Index = () => (
  <div>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Logo src="/static/images/logos/scrapd-logo-128x152.png" alt="RYR logo" />
        ScrAPDviz - Explore the data
      </Header>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>
            <ScrapdGrid />
            <GraphArea>
              <ScrapdPieGraph attribute="Gender" />
              <ScrapdPieGraph attribute="Ethnicity" />
              <ScrapdAgeGraph />
              <ScrapdMonthGraph />
              <ScrapdWeekdayGraph />
              <ScrapdTimeGraph />
              <ScrapdFatalityContainer />
              <ScrapdMap />
            </GraphArea>
          </div>
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

export default connect()(Index);
