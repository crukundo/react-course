import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
    const history = useHistory();

    function AddMeetupHandler(meetupData) {
        // have to add .json to end of collection to be created on Firebase's Realtime Db
        fetch('https://react-course-bdb27-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                // if fetch promise fulfilled, navigate back to landing page
                history.replace('/');
            });
    }
    return (
        <section>
            <h1>Create New Meetup</h1>
            <NewMeetupForm onAddMeetup={AddMeetupHandler} />
        </section>
    );
}

export default NewMeetupsPage;