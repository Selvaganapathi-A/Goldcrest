/* eslint-disable react/prop-types */

function Cat(props) {
    return <p>{props.color} Cat</p>;
}

function Dog({ breed, behaviour }) {
    return (
        <p>
            {breed} - {behaviour}
        </p>
    );
}

export function Animal() {
    return (
        <>
            <h4>Cats</h4>
            <Cat color={'Tree'} />
            <Cat color={'Dessert'} />
            <Cat color={'House'} />
            <Cat color={'Tom'} />
            <Cat color={'Savannah'} />
            <br />
            <h4>Dogs</h4>
            <Dog breed={'Labrador'} behaviour={'Socialable'} />
            <Dog breed={'Beagle'} behaviour={'Curious'} />
            <Dog breed={'Cocker Spaniel'} behaviour={'Playmates, Hunters'} />
            <Dog breed={'German Shepard'} behaviour={'Guard'} />
            <Dog breed={'Boxer'} behaviour={'Pet'} />
            <Dog breed={'Rottweilers'} behaviour={'Loyal, Dominant'} />
        </>
    );
}
