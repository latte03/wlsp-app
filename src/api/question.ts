export interface QuestionRecord {
  id: null | string
  createdTime: Date
  createdBy: string
  updatedTime: Date
  updatedBy: string
  name: string
  content: string
  startTime: Date
  endTime: Date
  jsonConfig: string
  allNums: number
  sts: string
  echoMap?: EchoMap
  state?: number
  stateName?: string
  action?: number
  communityQuestionUser: any
}

export interface EchoMap {
}
