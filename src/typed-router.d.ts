/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    'home': RouteRecordInfo<'home', '/', Record<never, never>, Record<never, never>>,
    '404': RouteRecordInfo<'404', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    'charts': RouteRecordInfo<'charts', '/charts', Record<never, never>, Record<never, never>>,
    'counter': RouteRecordInfo<'counter', '/counter', Record<never, never>, Record<never, never>>,
    'IndexPage': RouteRecordInfo<'IndexPage', '/fraud', Record<never, never>, Record<never, never>>,
    'IndexPage': RouteRecordInfo<'IndexPage', '/fraud/home', Record<never, never>, Record<never, never>>,
    'PostTypePage': RouteRecordInfo<'PostTypePage', '/fraud/post/:type/:id', { type: ParamValue<true>, id: ParamValue<true> }, { type: ParamValue<false>, id: ParamValue<false> }>,
    'ProfilePage': RouteRecordInfo<'ProfilePage', '/fraud/profile', Record<never, never>, Record<never, never>>,
    'PropagandaPage': RouteRecordInfo<'PropagandaPage', '/fraud/propaganda', Record<never, never>, Record<never, never>>,
    '/fraud/report/create': RouteRecordInfo<'/fraud/report/create', '/fraud/report/create', Record<never, never>, Record<never, never>>,
    'KeepAlive': RouteRecordInfo<'KeepAlive', '/keepalive', Record<never, never>, Record<never, never>>,
    'mock': RouteRecordInfo<'mock', '/mock', Record<never, never>, Record<never, never>>,
    'profile': RouteRecordInfo<'profile', '/profile', Record<never, never>, Record<never, never>>,
    'form-render-list': RouteRecordInfo<'form-render-list', '/question', Record<never, never>, Record<never, never>>,
    'form-render': RouteRecordInfo<'form-render', '/question/render', Record<never, never>, Record<never, never>>,
    'unocss': RouteRecordInfo<'unocss', '/unocss', Record<never, never>, Record<never, never>>,
    'vote-list': RouteRecordInfo<'vote-list', '/vote', Record<never, never>, Record<never, never>>,
    'vote-render': RouteRecordInfo<'vote-render', '/vote/render', Record<never, never>, Record<never, never>>,
  }
}
