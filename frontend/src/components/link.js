import { Link as _Link } from '../deps'

export default class Link extends _Link {
  getLinkUrl(url) {
    return '#' + url
  }
}
