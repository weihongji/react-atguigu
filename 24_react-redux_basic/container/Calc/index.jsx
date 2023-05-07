import { connect } from "react-redux";
import CalcUI from "../../components/Calc";

import {
    CalcIncrementAction,
    CalcDecrementAction,
    CalcIncrementAsycAction
} from "../../redux/calc-action";

function mapStateToProps(state) {
    return { result: state };
}

function mapDispatchToProps(dispatch) {
    return {
        add: data => dispatch(CalcIncrementAction(data)),
        sub: data => dispatch(CalcDecrementAction(data)),
        addAsync: (data, interval) => dispatch(CalcIncrementAsycAction(data, interval))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalcUI);