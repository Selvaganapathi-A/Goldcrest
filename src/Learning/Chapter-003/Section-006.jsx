import React from 'react';
import { createPortal } from 'react-dom';

class MidguardPortal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <h5>MidguardPortal</h5>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Hic ipsa beatae fuga eaque magni obcaecati dolor est harum,
                    doloremque, velit inventore veritatis assumenda! Dignissimos
                    non, modi nulla iusto eius earum nemo corrupti.
                </p>
                <p>
                    Error dicta vitae ipsum libero, harum laudantium, fuga quia
                    temporibus natus, facilis in. Tenetur alias commodi officia
                    tempore incidunt ullam fuga, iste accusamus in sapiente,
                    nesciunt aliquid. Earum aliquam cupiditate fuga! Itaque?
                </p>
                <p>
                    Et officiis, inventore magni qui iure consequatur quidem,
                    veritatis accusamus fuga quas corrupti totam illum, dolor
                    reprehenderit doloremque! Eligendi, vel. Eligendi temporibus
                    iusto delectus. Praesentium cumque labore perspiciatis
                    mollitia itaque vel minima?
                </p>
                <p>
                    Officiis, harum nam. Quos, facere! Laboriosam, dolores
                    voluptate corporis numquam modi hic veritatis iste earum
                    debitis distinctio dignissimos explicabo dolorem quas,
                    quaerat ipsum illum commodi animi excepturi voluptas eveniet
                    suscipit neque maxime!
                </p>
                <p>
                    Numquam nemo sequi sint quo officiis debitis commodi nisi
                    sapiente minus non? Excepturi dolore odio nemo eius. Et
                    deleniti ad unde, aliquid beatae dolorem nobis corporis
                    nulla enim inventore quos corrupti voluptatem.
                </p>
            </>
        );
    }
}

function DisplayForS6() {
    return (
        <>
            <p id="info">
                Portals let your components render some of their children into a
                different place in the DOM. This lets a part of your component
                “escape” from whatever containers it may be in. For example, a
                component can display a modal dialog or a tooltip that appears
                above and outside of the rest of the page.
            </p>
            {createPortal(
                <MidguardPortal />,
                document.getElementById('portal-midguard'),
                'midguard'
            )}
        </>
    );
}

export { DisplayForS6 };
