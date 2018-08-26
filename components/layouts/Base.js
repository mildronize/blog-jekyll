import ReactHtmlParser from 'react-html-parser';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Base = (props) =>
  <div>
    <Head>
      <title>{`${props.title}`}</title>
    </Head>

    <Header path={props.path} />
    <main className="main">
      <div class="container">
        <div class="columns">
          <div class="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
            <div class="content is-size-6 is-size-5-fullhd">
              {ReactHtmlParser(props.html)}
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer className="footer" />
  </div >

export default Base
