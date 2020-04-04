import { Dispatch } from "react";

export const SET_USER = 'SET_USER';

const UserActions = {
  setUser: (userData: any, medias: Array<any>, dispatch: Dispatch<any>, callback?: () => void) => {

    const { id, full_name, username, biography, profile_pic_url, edge_followed_by, edge_follow } = userData;

    dispatch({
      type: SET_USER,
      payload: {
        id,
        name: full_name,
        username,
        biography: biography,
        pictureUrl: profile_pic_url,
        followers: edge_followed_by.count,
        follows: edge_follow.count,
        medias
      }
    })

    return callback && callback();
  }
}

export default UserActions;
