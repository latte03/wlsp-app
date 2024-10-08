import type { QuestionRecord } from './question'
import type { PageResult, ResponseBody } from './typing'
import type { VoteInfo, VoteRecord } from './vote'
import request from '@/utils/request'

export async function queryProse(): Promise<any> {
  return request('/prose')
}
export async function queryQuestionList(params): Promise<ResponseBody<PageResult<QuestionRecord>>> {
  return request.get('/application/app/community/question/page', {
    params,
  })
}

export async function submitQuestion(id, data): Promise<ResponseBody<any>> {
  return request.post(`/application/app/community/question/${id}/submit`, data)
}
export async function getQuestion(id): Promise<ResponseBody<QuestionRecord>> {
  return request.get(`/application/app/community/question/${id}`)
}

export function getAppConfig() {
  return request.get('/application/app/data/type/538060136906346496/page', {
    params: {
      current: 1,
      size: 20,
    },
  })
}

export const voteApi = {
  async queryList(params): Promise<ResponseBody<PageResult<VoteRecord>>> {
    return request.get('/application/app/community/vote/page', {
      params,
    })
  },

  submit(id, data): Promise<ResponseBody<any>> {
    return request.post(`/application/app/community/vote/${id}/submit`, data)
  },
  getDetail(id): Promise<ResponseBody<VoteInfo>> {
    return request.get(`/application/app/community/vote/${id}`)
  },

}
