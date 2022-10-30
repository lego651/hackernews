
import useDataFetcher from '../hooks/useDataFetcher'
import Story from './Story';

const ShowStories = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type? type : 'new');

  if(isLoading || stories.length === 0) {
    return (
      <>is loading</>
    )
  }
  console.log(stories);
  return (
    <>
      {stories.map(story =>
        <Story key={story.id} story={story}/>
      ) }
    </>
  )
}

export default ShowStories