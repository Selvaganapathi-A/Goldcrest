import './Section-004.css';

const stylesheet = {
    color: 'hsl(15 100% 55%)',
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 900,
    fontSize: '5rem',
};

function M1() {
    return (
        <>
            <p style={stylesheet}>Inline Stylesheet</p>
        </>
    );
}

function M2() {
    return (
        <>
            <p>CSS Module Style</p>
            <p className="success">Success</p>
            <p className="error">Error</p>
        </>
    );
}

export function DisplayForS5() {
    return (
        <>
            <M1 />
            <M2 />
        </>
    );
}
