// Include React
let React = require("react");

let Search = require("./children/Search"),
    Results = require("./children/Results"),
    Saved = require("./children/Saved"),
    helpers = require("./utils/helpers");

// Creating the Main component
let Main = React.createClass({

    // Here we set a generic state associated with the number of clicks
    // Note how we added in this Saved state variable
    getInitialState: function() {
        return { term: "", start: "", end: "", results: "", saved: [] };
    },

    // The moment the page renders get the Saved
    componentDidMount: function() {
        // helpers.getSaved function
        helpers.getSaved().then(function(response) {
            console.log(response);
            if (response !== this.state.saved) {
                console.log("Saved", response.data);
                this.setState({ saved: response.data });
            }
        }.bind(this));
    },

    // If the component changes (i.e. if a search is entered)...
    componentDidUpdate: function() {

        // Run the query
        helpers.runQuery(this.state.term, this.state.start, this.state.end).then(function(data) {
            if (data !== this.state.results) {
                console.log("First article", data);
                this.setState({ results: data });

                // After we've received the result... then post the search term to our saved.
                // helpers.postSaved(this.state.term).then(function() {
                //     console.log("Updated!");
                //
                //     // After we've done the post... then get the updated saved
                //     helpers.getSaved().then(function(response) {
                //         console.log("Current Saved", response.data);
                //
                //         console.log("Saved", response.data);
                //
                //         this.setState({ saved: response.data });
                //
                //     }.bind(this));
                // }.bind(this));
            }
        }.bind(this));
    },
    // This function allows childrens to update the parent.
    setTerm: function(obj) {
        this.setState({term: obj.term});
        this.setState({start: obj.start});
        this.setState({end: obj.end});
    },
    // Here we render the function
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron">
                        <h2 className="text-center">New York Times Article Scrubber</h2>
                        <p className="text-center">
                            <em>Search for and annotate articles of interest!</em>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Search
                            setTerm={this.setTerm}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Results
                            // results={this.state.results}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
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