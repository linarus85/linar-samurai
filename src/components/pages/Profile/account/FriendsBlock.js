import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
} from '@mui/material';
import { Link, NavLink } from "react-router-dom";


 const wifu = [
    {
        avatar: 'https://i.pinimg.com/originals/cf/a5/94/cfa5943e21ecdb7944b34a93034b06fd.jpg',
        name: 'Hayasaka Ai'
    },
    {
        avatar: 'https://i.pinimg.com/550x/0a/a0/b1/0aa0b1c9b6717e85ede6e899be8fb793.jpg',
        name: 'Shirogane Kei'
    },
    {
        avatar: 'https://shikimori.one/system/characters/original/176685.jpg',
        name: 'Koyasu Tsubame'
    },
]


const FriendsBlock = (props) => (

    <Card sx={{
        backgroundColor: '#F1F7FA'
    }}>
        {props.isOwner && <CardContent>
            {wifu.map((item) => {
                return (
                    <Box key={item.name}
                        sx={{
                            display: 'grid',
                            gridAutoColumns: '1fr',
                        }}
                    >
                        <Link to='/users' style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar
                                src={item.avatar}
                                sx={{
                                    height: 50,
                                    mb: 2,
                                    ml: 5,
                                    width: 50,
                                    gridRow: '1', gridColumn: 'span 1'
                                }}
                            />
                            <Typography
                                color="textPrimary"
                                variant="h7"
                                sx={{
                                    gridRow: '1', gridColumn: '2/5',
                                    m: 2,
                                }}

                            >
                                {item.name}
                            </Typography>
                        </Link>
                    </Box>)
            })
            }
        </CardContent>
        }
        <Divider />
        <CardActions>
            <NavLink to='/users'>
                <Button
                    variant="text"
                    color="primary"
                    fullWidth
                    sx={{ ml: 10 }}
                >
                    Search friends
                </Button>
            </NavLink>
        </CardActions>
    </Card>
);

export default FriendsBlock