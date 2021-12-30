import { UAParser } from 'ua-parser-js'
// 用户代理解析器

const parser = new UAParser(window.navigator.userAgent)
const { type } = parser.getDevice()

// 用户代理
export const userAgent = parser.getResult()

// 是否为移动设备
export const isMobile = type === 'mobile' || type === 'tablet'
