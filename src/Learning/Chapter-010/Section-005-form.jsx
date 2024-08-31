import './Section-005.scss';

export default function FormElements() {
    const handleformData = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        console.log(...data);
    };
    return (
        <>
            <form method="get" onSubmit={handleformData}>
                <input
                    type="hidden"
                    name="hidden"
                    value="pandora-uy54dv8nb32c"
                />
                <fieldset>
                    <legend>Other inputs </legend>
                    <div>
                        <label htmlFor="checkbox">Checkbox</label>
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            placeholder="checkbox"
                        />
                    </div>
                    <div>
                        <label htmlFor="radio">Radio</label>
                        <input
                            type="radio"
                            name="radio"
                            id="radio"
                            placeholder="radio"
                        />
                    </div>
                    <div className="temperature">
                        <label htmlFor="range">Range</label>
                        <div>
                            <input
                                type="range"
                                name="range"
                                id="range"
                                placeholder="range"
                                list="range-temperature"
                                min={0}
                                max={10}
                                step="0.5"
                            />
                            <datalist id="range-temperature">
                                <option label="0" value="0"></option>
                                <option label="1" value="1"></option>
                                <option label="2" value="2"></option>
                                <option label="3" value="3"></option>
                                <option label="4" value="4"></option>
                                <option label="5" value="5"></option>
                                <option label="6" value="6"></option>
                                <option label="7" value="7"></option>
                                <option label="8" value="8"></option>
                                <option label="9" value="9"></option>
                                <option label="10" value="10"></option>
                            </datalist>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="color">Color</label>
                        <input
                            type="color"
                            name="color"
                            id="color"
                            placeholder="color"
                        />
                    </div>
                    <div>
                        <label htmlFor="file">File Input</label>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            placeholder="file"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Time based inputs</legend>
                    <div>
                        <label htmlFor="datetime">Datetime</label>
                        <input
                            type="datetime"
                            name="datetime"
                            id="datetime"
                            placeholder="datetime"
                        />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            placeholder="date"
                        />
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            name="time"
                            id="time"
                            placeholder="time"
                        />
                    </div>
                    <div>
                        <label htmlFor="month">Month</label>
                        <input
                            type="month"
                            name="month"
                            id="month"
                            placeholder="month"
                        />
                    </div>
                    <div>
                        <label htmlFor="week">Week</label>
                        <input
                            type="week"
                            name="week"
                            id="week"
                            placeholder="week"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Text Based inputs</legend>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email"
                            autoComplete="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="number">Number</label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            placeholder="number"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            autoComplete="current-password"
                        />
                    </div>
                    <div>
                        <label htmlFor="search">Search</label>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="search"
                        />
                    </div>
                    <div>
                        <label htmlFor="tel">Telephone</label>
                        <input
                            type="tel"
                            name="tel"
                            id="tel"
                            placeholder="Telephone"
                        />
                    </div>
                    <div>
                        <label htmlFor="text">Text</label>
                        <input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="url">URL</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            placeholder="url"
                        />
                    </div>
                </fieldset>
                <hr className="small" />
                <fieldset className="buttons">
                    <legend> Buttons </legend>
                    <button type="button"> Button </button>
                    <input type="button" value="button" />
                    <input type="reset" value="reset" />
                    <input type="submit" value="submit" />
                    <input type="image" src="/vite.svg" alt="" />
                </fieldset>
            </form>
        </>
    );
}
