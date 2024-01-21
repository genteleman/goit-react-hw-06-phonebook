import { useDispatch, useSelector } from 'react-redux'
import css from './Filter.module.css'
import { setFilter } from 'Redux/Contacts/contactReducer'

export const Filter = () => {

    const dispatch = useDispatch()
    const filter = useSelector(store => store.contacts.filter)


    const handleChangeFilter = event => {
        const value = event.target.value;

        dispatch(setFilter(value))
    };




    return (
        <div className={css.filterContainer}>
            <p className={css.filterTitle}>Find contacts by name</p>
            <input
                className={css.filterInput}
                value={filter}
                onChange={handleChangeFilter}
                type="text"
                name="filter"
                placeholder="Katua..."
            />
        </div>
    );
}