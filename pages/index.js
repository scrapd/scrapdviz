import { DatePicker, Layout, Table } from 'antd';
import moment from 'moment';

const { Content, Footer, Header } = Layout;
const RangePicker = DatePicker.RangePicker;

// /// Table options ///
const columns = [
  { title: 'Case', dataIndex: 'Case', key: 'Case' },
  { title: 'Crash', dataIndex: 'Fatal crashes this year', key: 'Fatal crashes this year' },
  { title: 'Date', dataIndex: 'Date', key: 'Date' },
  { title: 'Time', dataIndex: 'Time', key: 'Time' },
  { title: 'Location', dataIndex: 'Location', key: 'Location' },
  { title: 'First Name', dataIndex: 'First Name', key: 'First Name' },
  { title: 'Last Name', dataIndex: 'Last Name', key: 'Last Name' },
  { title: 'Ethnicity', dataIndex: 'Ethnicity', key: 'Ethnicity' },
  { title: 'Gender', dataIndex: 'Gender', key: 'Gender' },
  { title: 'DOB', dataIndex: 'DOB', key: 'DOB' },
  { title: 'Age', dataIndex: 'Age', key: 'Age' }
];

const data = JSON.parse(
  `[{
  "key": "1",
  "Age": 13,
  "Case": "19-0400694",
  "DOB": "12/05/05",
  "Date": "February 9, 2019",
  "Ethnicity": "Black",
  "Fatal crashes this year": "7",
  "First Name": "Zion",
  "Gender": "male",
  "Last Name": "Mouton",
  "Link": "http://austintexas.gov/news/traffic-fatality-7-4",
  "Location": "6000 block of Springdale Road",
  "Time": "12:48 p.m."
},
{
  "key": "2",
  "Age": 32,
  "Case": "19-0370320",
  "DOB": "2/18/86",
  "Date": "February 6, 2019",
  "Ethnicity": "White",
  "Fatal crashes this year": "6",
  "First Name": "James",
  "Gender": "male",
  "Last Name": "Ralston",
  "Link": "http://austintexas.gov/news/traffic-fatality-6-6",
  "Location": "1000 block of W. Oltorf Street",
  "Time": "7:02 a.m."
}]`
);
// /////////////////////

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

export default () => (
  <div>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <img className="logo" src="/static/images/logos/scrapd-logo-128x152.png" alt="RYR logo" />
        ScrAPDviz
      </Header>
      <Layout>
        {/* <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider> */}
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '80vh' }}>
            <h1>Explore the data</h1>
            <div>
              <RangePicker
                ranges={{
                  'Previous month': [
                    moment()
                      .subtract(1, 'months')
                      .startOf('month'),
                    moment()
                      .subtract(1, 'months')
                      .endOf('month')
                  ],
                  'This Month': [moment().startOf('month'), moment().endOf('month')]
                }}
                onChange={onChange}
              />
              <div>Number of fatalities: {data.length}</div>
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>ScrAPDviz powered by Ant Design</Footer>
    </Layout>
    <style jsx>
      {`
        h1 {
          color: #3d74fc;
          display: inline-block;
          margin-left: 10px;
        }

        .logo {
          display: inline-block;
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px;
        }

        .navbar > * {
          vertical-align: middle;
        }
      `}
    </style>
  </div>
);
