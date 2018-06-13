export const fetchNews = (news) => {
  return {
    type: 'FETCH_NEWS',
    payload: news
  }
}