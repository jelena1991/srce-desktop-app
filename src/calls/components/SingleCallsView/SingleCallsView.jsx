import React, { Component } from "react";
import { SelectField, InputField, SelectField2, TextArea } from "../FormFields/FormFields.jsx";

class SingleCallsView extends Component {
  render() {
    return (
      <div className="container-fluid p-1">
          <form>
            <div className="row p-2">
                <div className="col-6 px-2">
                    <div>
                        <fieldset className="box p-3">
                            <legend className="px-1">Poziv</legend>
                            <InputField
                                id="callNumber"
                                type="text"
                                label="R. broj poziva"
                            />
                            <SelectField
                                id="typeOfContact"
                                label="Vrsta kontakta"
                            />
                            <InputField
                                id="dateOfCall"
                                type="date"
                                label="Datum"
                            />
                            <InputField
                                id="day"
                                type="text"
                                label="Dan"
                            />
                            <InputField
                                id="timeOfCall"
                                type="time"
                                label="Vreme poziva"
                            />
                            <InputField
                                id="callDuration"
                                type="time"
                                label="Trajanje poziva"
                            />
                            <SelectField
                                id="typeOfCall"
                                label="Vrsta poziva"
                            />
                            <SelectField
                                id="volunteer"
                                label="Volonter"
                            />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="p-3 box">
                            <legend className="px-1">Opis razgovora</legend>
                            <SelectField2
                                id="typeOfProblem"
                                label="Vrsta problema"
                            />
                            <SelectField2
                                id="suicidalRisk"
                                label="Suicidni rizik"
                            />
                            <SelectField2
                                id="suicideFactor"
                                label="Suicidni faktor"
                            />
                            <SelectField2
                                id="previousSuicideAttempts"
                                label="Prethodni pokušaji suicida"
                            />
                        </fieldset>
                    </div>
                </div>
                <div className="col-6 px-2">
                    <div>
                        <fieldset className="box p-3">
                            <legend className="px-1">Pozivar</legend>
                            <InputField
                                id="name"
                                type="time"
                                label="Ime ili nadimak"
                            />
                            <SelectField
                                id="gender"
                                label="Pol"
                            />
                            <SelectField
                                id="age"
                                label="Starost"
                            />
                            <SelectField
                                id="married"
                                label="Bračno stanje"
                            />
                            <SelectField
                                id="numberOfCall"
                                label="Koji put zove"
                            />
                            <SelectField
                                id="married"
                                label="Bračno stanje"
                            />
                            <SelectField
                                id="participationInPlan"
                                label="Uključenost u plan"
                            />
                        </fieldset>
                    </div>
                    <fieldset className="pt-3">
                        <TextArea
                            id="shortDescription"
                            label="Kratak sadržaj"
                            rows="8"
                        />
                        <TextArea
                            id="shortDescription"
                            label="Napomena"
                            rows="3"
                        />
                    </fieldset>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col text-center">
                    <button type="button" className="btn btn-primary mx-2">Snimi</button>
                    <button type="button" className="btn btn-primary mx-2">Izmeni</button>
                    <button type="button" className="btn btn-primary mx-2">Kopiraj</button>
                    <button type="button" className="btn btn-primary mx-2">Prebaci u XLS</button>
                    <button type="button" className="btn btn-primary mx-2">Izađi</button>
                </div>
            </div>
          </form>
      </div>
    );
  }
}
export default SingleCallsView;
