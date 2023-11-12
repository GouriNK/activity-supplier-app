
/**
 * This Component displays one Activity
 * 1. If no activities are available in the list, then a message is shown for this.
 * 2. Supplier address is calculated concatenating information from supplier's address, zip, city and country.
 * 3. Rating is displayed using a star rating component
 * 4. Special offer is displayed using a badge on the Activity that says "Special Offer"
 * 5. Price is displayed as a tag on the bottom left of the Activity card.
 */


import Rating from "../../shared/components/Rating/Rating";
import { Activity } from "../../shared/state";
import "./ActivityItem.css";

interface ActivityItemProps {
    activity: Activity;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
    let supplierAddress:string = '';

    if(activity?.supplier) {
        supplierAddress = `${activity.supplier.address}, ${activity.supplier.zip}, ${activity.supplier.city}, ${activity.supplier.country}`
    }

    return (
        <div className="activity-item column">
            <div className="ui segment card">
                <div className="content ui clearing segment">
                    {activity?.specialOffer ? <div className="ui top right floated label orange">Special Offer</div> : ''}
                    <div className={`ui header left floated ${activity?.specialOffer  ? ` special-offer-heading`: ''}`}>{activity?.title}</div>
                </div>
                {activity?.supplier !== null && 
                    <div className="content">
                        <h4 className="ui sub header">Supplier Name </h4>
                        <div className="description">
                                {activity.supplier.name}
                        </div>
                        <h4 className="ui sub header">Supplier Location </h4>
                        <div className="description">
                                {supplierAddress}
                        </div>
                    </div>
                }
                <div className="extra content">
                    <div className="ui tag label large green right floated">{activity?.currency}{activity?.price}</div>
                    <Rating rating={activity?.rating}/>
                </div>
            </div>
        </div>

    )
}

export default ActivityItem;