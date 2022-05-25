// api key here
const apiKey = 'DfIcvI7fE-yaUUEikg7t9M_eD9fNayUzi_WbLwhFrPSkOH-5eOKlub_3B1J4aJhO2ZyaDcs2dIgK_E-bsww7Sv51PcCcT0vdc1T2rGbQvVGSkGq2cbTHk3R79tB2YnYx';

//const clientID = 'wwFu75HhDOOQH8K02WGBTQ'; https://cors-anywhere.herokuapp.com/

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;
