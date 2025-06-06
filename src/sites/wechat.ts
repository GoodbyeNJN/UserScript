import type { Site } from '../load'

import { addSansFont } from '../utils'

export default ['mp.weixin.qq.com', () => {
  const list: string[] = ['p']
  for (let i = 1; i <= 6; i++) {
    list.push(`h${i}`)
  }
  addSansFont(`:is(${list.join(', ')})[style]`)
}] satisfies Site
