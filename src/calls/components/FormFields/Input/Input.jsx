import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
        <div class="form-group row">
            <label for="call" class="col-sm-3 col-form-label">R. broj poziva</label>
            <div class="col-sm-9">
                <input
                    type="text"
                    class="form-control"
                    id="call"
                />
            </div>
        </div>

    );
  }
}
export default Input;
