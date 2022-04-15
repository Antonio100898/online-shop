import { connect } from "react-redux"
import { State } from "../../../redux/Store"
import { fetchAllUsers, UsersType } from "../../../redux/usersReducer"
import Login from "./Login"

type StateToProps = {
    users: UsersType
    isFetching: boolean
}
type DispatchToProps = {
    fetchAllUsers: () => void
}

const mapStateToProps = (state: State) => ({
    users: state.users.users,
    isFetching: state.users.isFetching
})
const LoginContainer = connect<StateToProps, DispatchToProps, unknown, State>(mapStateToProps, {fetchAllUsers})(Login)
export default LoginContainer

