import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfileThunk, getUserStatus, savePhoto, setIsFetching, setProfile, updateStatus } from '../../../redux/ProfileReducer'
import { useParams } from 'react-router-dom'
import Loader from '../../Loader/Loader'



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) { userId = 23427 }
        this.props.getProfileThunk(userId)
        this.props.getUserStatus(userId)
    }
    componentDidUpdate(prevProps) {
        let userId = this.props.params.userId
        if (this.props.params.userId !== prevProps.params.userId) {
            if (!userId) { userId = 23427 }
            this.props.getProfileThunk(userId)
            this.props.getUserStatus(userId)
        }
    }

    render() {
        return (
            <>
                {this.props.isFetcing ? <Loader /> : null}
                <Profile {...this.props} profile={this.props.profile}
                    status={this.props.status} updateStatus={this.props.updateStatus}
                    isOwner={!this.props.params.userId}
                    savePhoto={this.props.savePhoto}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetcing: state.profilePage.isFetcing,
        status: state.profilePage.status,
        authMyId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

const TakeParams = (props) => {
    return <ProfileContainer {...props} params={useParams()} />
}

export default connect(mapStateToProps, {
    setProfile, setIsFetching, getProfileThunk,
    getUserStatus, updateStatus, savePhoto
})(TakeParams)