require 'nokogiri'

module Jekyll
  class ImageConverter  < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /^\.md$/i
    end

    def output_ext(ext)
      ".html"
    end

    def convert(content)
      #  https://stackoverflow.com/a/32153321
      doc = Nokogiri::HTML::Document.parse('<html></html>', nil, 'UTF-8')
      fragment = Nokogiri::HTML::DocumentFragment.new(doc, content)
      # fragment.css('img').each { |img| img['data-src'] = img['src'] }  ## add data-src attr
      fragment.css('img').each { |node| 
        src = node['src']
        alt = node['alt']
        if node['data-convert'] != "disable"
          node.add_next_sibling "
          <div class=\"image\">
            <div class=\"placeholder\" data-large=\"" + src + "\">
              <img src=\"https://ce8be7dec.cloudimg.io/bound/100x100/q20/" + src + "\" class=\"placeholder-img-small\">
              <div class=\"placeholder-ratio\"></div>
            </div>
          </div>"
          node.remove
        end
      }
      # Stop if we could't parse with HTML
      return content unless doc

      return fragment.to_html
    #   content.upcase
    end
  end
end
