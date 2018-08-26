import { FaEnvelope, FaGithub, FaTwitter, FaLinkedin, FaMedium, FaRss } from 'react-icons/fa';

const Footer = (props) =>
  <footer class="footer">
    <div class="content has-text-centered is-size-6">
      <div>Copyright © 2018 by Thada Wangthammang</div>
      <div class="is-size-7">Build date: , Powered by <a href="https://jekyllrb.com">Jekyll</a></div>
      <div class="box user-link is-size-5">
        <a class="user-link" href="https://github.com/mildronize"><FaGithub/></a>
        <a class="user-link" href="https://twitter.com/mildronize"><FaTwitter/></a>
        <a class="user-link" href="https://www.linkedin.com/in/thada-wangthammang-281894a6"><FaLinkedin/></a>
        <a class="user-link" href="mailto:mildronize@gmail.com"><FaEnvelope/></a>
        <a class="user-link" href="https://medium.com/@mildronize"><FaMedium/></a>
        <a class="user-link" href="{{ site.baseurl}}/feed.xml"><FaRss/></a>
      </div>
    </div>
  </footer>

export default Footer
