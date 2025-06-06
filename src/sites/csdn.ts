import type { Site } from '../load'

import { addCodeFont, addSansFont } from '../utils'

export default ['blog.csdn.net', () => {
  addSansFont(
    '#csdn-toolbar *',
    ' #csdn_tool_otherPlace *',
    'body #content_views > pre > code > div.hljs-button',
  )
  addCodeFont('body .markdown_views pre code.prism .token.comment')
}] satisfies Site
