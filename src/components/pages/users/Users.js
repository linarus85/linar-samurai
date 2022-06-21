import { Avatar, Button, Pagination } from '@mui/material'
import React from 'react'
import UsersButton from './UsersButton'
import styles from './Users.module.css'
import ava from './../../../images/anime.png'
import Loader from '../../Loader/Loader'
import { NavLink } from 'react-router-dom'
import Link from '@mui/material/Link'


class Users extends React.Component {

  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
  }

  handleClick = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsersThunk(pageNumber, this.props.pageSize)

  }

  render() {
    let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i)
    }
    let curPF = ((this.props.currentPage - 1) < 0) ? 0 : this.props.currentPage;
    let curPL = this.props.currentPage + 1;
    let slicedPages = pages.slice(curPF, curPL);
    return (
      <>
        {this.props.isFetcing ? <Loader /> : null}
        <div className={styles.users}>
          <div>
            {slicedPages.map(p => {
              return <Pagination count={pageCount} color="secondary" onClick={() => { this.handleClick(p) }} />
            })
            }
          </div>
          {
            this.props.users.map(u => <div key={u.id}>
              <span>
                <Link component={NavLink} to={'/profile/' + u.id}>
                  <Avatar
                    alt=""
                    src={u.photos.small !== null
                      ? u.photos.small : ava}
                    sx={{ width: 85, height: 85 }}
                  />
                </Link>
                <UsersButton name={u.name} status={u.status} />
                {
                  u.followed
                    ? <Button onClick={() => {
                      this.props.unfollow(u.id)
                    }}
                      variant="contained" color="success">
                      UNFOLLOW
                    </Button>
                    : <Button onClick={() => {
                      this.props.follow(u.id)
                    }}
                      variant="contained" color="success">
                      FOLLOW
                    </Button>
                }
              </span>
            </div>)
          }
        </div>
      </>
    )
  }
}

export default Users