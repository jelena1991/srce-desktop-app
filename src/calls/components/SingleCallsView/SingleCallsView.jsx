import React, { Component } from "react";

const Input = (props) => <input type={props.type} className="form-control" id={props.id} />

const Select = (props) =>
    <select id={props.id} className="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>


const Select2 = props =>
    <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <select className="form-control" id={props.id}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>

const InputField = ( props, ...other ) => (
    <FormFieldGrop id={props.id} label={props.label}>
        <Input {...other} />
    </FormFieldGrop>
);

const SelectField = ( props, ...other ) => (
    <FormFieldGrop id={props.id} label={props.label}>
        <Select />
    </FormFieldGrop>
);

const FormFieldGrop = ({ id, label, children }) => (
    <div className="form-group row">
        <label htmlFor={id} className="col-sm-4 col-form-label">{label}</label>
        <div className="col-sm-8">
            {children}
        </div>
    </div>
);




const TextArea = props =>
    <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <textarea className="form-control" id={props.label} rows={props.rows}></textarea>
    </div>

class SingleCallsView extends Component {
  render() {
    return (
      <div className="container-fluid">
          <form>
            <div className="row">
                <div className="col-6">
                    <fieldset className="form-group">
                        <legend>Poziv</legend>
                        <InputField
                            id="call"
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
                            id="dhbsk"
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
                    <fieldset className="form-group">
                        <legend>Opis razgovora</legend>
                        <Select2
                            id="typeOfProblem"
                            label="Vrsta problema"
                        />
                        <Select2
                            id="suicidalRisk"
                            label="Suicidni rizik"
                        />
                        <Select2
                            id="suicideFactor"
                            label="Suicidni faktor"
                        />
                        <Select2
                            id="previousSuicideAttempts"
                            label="Prethodni pokusaji suicida"
                        />
                    </fieldset>
                </div>
                <div className="col-6">
                    <fieldset className="form-group">
                        <legend>Pozivar</legend>
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
                            label="Bracno stanje"
                        />
                        <SelectField
                            id="numberOfCall"
                            label="Koji put zove"
                        />
                        <SelectField
                            id="married"
                            label="Bracno stanje"
                        />
                        <SelectField
                            id="participationInPlan"
                            label="Ukljucenost u plan"
                        />
                    </fieldset>
                    <fieldset>
                        <TextArea
                            id="shortDescription"
                            label="Kratak sadrzaj"
                            rows="8"
                        />
                        <TextArea
                            id="shortDescription"
                            label="note"
                            rows="3"
                        />
                    </fieldset>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button type="button" className="btn btn-primary mx-2">Snimi</button>
                    <button type="button" className="btn btn-primary mx-2">Izmeni</button>
                    <button type="button" className="btn btn-primary mx-2">Kopiraj</button>
                    <button type="button" className="btn btn-primary mx-2">Prebaci u XLS</button>
                    <button type="button" className="btn btn-primary mx-2">Izadji</button>
                </div>
            </div>
          </form>
      </div>
    );
  }
}
export default SingleCallsView;
