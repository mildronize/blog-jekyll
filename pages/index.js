import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
import config from '../config';
import Base from '../components/layouts/Base';

const Index = (props) => (
  <div>
    <Base
        html={props.html}
        title="test"
        path={props.path}
      />
  </div>
)

Index.getInitialProps = async function (context) {
  var path = context.query.path === undefined ? "/" : `/${context.query.path}`;
  path = path.replace("//", "/");
  const fetch_url = `${config.data_url}${path}`
  console.log(fetch_url)
  const res = await fetch(fetch_url)
  const data = await res.text()
  return { html: data, path: path}
}

export default Index




