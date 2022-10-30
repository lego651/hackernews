
const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

const getStory = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/item/${id}.json`);
    const story = await response.json();
    return story;
  } catch(error) {
    console.log('error while getting a story')
  }
}

const getStroies = async (type) => {
  try {
    const response = await fetch(`${BASE_URL}/${type}stories.json`);
    const data = await response.json()
    // console.log(data)
    const stories = await Promise.all(data.slice(0, 10).map(getStory));
    return stories;
  } catch(error) {
    console.log('error while getting stories', error)
  }
// 这里别删，我还要看下
  // const storyIds = fetch(`${BASE_URL}/${type}stories.json`)
  //                     .then(raw => raw.json())
  //                     .catch(err => console.log('error while getting stories'))
  // console.log(storyIds);
  // const stories = storyIds.then(ids => Promise.all(ids.slice(0,30).map(getStory)));
  // return stories;
}

export default getStroies