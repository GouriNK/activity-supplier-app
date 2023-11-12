
/**
 * This Component contains the list of Activities
 * 1. A list of activities are shown with this component
 * 2. If no activities are available in the list, then a message is shown for this.
 */

import { Activity } from "../../shared/state";
import ActivityItem from "../ActivityItem/ActivityItem";
import "./ActivityList.css";

interface ActivityListProps {
    activityList: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activityList }) => {
    return (
        <div className="activity-list ui two column stackable grid container">
            {activityList && activityList?.length > 0 && activityList.map(activityItem => {
                return (
                    <ActivityItem key={activityItem.id} activity={activityItem}></ActivityItem>
                )
            })}
            {activityList && activityList?.length === 0 && (
                <div className="ui message compact big">
                    <p>
                        Sorry! No items found for search term.
                    </p>
                </div>
            )}
        </div>

    )
}

export default ActivityList;