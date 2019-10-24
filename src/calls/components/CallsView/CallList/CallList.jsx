import React, { Component } from "react";

class CallList extends Component {

    render() {
        const peoples = [
            {
              "timeOfCall": "12:23",
              "callDuration": "145",
              "name": "Sincere",
              "typeOfCall": "7",
              "suicidalRisk": "5",
              "volunteer": "lorem ipsum"
            },
            {
              "timeOfCall": "14:23",
              "callDuration": "15",
              "name": "Lorem1",
              "typeOfCall": "2",
              "suicidalRisk": "3",
              "volunteer": "ipsum"
            },
            {
              "timeOfCall": "14:23",
              "callDuration": "15",
              "name": "Lorem1",
              "typeOfCall": "2",
              "suicidalRisk": "3",
              "volunteer": "ipsum"
            },
            {
              "timeOfCall": "12:23",
              "callDuration": "145",
              "name": "Sincere",
              "typeOfCall": "7",
              "suicidalRisk": "5",
              "volunteer": "lorem ipsum"
            },
            {
              "timeOfCall": "14:23",
              "callDuration": "15",
              "name": "Lorem1",
              "typeOfCall": "2",
              "suicidalRisk": "3",
              "volunteer": "ipsum"
            },
            {
              "timeOfCall": "14:23",
              "callDuration": "15",
              "name": "Lorem1",
              "typeOfCall": "2",
              "suicidalRisk": "3",
              "volunteer": "ipsum"
            },
            {
              "timeOfCall": "12:23",
              "callDuration": "145",
              "name": "Sincere",
              "typeOfCall": "7",
              "suicidalRisk": "5",
              "volunteer": "lorem ipsum"
            },
            {
              "timeOfCall": "14:23",
              "callDuration": "15",
              "name": "Lorem1",
              "typeOfCall": "2",
              "suicidalRisk": "3",
              "volunteer": "ipsum"
            },
            {
              "timeOfCall": "14:23",
              "callDuration": "15",
              "name": "Lorem1",
              "typeOfCall": "2",
              "suicidalRisk": "3",
              "volunteer": "ipsum"
            }
        ]

        return (
            <table className="table table-hover table-sm">
                <thead className="thead-light">
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">Vreme</th>
                        <th scope="col">Trajanje</th>
                        <th scope="col">Pozivar</th>
                        <th scope="col">Vrsta poziva</th>
                        <th scope="col">Suic. rizik</th>
                        <th scope="col">Volonter</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        peoples.map((people, index) =>
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{people.timeOfCall}</td>
                                <td>{people.callDuration}</td>
                                <td>{people.name}</td>
                                <td>{people.typeOfCall}</td>
                                <td>{people.suicidalRisk}</td>
                                <td>{people.volunteer}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

export default CallList;
