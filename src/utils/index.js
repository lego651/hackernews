
export const TimeDifference = (time) => {
  console.log('call');
  // now to unix time
  const currentUnixTime = new Date().valueOf();
  const difInMilliseconds = currentUnixTime - time;
  const difInMinutes = Math.floor(difInMilliseconds/1000/60);
  let postTime = '';
  if(difInMinutes < 1) {
    postTime = '0 minutes ago';
  }
  if(difInMinutes >= 1 && difInMinutes < 60) {
    postTime = `${Math.floor(difInMilliseconds/1000/60)} minutes ago`;
  }
  if(difInMinutes >= 60 && difInMinutes < 60*24) {
    postTime = `${Math.floor(difInMilliseconds/1000/60/60)} hours ago`;
    
  }
  if(difInMinutes >= 60*24 && difInMinutes < 60*24*30) {
    postTime = `${Math.floor(difInMilliseconds/1000/60/60/24)} days ago`;
  }
  if(difInMinutes >= 60*24*30 && difInMinutes < 60*24*30*12) {
    postTime = `${Math.floor(difInMilliseconds/1000/60/60/24/12)} months ago`;
  }
  if(difInMinutes >= 60*24*30*12) {
    postTime = `${Math.floor(difInMilliseconds/1000/60/60/24/30/12)} year ago`;
  }
  return postTime;
}
// 这里也留着，笔记
//unix to date
//new Date(1667122046).toLocaleDateString("en-US")
// unix to time
//new Date(1504095567183).toLocaleTimeString("en-US")