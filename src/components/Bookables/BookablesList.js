import { useState, Fragment } from "react";
import { bookables } from "../../static.json";
import {days, sessions} from "../../static.json";
import { FaArrowRight } from "react-icons/fa";
import {createContext, useContext} from 'react';
import {coffee,cart} from '../observable/SampleState';



export default function BookablesList() {

    const [group, setGroup] = useState("Kit");
    const bookablesInGroup = bookables.filter(b => b.group === group);

    const groups = [...new Set(bookables.map(b => b.group))];

    //const days = bookables.days;
    //const sessions = bookables.sessions;

    const selectedRoomArray = useState(1);
    const selectedRoom = selectedRoomArray[0];
    const setSelectedRoom = selectedRoomArray[1];

    const [count, updateCount] = useState(1);

    const bookable = bookablesInGroup[selectedRoom];
    const [hasDetails, setHasDetails] = useState(false);

    


    function changeBookable(selectedIndex) {
        //bookableIndex = selectedIndex;              
        setSelectedRoom(selectedIndex);
        //updateCount(count+1);

    }

    function makeRoomChange(i) {
        return i = (i + 1) % bookablesInGroup.length;
    }

    function nextBookable() {
        setSelectedRoom(i => makeRoomChange(i));
    }

    return (
        <Fragment>
            <div>

                <select
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                >
                    {groups.map(g => <option value={g} key={g}>{g}</option>)}
                </select>

                <ul className="bookables items-list-nav">
                    {bookablesInGroup.map((b, i) => (
                        <li
                            key={b.id}
                            className={i === selectedRoom ? "selected" : null}
                        >
                            <button
                                className="btn"
                                onClick={() => changeBookable(i)}
                            >
                                {b.title}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    className="btn"
                    onClick={nextBookable}
                >
                    next
                </button>

            </div>

            {bookable && (
                <div className="bookable-details">
                    <div className="item">
                        <div className="item-header">
                            <h2>
                                {bookable.title}
                            </h2>
                            <span className="controls">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={hasDetails}
                                        onChange={() => setHasDetails(has => !has)}
                                    />
                                    Show Details
                                </label>
                            </span>
                        </div>
                        <p>{bookable.notes}</p>
                        {hasDetails && (
                            <div className="item-details">
                                <h3>Availability</h3>
                                <div className="bookable-availability">
                                    <ul>
                                        {bookable.days
                                            .sort()
                                            .map(d => <li key={d}>{days[d]}</li>)
                                        }
                                    </ul>
                                    <ul>
                                        {bookable.sessions
                                            .map(s => <li key={s}>{sessions[s]}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}



        </Fragment>
    );
}