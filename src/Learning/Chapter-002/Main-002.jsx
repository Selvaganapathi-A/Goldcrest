import Car from './Section-001';

import { WelcomeToSite } from './Section-002.jsx';

import { Computer } from './Section-003 Mount.jsx';

import { DellTowerPC } from './Section-004 Update.jsx';

import { Parent } from './Section-005 UnMount.jsx';

import { ErrorBoundary } from './Section-006.jsx';

export default function Main_002() {
    return (
        <>
            <h2> Chapter 2 </h2>
            <hr />
            <h3> Section 1 - Class Components </h3>
            <Car wheel='12"' color="red" plate="TXN 77 XS 4533">
                <p>My Car</p>
                <p>Child Component.</p>
            </Car>
            <hr className="small" />
            <h3> Section 2 - Component Lifecycle - Event Handling </h3>
            <WelcomeToSite />
            <hr className="small" />
            <h3> Section 3 - Component Lifecycle - Mount </h3>
            <Computer ram="2 GB" hdd="500 GB" ssd="240 GB" graphics="4 GB">
                <p>Labore, hic similique ipsam nulla voluptatibus ab!</p>
                <p>Deleniti consequuntur quia fugiat nisi dolor praesentium?</p>
                <p>Illo eligendi in, magni velit eveniet repellendus.</p>
                <p>
                    Cupiditate, tempora vitae. Aspernatur possimus deserunt
                    sunt.
                </p>
                <p>Illum, voluptates dicta itaque sunt nulla reiciendis.</p>
                <p>Ipsum, debitis ipsa id esse quos quibusdam.</p>
                <p>Quasi aliquam animi amet quas laborum accusamus.</p>
            </Computer>
            <hr className="small" />
            <h3> Section 4 - Component Lifecycle - Update </h3>
            <DellTowerPC
                user="ultron"
                age="three days"
                purpose="world destruction (ie) protection. :)"
            />
            <hr className="small" />
            <h3> Section 5 - Component Lifecycle - Unmount </h3>
            <Parent />
            <hr className="small" />
            <h3> Section 6 - Component Lifecycle - Error </h3>
            <ErrorBoundary />
            <hr className="small" />
        </>
    );
}
