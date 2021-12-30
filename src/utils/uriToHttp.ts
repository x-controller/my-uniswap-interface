/**
 * Given a URI that may be ipfs, ipns, http, https, or data protocol, return the fetch-able http(s) URLs for the same content
 * @param uri to convert to fetch-able http url
 */

// 不同协议的 uri 转换为可访问的 http(s) 链接
export default function uriToHttp(uri: string): string[] {
  // 协议
  const protocol = uri.split(':')[0].toLowerCase()
  switch (protocol) {
    case 'data':
      return [uri]
    case 'https':
      return [uri]
    case 'http':
      return ['https' + uri.substr(4), uri]
    case 'ipfs':
      const hash = uri.match(/^ipfs:(\/\/)?(.*)$/i)?.[2] // 取hash
      return [`https://cloudflare-ipfs.com/ipfs/${hash}/`, `https://ipfs.io/ipfs/${hash}/`]
    case 'ipns':
      const name = uri.match(/^ipns:(\/\/)?(.*)$/i)?.[2] // 取name
      return [`https://cloudflare-ipfs.com/ipns/${name}/`, `https://ipfs.io/ipns/${name}/`]
    case 'ar':
      const tx = uri.match(/^ar:(\/\/)?(.*)$/i)?.[2]
      return [`https://arweave.net/${tx}`]
    default:
      return []
  }
}
