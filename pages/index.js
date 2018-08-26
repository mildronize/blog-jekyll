import fetch from 'isomorphic-unfetch'
import React from 'react'

export default class extends React.Component {

  static async getInitialProps(context) {
    var path = context.query.path === undefined?"/":`/${context.query.path}`;
    path = path.replace("//","/");
    const fetch_url = `http://127.0.0.1:8080${path}`
    console.log(fetch_url)
    const res = await fetch(fetch_url)
    const data = await res.text()

    return { html: data }
  }

  render() {

    return (
        <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
    )
  }
}



