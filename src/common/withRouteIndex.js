import { connect } from "react-redux";
import { routeIndexSet } from "../redux/actions";

const mapDispatchToProps = dispatch => ({
    setRouteIndex: text => {
        dispatch(routeIndexSet(text));
    }
});

const mapStateToProps = state => ({
    routeIndex: state.routeIndex ? state.routeIndex : 0
});

export default connect(mapStateToProps, mapDispatchToProps);
