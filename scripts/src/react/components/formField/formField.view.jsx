import React from 'react';

export function Radio() {
    const className = this.props.attributes.className;
    return (
        <fieldset className={this.state.valid ? className : `${className} invalid`}>
            {this.props.options.map((option) => {
                return (
                    <label key={option.value} htmlFor={this.props.attributes.id}>
                        <input
                          {...this.props.attributes}
                          {...this.state.callbacks}
                          value={option.value}
                        />
                        {option.label}
                    </label>
                );
            })}
            {!this.state.valid && <span className="error-msg">{this.props.errorMsg}</span>}
        </fieldset>
    );
}

export function Select() {
    const className = this.props.attributes.className;
    return (
        <div>
            <select ref={(c) => { this.formElement = c; }} {...this.props.attributes} {...this.state.callbacks} className={this.state.valid ? className : `${className} invalid`}>
                <option disabled selected>{this.props.attributes.placeholder}</option>
                {this.props.options.map((option) => {
                    return (
                        <option key={option.value} value={option.value} disabled={option.disabled}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
            {!this.state.valid && <span className="error-msg">{this.props.errorMsg}</span>}
        </div>
    );
}

export default function Input() {
    const className = this.props.attributes.className;
    return (
        <div>
            <this.props.tag ref={(c) => { this.formElement = c; }} {...this.props.attributes} {...this.state.callbacks} value={this.state.value} className={this.state.valid ? className : `${className} invalid`} />
            {!this.state.valid && <span className="error-msg">{this.props.errorMsg}</span>}
        </div>
    );
}
