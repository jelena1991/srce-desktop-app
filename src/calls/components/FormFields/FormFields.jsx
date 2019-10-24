import React, { Component } from "react";

const Options = (props) =>
    <>
        {
            props.options.map((option) =>
                <option key={option} value={option}>{option}</option>
            )
        }
    </>

const FormFieldGrop = ({ id, label, children }) => (
    <div className="form-group row mb-1 px-2">
        <label htmlFor={id} className="col-6 col-lg-5 col-xl-4 col-form-label">{label}</label>
        <div className="col-6 col-lg-7 col-xl-8 p-1">
            {children}
        </div>
    </div>
);

export const Input = ( props, ...other ) => (
    <FormFieldGrop id={props.id} label={props.label}>
        <input
            type={props.type}
            className="form-control"
            id={props.id}
            name={props.name}
            onChange={props.onChange}
        />
    </FormFieldGrop>
);

export const Select = ( props, ...other ) => (
    <FormFieldGrop id={props.id} label={props.label}>
        <select id={props.id} name={props.name} className="form-control" onChange={props.onChange}>
            <Options options={props.options} {...other} />
        </select>
    </FormFieldGrop>
);

export const TextArea = props =>
    <div className="form-group">
        <label htmlFor={props.id} className="mb-1">{props.label}</label>
        <textarea className="form-control" id={props.label} rows={props.rows} name={props.name} onChange={props.onChange}></textarea>
    </div>
