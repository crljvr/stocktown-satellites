import { Timestamp } from '@firebase/firestore-types'

export interface IAction {
  type: string;
  payload: any;
}
export interface IUser {
  id: string;
  name: string;
  username: string;
  biography: string;
  pictureUrl: string;
  followers: number;
  follows: number;
  medias: Array<any>;
}
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
  text: string,
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

export interface INewsItem {
  title: string,
  description: string,
  imageUrl?: string
}

export interface IFeatureNews {
  title: string;
  description: string;
  imageUrl: string;
}