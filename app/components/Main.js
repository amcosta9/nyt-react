// Include React
let React = require("react");

let Search = require("./children/Search"),
    Results = require("./children/Results"),
    Saved = require("./children/Saved"),
    helpers = require("./utils/helpers");

// Creating the Main component
let Main = React.createClass({

    // // Here we set a generic state associated with the number of clicks
    // // Note how we added in this history state variable
    // getInitialState: function() {
    //     return { searchTerm: "", results: "", history: [] };
    // },
    //
    // // The moment the page renders get the History
    // componentDidMount: function() {
    //     // Get the latest history.
    //     helpers.getHistory().then(function(response) {
    //         console.log(response);
    //         if (response !== this.state.history) {
    //             console.log("History", response.data);
    //             this.setState({ history: response.data });
    //         }
    //     }.bind(this));
    // },
    //
    // // If the component changes (i.e. if a search is entered)...
    // componentDidUpdate: function() {
    //
    //     // Run the query for the address
    //     helpers.runQuery(this.state.searchTerm).then(function(data) {
    //         if (data !== this.state.results) {
    //             console.log("Address", data);
    //             this.setState({ results: data });
    //
    //             // After we've received the result... then post the search term to our history.
    //             helpers.postHistory(this.state.searchTerm).then(function() {
    //                 console.log("Updated!");
    //
    //                 // After we've done the post... then get the updated history
    //                 helpers.getHistory().then(function(response) {
    //                     console.log("Current History", response.data);
    //
    //                     console.log("History", response.data);
    //
    //                     this.setState({ history: response.data });
    //
    //                 }.bind(this));
    //             }.bind(this));
    //         }
    //     }.bind(this));
    // },
    // // This function allows childrens to update the parent.
    // setTerm: function(term) {
    //     this.setState({ searchTerm: term });
    // },
    // Here we render the function
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card-panel">
                        <h2 className="center-align">New York Times Article Scrubber</h2>
                        <p className="center-align">
                            <em>Search for and annotate articles of interest!</em>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Search
                            // setTerm={this.setTerm}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Results
                            // results={this.state.results}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Saved
                            // saved={this.state.saved}
                        />
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;