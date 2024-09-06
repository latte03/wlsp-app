export interface VoteRecord {
  id: string
  createdTime: Date
  createdBy: string
  updatedTime: Date
  updatedBy: string
  echoMap: EchoMap
  unParticipateVotesNums: number
  participateVotesNums: number
  voteAllNums: number
  explain: string
  supervisor: string
  voteAddress: string
  voteStartTime: Date
  voteEndTime: Date
  voteTarget: string
  voteName: string
  complexCode: string
  futureCommunityCode: string
  sts: string
  voteItem: string
  state: number
  stateName: string
  voteType: null
  voteTypeName: null
  communityVoteUser: null
}

export interface EchoMap {
}

export interface VoteInfo {
  id: string
  createdTime: Date
  createdBy: string
  updatedTime: Date
  updatedBy: string
  echoMap: EchoMap
  unParticipateVotesNums: number
  participateVotesNums: number
  voteAllNums: number
  explain: string
  supervisor: string
  voteAddress: string
  voteStartTime: Date
  voteEndTime: Date
  voteTarget: string
  voteName: string
  complexCode: string
  futureCommunityCode: string
  sts: string
  voteItem: string
  state: number
  stateName: string
  voteType: null
  voteTypeName: null
  communityVoteUser: null
}

export interface EchoMap {
}
