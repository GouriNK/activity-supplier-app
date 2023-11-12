/**
 * This page is the landing page for this application.
 * 1. It contains a header, search input and a list of all activities
 * 2. All activities are loaded on the FE on page load, since the amount of data is small
 * 3. A copy of the actities is maintained, so that the filtered data set can be reset to 
 *    original dataset when text in the search input is cleared
 * 4. Filtering is done on the frontend
 * 5. When data is being loaded, a Loader is shown.
 * 6. Initial text in the searchbox is empty
 */

import { useQuery } from "@apollo/client"
import { GET_ALL_ACTIVITIES_QUERY } from "../../query/query";
import { useEffect, useState, ChangeEvent, } from "react";
import { Activity } from "../../shared/state";

import "./SearchPage.css";
import SearchInput from "../../components/SearchInput/SearchInput";
import ActivityList from "../../components/ActivityList/ActivityList";
import Loader from "../../shared/components/Loader/Loader";

const SearchPage: React.FC = () => {
    const { loading, data } = useQuery(GET_ALL_ACTIVITIES_QUERY);
    const [activityList, setActivityList] = useState<Activity[]>([]);
    const [displayList, setDisplayList] = useState<Activity[]>([]);

    const [text, setText] = useState('');

    useEffect(() => {
        if (data) {
            setActivityList(data.activities);
            setDisplayList(data.activities)
        }
    }, [data]);

    // Frontend function to filter activities (case insensitive) based on typed in text in the search box
    const filterActivities = (filterText:string) => {
        let findActivities;
        if (filterText) {
            findActivities =
                activityList && activityList?.length > 0
                    ? activityList?.filter((a) => a?.title.toUpperCase().includes(text.toUpperCase()))
                    : [];
          } else {
            findActivities = activityList
          }
          setDisplayList(findActivities);
    };

    useEffect(() => {
        filterActivities(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

     // Callback function from child component to set search text
    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <>
        <div className="search-page">
        <div className="heading">
            <h1>Find an Activity</h1>
        </div>
        <div className="body ui container">
            <SearchInput text={text} onChangeHandler={onSearchInputChange}/>
            {loading ? 
                <Loader/>   : 
                <ActivityList activityList={displayList}/> 
            }
        </div>
        </div>
        </>
        
    )
}

export default SearchPage;