import { connect } from 'react-redux'
import { follow, getUsersThunk, setCurrentPage, setUsers, unfollow } from '../../../redux/UserReducer'
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalCount: state.userPage.totalCount,
        currentPage: state.userPage.currentPage,
        isFetcing: state.userPage.isFetcing,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },                                                       // полный код mapDispatchToProps
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCount(totalCount))
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetching(isFetching))
//         },
//     }
// }


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, getUsersThunk ,
   
    // сокращенный код mapDispatchToProps
})(Users)