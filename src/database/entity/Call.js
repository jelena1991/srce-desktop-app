class Call {
    constructor(id, dateOfCall, day, timeOfCall, callDuration, personName, typeOfContact, typeOfCall, volunteer, shortDescription, note) {

        this.dateOfCall = dateOfCall;
        this.day = day;
        this.timeOfCall = timeOfCall;
        this.callDuration = callDuration;
        this.personName = personName;
        this.typeOfContact = typeOfContact;
        this.typeOfCall = typeOfCall;
        this.volunteer = volunteer;
        this.shortDescription = shortDescription;
        this.note = note;
    }
}

exports.Call = Call;
