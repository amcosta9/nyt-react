let axios = require("axios");

// nyt api key
let key = "a1699c1cddf743888c4fca0bbf277bbc";

// Helper functions for making API Calls
let helper = {

    // This function serves our purpose of running the query to geolocate.
    runQuery: function(term, start, end) {

        console.log('search term', term);
        console.log('start', start);
        console.log('end', end);

        // building query url
        let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

        url += '?' + $.param({
                'api-key': key,
                'q': term,
                'begin_date': start + "0101",
                'end_date': end + "1231",
            });
        console.log(url);
        return axios.get(url).then(function(response) {
            // If get get a result, return that result's formatted address property
            if (response.data.response.docs[0]) {
                return response.data.response.docs;
            }
            // If we don't get any results, return an empty string
            return "";
        });
    },

    // This function hits our own server to retrieve the record of query results
    getSaved: function() {
        return axios.get("/api/saved");
    },

    // This function posts new searches to our database.
    postSaved: function(location) {
        return axios.post("/api/saved", { location: location });
    }
};

// We export the API helper
module.exports = helper;