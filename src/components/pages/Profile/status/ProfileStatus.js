import React, { useEffect, useState } from 'react'
import { Input } from '@mui/material'
import styles from './ProfileStatus.module.css'


const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onAddStatus = () => {
        setEditMode(true)
    }
    const offAddStatus = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <span className={styles.status}
                    onDoubleClick={onAddStatus}
                >{status || 'add status'}</span>
            }
            {editMode &&
                <Input placeholder="add status"
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={offAddStatus}
                    value={status} />

            }
        </div>
    )
}

export default ProfileStatus

// class Status extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//     onAddStatus = () => {
//         this.setState({
//             editMode: true
//         })
//     }
//     offAddStatus = () => {
//         this.setState({
//             editMode: false
//         })
//         this.props.updateStatus(this.state.status)
//     }
//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     }
//     componentDidUpdate(prevProps) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {!this.state.editMode &&
//                     <span className={styles.status}
//                         onDoubleClick={this.onAddStatus}
//                     >{this.state.status || 'add status'}</span>
//                 }
//                 {this.state.editMode &&
//                     <Input placeholder="add status"
//                         onChange={this.onStatusChange}
//                         autoFocus={true}
//                         onBlur={this.offAddStatus}
//                         value={this.state.status} />

//                 }
//             </div>
//         )
//     }
// }
