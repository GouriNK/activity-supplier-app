<a name="readme-top"></a>

<details>
  <summary>Table of Contents</summary>
  <ol>
   <li><a href="#query-to-fetch-all-activities">Query to fetch all Activities</a></li>
   <li><a href="#query-to-fetch-activity-by-id">Query to fetch Activity by ID</a></li>
   <li><a href="#query-to-fetch-all-suppliers">Query to fetch all Suppliers</a></li>
   <li><a href="#query-to-fetch-supplier-by-id">Query to fetch Supplier by ID</a></li>
   <li><a href="#mutation-to-add-a-supplier">Mutation to add a Supplier</a></li>
   <li><a href="#mutation-to-add-an-activity">Mutation to add an Activity</a></li>
   <li><a href="#mutation-to-update-an-activity">Mutation to update an Activity</a></li>
   <li><a href="#mutation-to-update-a-supplier">Mutation to update a Supplier</a></li>
   <li><a href="#mutation-to-delete-an-activity">Mutation to delete an Activity</a></li>
   <li><a href="#mutation-to-delete-a-supplier">Mutation to delete a Supplier</a></li>
  </ol>
</details>


**Paste any of the below queries to [GraphiQL](http://localhost:5000/graphql), to execute them.**

## Query to fetch all Activities
```
{
    activities {
      title
      id
      currency
      price
      rating
      specialOffer
      supplierId
      supplier {
        id
        name
        address
        zip
        city
        country
      }
    }
  }

```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Query to fetch Activity by ID
```
{
  activity(id: "<insert_id_here>") {
    title
      id
      currency
      price
      rating
      specialOffer
      supplierId
      supplier {
        id
        name
        address
        zip
        city
        country
      }

  }
}

```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Query to fetch all Suppliers
```
{
  suppliers {
      id
      name
      address
      zip
      city
      country
  }
}

```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Query to fetch Supplier by ID
```
{
  supplier(id: "<insert_id_here>") {
      id
      name
      address
      zip
      city
      country
  }
}

```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Mutation to add a Supplier
```
mutation{
  addSupplier(
    	name:"<insert_name_here>",
    	address:"<insert_address_here>",
    	zip:"<insert_zip_here>",
    	city:"<insert_city_here>",
    	country:"<insert_country_here>"
	) {
    id
    name
    address
    zip
    city
    country
  }
}

```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Mutation to add an Activity
```
mutation {
  addActivity(
    	title:"<insert_title_here>",
    	price:<insert_price_here>,
    	currency:"<insert_currency_here>",
  		rating:<insert_rating_here>,
  		specialOffer:<insert_specialOffer_here>,
    	supplierId: "<insert_supplierId_here>"
		) {
      id
      title
      price
      currency
      rating
      specialOffer
      supplierId
      supplier {
        id
        name
        address
        zip
        city
        country
    }
  }
}

```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Mutation to update an Activity
```
mutation {
  updateActivity(
        id: "<insert_id_here>",
        title:"<insert_title_here>",
    	  price:<insert_price_here>,
    	  currency:"<insert_currency_here>",
  		  rating:<insert_rating_here>,
  		  specialOffer:<insert_specialOffer_here>,
    	  supplierId: "<insert_supplierId_here>"
		) {
      id
      title
      price
      currency
      rating
      specialOffer
      supplierId
      supplier {
        id
        name
        address
        zip
        city
        country
    }
  }
}
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Mutation to update a Supplier
```
mutation {
  updateSupplier(
        id: "<insert_id_here>",
        name:"<insert_name_here>",
    	  address:"<insert_address_here>",
    	  zip:"<insert_zip_here>",
    	  city:"<insert_city_here>",
    	  country:"<insert_country_here>"
		) {
      id
      name
      address
      zip
      city
      country
  }
}
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Mutation to delete an Activity
```
mutation {
  deleteActivity(id : "<insert_id_here>") {
    id
    title
  }
}

```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Mutation to delete a Supplier
```
mutation {
  deleteSupplier(id : "<insert_id_here>") {
    id
    name
  }
}

```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

