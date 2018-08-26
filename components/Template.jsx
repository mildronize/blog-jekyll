const Post = (props) => (
  <div>
    <h1>Test</h1>
    <div dangerouslySetInnerHTML={{ __html: "<h1>test</h1>" }} />
    <div>xxxx</div>
  </div>
)

export default Post
