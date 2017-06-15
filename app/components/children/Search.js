// Include React
let React = require("react");

// Creating the Form component
let Search = React.createClass({
    // Here we set a generic state associated with the text being searched for
    getInitialState: function() {
        return {
            term: "",
            start: "2010",
            end: "2017"
        };
    },
    // This function will respond to the user input
    handleChange: function(event) {
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },
    // When a user submits...
    handleSubmit: function(event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();
        // Set the parent to have the search term
        this.props.setTerm({
            term: this.state.term,
            start: this.state.start,
            end: this.state.end
        });
        this.setState({
            term: "",
            start: "2010",
            end: "2017"
        });
    },
    // Here we describe this component's render method
    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Search</h3>
                </div>
                <div className="panel-body text-center">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <h4 className="">
                                <strong>Search Term</strong>
                            </h4>
                            <input
                                value={this.state.term}
                                type="text"
                                className="form-control text-center"
                                id="term"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <h4 className="">
                                <strong>Start Year</strong>
                            </h4>
                            <input
                                value={this.state.start}
                                type="text"
                                className="form-control text-center"
                                id="start"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <h4 className="">
                                <strong>End Year</strong>
                            </h4>
                            <input
                                value={this.state.end}
                                type="text"
                                className="form-control text-center"
                                id="end"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Submit
                            </button>
                    </form>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Search;