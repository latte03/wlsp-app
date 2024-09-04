import { omit } from 'lodash-es'

import type { Publicize, PublicizeType } from './fraud'
import { agAxios } from '@/utils/request'

const fraudApi = {
  async getPublicizeType() {
    const res = await agAxios.getList<PublicizeType[]>('/application/app/community/fraud/publicizeType/list', {
      size: 100,
    })

    return res.records.map((i) => {
      return {
        ...i,
        text: i.name,
        value: i.id,
      }
    })
  },
  async getPublicizeList(params: any) {
    const res = await agAxios.getList<Publicize[]>('/application/app/community/fraud/publicize/list', params)

    return res
  },

  async getCaseTypeType() {
    const res = await agAxios.getList<PublicizeType[]>('/application/app/community/fraud/caseType/list', {
      size: 100,
    })

    return res.records.map((i) => {
      return {
        ...i,
        text: i.name,
        value: i.id,
      }
    })
  },
  async getCaseList(params: any) {
    const res = await agAxios.getList<Publicize[]>('/application/app/community/fraud/case/list', params)

    return res
  },

  async getPostDetail(params: { type: string, id: string }) {
    const res = await agAxios.get<Publicize>(`/application/app/community/fraud/${params.type}/${params.id}`)

    return res
  },

  async postReport(params: any) {
    const res = await agAxios.post<Publicize>(`/application/app/community/fraud/report`, {
      status: 0,
      ...omit(params, ['fraudImg', 'fraudSound', 'fraudVedio']),
    })

    return { ...res }
  },
  async getReportClue() {
    const res = await agAxios.get<Publicize>(`/application/app/community/fraud/report/clue`)

    return { ...res }
  },
}

export { fraudApi }
