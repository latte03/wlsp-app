import type { QuestionRecord } from './question'
import type { PageResult, ResponseBody } from './typing'
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
