import React, { useState, useEffect } from 'react'
import { TimeDifference } from '../utils';
import '../styles/Story.css'

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer" className='links'>
    {title}
  </a>
);

const Story = ({ story }) => {
  const { id, by, title, kids, time, url } = story;
  const [postTime, setPostTime] = useState('');
  
  useEffect(() => {
    setPostTime(TimeDifference(time));
  },[story]);
  console.log(time);
  return (
    <div className="story">
       <div className="story-title">
        <Link url={url} title={title} />
      </div>
      <div className="story-info">
        <span>
          by{' '}
          <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
        </span>
        |
        <span>
         {postTime}
        </span>
        |
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </div> 
    </div>
  );
};

export default Story