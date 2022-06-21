import React from 'react'
import Loader from '../../Loader/Loader'
import { connect } from 'react-redux'
import { getAppBarProfileThunk, logout, setIsFetching, setUsersData } from '../../../redux/AuthReducer'
import { savePhoto } from '../../../redux/ProfileReducer'
import AppBars from './AppBars'



class AppBarContainer extends React.Component {
    componentDidMount() {
        this.props.getAppBarProfileThunk()
    }

    render() {
        return (
            <>
                {this.props.isFetcing ? <Loader /> : null}
                <AppBars {...this.props} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetcing: state.auth.isFetcing,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        authMyId: state.auth.id,

    }
}


export default connect(mapStateToProps, {
    setUsersData, setIsFetching,
    getAppBarProfileThunk, logout, savePhoto
})(AppBarContainer)