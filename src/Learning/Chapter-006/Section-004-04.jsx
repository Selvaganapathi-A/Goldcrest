import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

function reducre(state, action) {
    switch (action.type) {
        case 'success':
            return {
                error: '',
                loading: false,
                post: action.data,
            };

        case 'error':
            return {
                error: action.data,
                loading: false,
                post: {},
            };

        default:
            return state;
    }
}

export function Demo04(params) {
    const [state, dispatch] = useReducer(reducre, {
        error: '',
        loading: true,
        post: {},
    });

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(
                    'https://fakerapi.it/api/v2/persons?_locale=en_IN&_quantity=1'
                )
                .then((response) => {
                    // console.log(response);
                    // console.log(response.data);

                    let { id, firstname, lastname, email, website, image } =
                        response.data.data[0];

                    // console.log(id, firstname, lastname, email, website);

                    dispatch({
                        type: 'success',
                        data: {
                            id,
                            firstname,
                            lastname,
                            email,
                            website,
                            image,
                        },
                    });
                })
                .catch((err) => {


                    dispatch({
                        type: 'error',
                        data: err.message,
                    });
                });
        }, 2500);
    }, []);
    return (
        <>
            <h4>Fetch data by use reducer</h4>

            {state.loading ? (
                <p>Loading</p>
            ) : (
                <>
                    {state.error ? (
                        <p> {state.error} </p>
                    ) : (
                        <div className="person-info">
                            <img
                                className="picture"
                                src={state.post.image}
                                alt="Profile"
                            />

                            <span>Name</span>
                            <span>
                                {state.post.firstname}
                                {state.post.lastname}
                            </span>
                            <span>email</span>

                            <span>
                                <a href={`mailto:${state.post.email}`}>
                                    {' '}
                                    Mail Me!{' '}
                                </a>
                            </span>

                            <span>Website</span>

                            <span>
                                <a href={`http://${state.post.website}`}>
                                    {state.post.website}
                                </a>
                            </span>
                        </div>
                    )}
                </>
            )}
        </>
    );
}

/*



{
    "id": 1,
    "firstname": "Deep",
    "lastname": "Lodi",
    "email": "cramson@grewal.co.in",
    "phone": "+37082636911",
    "birthday": "1940-08-31",
    "gender": "other",
    "address": {
        "id": 1,
        "street": "13, Komal Nagar,",
        "streetName": "Bhalla Street",
        "buildingNumber": "69",
        "city": "Gandhinagar",
        "zipcode": "131015",
        "country": "Martinique",
        "county_code": "MQ",
        "latitude": 70.418206,
        "longitude": 34.500969
    },
    "website": "http://madan.com",
    "image": "http://placeimg.com/640/480/people"
}



*/
