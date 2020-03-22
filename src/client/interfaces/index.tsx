import { Timestamp } from '@firebase/firestore-types'

export interface ICommentOwner {
  id: string
  profile_pic_url: string
  username: string
}

export interface IComment {
  id: string
  text: string
  createdAt: string
  owner: ICommentOwner
}

export interface IPost {
  id: string
  shortcode: string
  displayUrl: string
  comments: Array<IComment>
}

export interface IGame {
  opponent: string
  home: boolean
  win: boolean
  scoreTeam: number
  scoreOpponent: number
  date: Timestamp
}