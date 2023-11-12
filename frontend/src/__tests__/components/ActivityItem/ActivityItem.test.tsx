import { fireEvent, render, screen } from '@testing-library/react';
import ActivityItem from '../../../components/ActivityItem/ActivityItem';

describe('Activity Item test suite', ()=>{
   
    const supplier = {
        id: 35,
        name: "name here",
        address: "jbsdjhbfjks",
        zip: "124",
        city: "bdfjvnjx",
        country: "USA"
    }

    const activityItem = {
        id: 23,
        title: "title",
        price: 24,
        currency: "$",
        rating: 4.8,
        specialOffer: true,
        supplierId: "1234",
        supplier: supplier
    }

    beforeEach(()=>{
        
    });

    afterEach(() => {
       
    });

    test('Has the label supplier location', () => {
        render(
            <ActivityItem activity={activityItem}/>);
        const supplierLocationLabel = screen.getByText('Supplier Location');
        expect(supplierLocationLabel).toBeInTheDocument();
    })

    test('Has the label supplier name', () => {
        render(
            <ActivityItem activity={activityItem}/>);
        const supplierNameLabel = screen.getByText('Supplier Name');
        expect(supplierNameLabel).toBeInTheDocument();
    })


})