import React, { Component } from "react";
import CallList from "./CallList/CallList.jsx";
import Calendar from "./Calendar/Calendar.jsx";

class CallsView extends Component {
    render() {
        const months = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];
        const year = (new Date()).getFullYear();
        const years = Array.from(new Array(5),( val, index) =>  year - index);
        return (
            <div className="container main p-5">
                <div className="row">
                    <div className="col-4 p-1">
                        <div className="monthAndYear"></div>
                        <button type="button" className="btn btn-block btn-light btn-outline-secondary">Unos poziva</button>
                        <button type="button" className="btn btn-block btn-light btn-outline-secondary">Brisanje poziva</button>
                        <button type="button" className="btn btn-block btn-light btn-outline-secondary">Detalji poziva</button>
                    </div>
                    <div className="col-8 p-1">
                        <div className="monthAndYear text-right">
                            <div className="d-inline">Januar 2019</div>
                            <select className="form-control d-inline mr-3" >
                                {
                                    months.map((month, index) => {
                                        return <option key={`month${index}`} value={index}>{month}</option>
                                    })
                                }
                            </select>
                            <select className="form-control d-inline" >
                                {
                                    years.map((year, index) => {
                                        return <option key={`year${index}`} value={year}>{year}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="calendar">
                            <Calendar />


                        </div>
                    </div>
                    <div className="col-12 p-1">
                        <div className="callList table-responsive border-secondary">
                            <CallList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CallsView;
