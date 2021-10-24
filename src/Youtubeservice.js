

export const GetSearchResults = async () => {
    const url = 'https://content-youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBbuVNoi1SUVPlIQLNo8omQxRHDyeWGmqE&q=jim';
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
    .then(res =>  {return res} );
  }

 