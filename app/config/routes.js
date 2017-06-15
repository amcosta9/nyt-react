// include react
let React = require("react"),
    router = require("react-router");

// Include the Route component for displaying individual routes
let Route = router.Route,
// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
    Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
let hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
let IndexRoute = router.IndexRoute;

// Reference the high-level components
let Main = require('../components/Main'),
    Results = require('../components/children/Results'),
    Saved = require('../components/children/Saved'),
    Search = require('../components/children/Search');


// Export the Routes
module.exports = (

    // The high level component is the Router component
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

            {/* If user selects results, saved, or search show the appropriate component */}
            <Route path="results" component={Results} />
            <Route path="saved" component={Saved} />
            <Route path="search" component={Search} />

            {/* If user selects any other path... we get the Search Route */}
            <IndexRoute component={Search} />

        </Route>
    </Router>

);