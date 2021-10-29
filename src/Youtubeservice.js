

export const GetSearchResults = async (searchTerm, setlist) => {
    const url = 'https://content-youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyBbuVNoi1SUVPlIQLNo8omQxRHDyeWGmqE&q=' +  searchTerm;
    //const url = 'https://googleapis.com/youtube/v3/';
    return await fetch(url, {
        //method: 'POST',
        mode: 'cors',
        // headers: {
        //     //   'Accept': 'application/json, text/plain, */*',
        //     //   'Content-Type': 'application/json',
        //     //  'Access-Control-Allow-Origin': '*',
        //     //  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        // },
        // body: JSON.stringify(
        //     {
        //         // part: 'snippet', 
        //         // key: 'jungle'
        //         //'q' : 'jim'
        //     }
        // )
    })
    .then(res => res.json())
    .then(res => setlist(res.items) )
  }

 