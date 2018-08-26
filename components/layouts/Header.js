import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

const Header = (props) =>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
          <div class="columns">
            <div class="column is-2">
              <div class="logo is-size-3 has-text-centered-mobile is-size-4-mobile">
                <a href="/" >mildronize</a>
              </div>

            </div>
            <div class="column has-text-right has-text-centered-mobile">
            
              <span className={"is-size-5 menu-link " + (props.path =='/'?'active':'') }><a href="/">home</a></span>
              <span class={"is-size-5 menu-link " + (props.path =='/about'?'active':'') }>
                <Link href="/about"><a>about</a></Link>
              </span>
              <span class={"is-size-5 menu-link " + (props.path =='/blog'?'active':'') }><Link href="/blog"><a>blog</a></Link></span>
              <span class="menu-link is-size-6"><a href="/"><FaSearch/></a></span>
            </div>

          </div>
          <hr class="hr-header" />
        </div>
      </div>
    </div>


  </div >

export default Header
