import React, { Component } from "react";
import { Select, Input, TextArea } from "../FormFields/FormFields.jsx";

class SingleCallsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            callNumber: '',
            dateOfCall: '',
            day: '',
            timeOfCall: '',
            callDuration: '',
            name: '',
            typeOfContact: '',
            typeOfCall: '',
            volunteer: '',
            shortDescription: '',
            note: '',
          };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);

        //alert('Your favorite flavor is' + this.state.callNumber);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container p-5">
                <form  onSubmit={this.handleSubmit}>
                    <div className="row p-2">
                        <div className="col-6 px-2">
                            <div>
                                <fieldset className="box p-3">
                                    <legend className="px-1">Poziv</legend>
                                    <Input id="callNumber" name="callNumber" type="text" label="R. broj poziva" onChange={this.handleChange}/>
                                    <Select id="typeOfContact" name="typeOfContact" label="Vrsta kontakta" options={[1, 2, 3, 4, 5]} onChange={this.handleChange}/>
                                    <Input id="dateOfCall" name="dateOfCall" type="date" label="Datum" onChange={this.handleChange}/>
                                    <Input id="day" name="day" type="text" label="Dan" onChange={this.handleChange}/>
                                    <Input id="timeOfCall" name="timeOfCall" type="time" label="Vreme poziva" onChange={this.handleChange}/>
                                    <Input id="callDuration" name="callDuration" type="text" label="Trajanje poziva" onChange={this.handleChange}/>
                                    <Select id="typeOfCall" name="typeOfCall" label="Vrsta poziva" options={[1, 2, 3, 4, 5]} onChange={this.handleChange}/>
                                    <Select id="volunteer" name="volunteer" label="Volonter" options={[1, 2, 3, 4, 5]} onChange={this.handleChange}/>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="p-3 box">
                                    <legend className="px-1">Opis razgovora</legend>
                                    <Select id="typeOfProblem" name="typeOfProblem" label="Vrsta problema" options={[1, 2, 3, 4, 5]} onChange={this.handleChange}/>
                                    <Select id="suicidalRisk" name="suicidalRisk" label="Suicidni rizik" options={[1, 2, 3]} onChange={this.handleChange}/>
                                    <Select id="suicideFactor" name="suicideFactor" label="Suicidni faktor" options={[1, 4, 5]} onChange={this.handleChange}/>
                                    <Select id="previousSuicideAttempts" name="previousSuicideAttempts" label="Prethodni pokušaji suicida" options={[3, 4, 5]} onChange={this.handleChange}/>
                                </fieldset>
                            </div>
                        </div>
                        <div className="col-6 px-2">
                            <div>
                                <fieldset className="box p-3">
                                    <legend className="px-1">Pozivar</legend>
                                    <Input id="name" name="name" type="text" label="Ime ili nadimak" onChange={this.handleChange}/>
                                    <Select id="gender" name="gender" label="Pol" options={[1, 2, 5]} onChange={this.handleChange}/>
                                    <Select id="age" name="age" label="Starost" options={[1, 2, 3]} onChange={this.handleChange}/>
                                    <Select id="married" name="married" label="Bračno stanje" options={[1, 2, 3, 4, 5]} onChange={this.handleChange}/>
                                    <Select id="numberOfCall" name="numberOfCall" label="Koji put zove" options={[1, 2, 3, 4, 5]} onChange={this.handleChange}/>
                                    <Select id="married" name="married" label="Bračno stanje" options={[1, 2, 3, 4, 5]} onChange={this.handleChange}/>
                                    <Select id="participationInPlan" name="participationInPlan" label="Uključenost u plan" options={[1, 2, 3, 4, 5]} onChange={this.handleChange}/>
                                </fieldset>
                            </div>
                            <fieldset className="pt-3">
                                <TextArea id="shortDescription" name="shortDescription" label="Kratak sadržaj" rows="7" onChange={this.handleChange}/>
                                <TextArea id="note" name="note" label="Napomena" rows="3" onChange={this.handleChange}/>
                            </fieldset>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col text-center">
                            <button type="submit" className="btn btn-secondary mx-2">Snimi</button>
                            <button type="button" className="btn btn-secondary mx-2">Izmeni</button>
                            <button type="button" className="btn btn-secondary mx-2">Kopiraj</button>
                            <button type="button" className="btn btn-secondary mx-2">Prebaci u XLS</button>
                            <button type="button" className="btn btn-secondary mx-2">Izađi</button>
                        </div>
                    </div>
                </form>
            </div>
            );
        }
    }
export default SingleCallsView;
