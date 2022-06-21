import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../../Loader/Loader'
import Messages from './Messages'



class MessagesContainer extends React.Component {
   

    render() {
        return (
            <>
                {this.props.isFetcing ? <Loader /> : null}
                <Messages {...this.props} profile={this.props.profile}
                    isOwner={!this.props.params.userId}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetcing: state.profilePage.isFetcing,
        authMyId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

const TakeParams = (props) => {
    return <MessagesContainer {...props} params={useParams()} />
}

export default connect(mapStateToProps, {
})(TakeParams)