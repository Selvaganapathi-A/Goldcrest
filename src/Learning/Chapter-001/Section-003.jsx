const accounts = [
    {
        user: 'Aravind',
        balance: 120345,
        due: 138809,
        primeUser: true,
    },
    {
        user: 'Tharun',
        balance: 435792,
        due: 3497521,
        primeUser: false,
    },
    {
        user: 'Sophie',
        balance: 3298293,
        due: 3253482,
        primeUser: false,
    },
    {
        user: 'Julie',
        balance: 45392,
        due: 2341,
        primeUser: true,
    },
];

function Banker() {
    let wealthyPerson = accounts.reduce((prev, curr) => {
        return prev.balance - prev.due > curr.balance - curr.due ? prev : curr;
    });
    let accountStatus;
    if (wealthyPerson.primeUser) {
        accountStatus = <span>Prime User</span>;
    } else {
        accountStatus = <span>Non Prime User</span>;
    }
    return (
        <>
            {accounts[0].balance - accounts[0].due >
            accounts[1].balance - accounts[1].due ? (
                <p> Aravind Was Richer</p>
            ) : (
                <p>Tharun Was Richer</p>
            )}
            {accounts[1].balance < accounts[1].due && (
                <p> Tharun is in dept. </p>
            )}
            <span>
                {wealthyPerson.user} is {accountStatus}
            </span>
        </>
    );
}

export { Banker };
