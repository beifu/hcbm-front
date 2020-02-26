/**
 * 测试编译时的环境变量配置
 * compileTestEnv
 * @author WY <yang.wang06@hand-china.com>
 * @date 2019-06-17
 * @copyright 2019-06-17 © HAND
 */

module.exports = {
  BASE_PATH: `${process.env.BASE_PATH || '/'}`,
  PLATFORM_VERSION: `${process.env.PLATFORM_VERSION || 'SAAS'}`,
  CLIENT_ID: `${process.env.CLIENT_ID || 'localhost'}`,
  API_HOST: `${process.env.API_HOST || 'http://dev.hzero.org:8080'}`,
  WEBSOCKET_HOST: `${process.env.WEBSOCKET_HOST || 'ws://dev.hzero.org:8120'}`,
  IM_ENABLE: process.env.IM_ENABLE || 'false',
  IM_WEBSOCKET_HOST: `${process.env.IM_WEBSOCKET_HOST || 'ws://dev.hzero.org:9876'}`,
  CUSTOMIZE_ICON_NAME: `${process.env.CUSTOMIZE_ICON_NAME || 'customize-icon'}`,
};