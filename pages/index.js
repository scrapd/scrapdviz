import { connect } from 'react-redux';
import { Layout } from 'antd';
import styled from '@emotion/styled';
import ScrapdGrid from '../components/scrapd-grid';
import ScrapdGenderGraph from '../components/scrapd-gender-graph';
import ScrapdFatalityCounter from '../components/scrapd-fatality-counter';
import ScrapdEthnicityGraph from '../components/scrapd-ethnicity-graph';
import ScrapdAgeGraph from '../components/scrapd-age-graph';

const { Content, Footer, Header } = Layout;

const GraphArea = styled.div({
  display: 'inline-flex',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignContent: 'space-around'
});

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
        ScrAPDviz
      </Header>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>
            <h1>Explore the data</h1>
            <ScrapdGrid />
            <GraphArea>
              <ScrapdEthnicityGraph />
              <ScrapdGenderGraph />
              <ScrapdAgeGraph />
              <ScrapdFatalityCounter />
            </GraphArea>
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>ScrAPDviz powered by Ant Design</Footer>
    </Layout>
  </div>
);

export default connect()(Index);
