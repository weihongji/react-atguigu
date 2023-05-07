import { connect } from "react-redux";
import CalcUI from "../../components/Calc";

import {
    CalcIncrementAction,
    CalcDecrementAction,
    CalcIncrementAsycAction
} from "../../redux/calc-action";

export default connect(state => (
    { result: state }),
    {
        add: CalcIncrementAction,
        sub: CalcDecrementAction,
        addAsync: CalcIncrementAsycAction
    }
)(CalcUI);