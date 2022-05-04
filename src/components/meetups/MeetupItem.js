import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favortiesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favortiesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        // check if item is already fav, if yes, remove favorite. If no, make it favorite
        if (itemIsFavorite) {
            favortiesCtx.removeFavorite(props.id)
        } else {
            favortiesCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;