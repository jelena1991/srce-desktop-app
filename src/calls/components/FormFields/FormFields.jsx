import React, { Component } from "react";

const Input = (props) => <input type={props.type} className="form-control" id={props.id} />

const Options = (props) =>
    <>
        {
            props.options.map((option) =>
                <option key={option} value={option}>{option}</option>
            )
        }
    </>

const Select = (props, ...other ) =>
    <select id={props.id} className="form-control">
        <Options options={props.options} {...other} />
    </select>

const FormFieldGrop = ({ id, label, children }) => (
    <div className="form-group row mb-1 px-2">
        <label htmlFor={id} className="col-6 col-lg-5 col-xl-4 col-form-label">{label}</label>
        <div className="col-6 col-lg-7 col-xl-8 p-1">
            {children}
        </div>
    </div>
);

export const InputField = ( props, ...other ) => (
    <FormFieldGrop id={props.id} label={props.label}>
        <Input {...other} />
    </FormFieldGrop>
);

export const SelectField = ( props, ...other ) => (
    <FormFieldGrop id={props.id} label={props.label}>
        <Select options={props.options}  {...other}/>
    </FormFieldGrop>
);

export const SelectField2 = ( props, ...other ) => (
    <div className="form-group mb-1">
        <label htmlFor={props.id} className="mb-1">{props.label}</label>
        <Select options={props.options} {...other}/>
    </div>
);

export const TextArea = props =>
    <div className="form-group">
        <label htmlFor={props.id} className="mb-1">{props.label}</label>
        <textarea className="form-control" id={props.label} rows={props.rows}></textarea>
    </div>
