import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types'

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

export async function fetchComments() {
  const url = 'https://jsonplaceholder.typicode.com/comments';
  const response = await fetch(url);

  return {
    type: FETCH_COMMENTS,
    payload: response.json()
  }
}
