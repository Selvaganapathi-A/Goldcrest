import './Section-005.scss';

export default function FormElements() {
    const handleformData = (e) => {
        e.preventDefault();

        const form = e.target;

        console.log(form);
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
                    <legend>Favourite Food</legend>
                    <div>
                        <label htmlFor="idli">Idli</label>
                        <input
                            type="checkbox"
                            name="food"
                            id="idli"
                            value="idli"
                        />
                    </div>
                    <div>
                        <label htmlFor="dosa">Dosa</label>
                        <input
                            type="checkbox"
                            name="food"
                            id="dosa"
                            value="dosa"
                        />
                    </div>
                    <div>
                        <label htmlFor="burger">Burger</label>
                        <input
                            type="checkbox"
                            name="food"
                            id="burger"
                            value="burger"
                        />
                    </div>
                    <div>
                        <label htmlFor="pizza">Pizza</label>
                        <input
                            type="checkbox"
                            name="food"
                            id="pizza"
                            value="pizza"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Work Off Day</legend>
                    <div>
                        <label htmlFor="day-1">Sunday</label>
                        <input
                            type="radio"
                            name="day-off"
                            value="sunday"
                            id="day-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="day-2">Monday</label>
                        <input
                            type="radio"
                            name="day-off"
                            value="monday"
                            id="day-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="day-3">Tuesday</label>
                        <input
                            type="radio"
                            name="day-off"
                            value="tuesday"
                            id="day-3"
                        />
                    </div>
                    <div>
                        <label htmlFor="day-4">Wednesday</label>
                        <input
                            type="radio"
                            name="day-off"
                            value="wednesday"
                            id="day-4"
                        />
                    </div>
                    <div>
                        <label htmlFor="day-5">Thursday</label>
                        <input
                            type="radio"
                            name="day-off"
                            value="thursday"
                            id="day-5"
                        />
                    </div>
                    <div>
                        <label htmlFor="day-6">Friday</label>
                        <input
                            type="radio"
                            name="day-off"
                            value="friday"
                            id="day-6"
                        />
                    </div>
                    <div>
                        <label htmlFor="day-7">Saturday</label>
                        <input
                            type="radio"
                            name="day-off"
                            value="saturday"
                            id="day-7"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Other inputs </legend>
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
                <fieldset>
                    <legend>Simple Selection</legend>
                    <label htmlFor="select-one">Favouite Cat</label>
                    <select
                        required={true}
                        name="select-one"
                        id="select-one"
                        defaultValue="default"
                    >
                        <option
                            label="select favourite breed"
                            disabled
                            // selected
                            // hidden
                            value="default"
                        ></option>
                        <option value="Maine Coon" label="Main Coon"></option>
                        <option value="Persian" label="Persian"></option>
                        <option value="Pagdol" label="Pagdol"></option>
                        <option value="Siamese" label="Siamese"></option>
                        <option
                            value="Abyssianian"
                            label="Abyssianian"
                        ></option>
                        <option value="Sphynx" label="Sphynx"></option>
                    </select>
                </fieldset>
                <fieldset>
                    <legend>Simple Selection</legend>
                    <label htmlFor="select-multiple">Favouite Cats</label>
                    <select
                        name="select-multiple"
                        id="select-multiple"
                        defaultValue={['default']}
                        multiple
                        required={true}
                    >
                        <option
                            label="select favourite breed"
                            disabled
                            // selected
                            // hidden
                            value="default"
                        ></option>
                        <option value="Maine Coon" label="Main Coon"></option>
                        <option value="Persian" label="Persian"></option>
                        <option value="Pagdol" label="Pagdol"></option>
                        <option value="Siamese" label="Siamese"></option>
                        <option
                            value="Abyssianian"
                            label="Abyssianian"
                        ></option>
                        <option value="Sphynx" label="Sphynx"></option>
                    </select>
                </fieldset>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexFlow: 'row wrap',
                        padding: '1rem 0',
                    }}
                >
                    <label
                        htmlFor="textarea"
                        style={{
                            width: '20%',
                            alignContent: 'center',
                        }}
                    >
                        User Input :
                    </label>
                    <textarea
                        name="textarea"
                        id="textarea"
                        cols="60"
                        rows="10"
                        style={{
                            width: 'auto',
                        }}
                    ></textarea>
                </div>
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
