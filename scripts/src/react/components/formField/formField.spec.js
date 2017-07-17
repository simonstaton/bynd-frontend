import 'babel-polyfill';
import React from 'react';
import { shallow, mount } from 'enzyme';
import FormField from './index';

describe('FormField react component', () => {
    it('should set default state', () => {
        const Field = shallow(<FormField />);
        const Instance = Field.instance();
        expect(Object.keys(Instance.state)).toEqual([
            'value', 'valid', 'callbacks'
        ]);
    });

    it('should persist value from props to state', () => {
        const Field = shallow(<FormField />);
        const Instance = Field.instance();
        Field.setProps({
            attributes: {
                value: 'test'
            }
        });
        expect(Instance.state.value).toEqual('test');
    });

    it('should invoke props.onChange if defined', () => {
        const callback = jest.fn();
        const Field = mount(<FormField onChange={callback} />);
        Field.find('input').simulate('change');
        expect(callback).toHaveBeenCalled();
    });

    it('should invoke props.onFocus if defined', () => {
        const callback = jest.fn();
        const Field = mount(<FormField onFocus={callback} />);
        Field.find('input').simulate('focus');
        expect(callback).toHaveBeenCalled();
    });

    it('should invoke props.onBlur if defined', () => {
        const callback = jest.fn();
        const Field = mount(<FormField onBlur={callback} />);
        Field.find('input').simulate('blur');
        expect(callback).toHaveBeenCalled();
    });

    it('should invoke props.onValidate if defined', () => {
        const callback = jest.fn();
        const Field = mount(<FormField onValidate={callback} />);
        const Instance = Field.instance();
        Instance.validate.call(Instance);
        expect(callback).toHaveBeenCalled();
    });

    it('should validate if required but no validation rules', () => {
        const Field = mount(<FormField required attributes={{ value: '' }} />);
        const Instance = Field.instance();
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(false);
        Field.setProps({
            attributes: {
                value: 'test'
            }
        });
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(true);
    });

    it('should validate if required and validation rule', () => {
        const Field = mount(<FormField required validation="alpha" attributes={{ value: 'test123' }} />);
        const Instance = Field.instance();
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(false);
        Field.setProps({
            attributes: {
                value: 'test'
            }
        });
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(true);
    });

    it('should validate email', () => {
        const Field = mount(<FormField required validation="email" attributes={{ value: 'test' }} />);
        const Instance = Field.instance();
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(false);
        Field.setProps({
            attributes: {
                value: 'test@test.com'
            }
        });
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(true);
    });

    it('should validate alpha', () => {
        const Field = mount(<FormField required validation="alpha" attributes={{ value: 'test123@!' }} />);
        const Instance = Field.instance();
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(false);
        Field.setProps({
            attributes: {
                value: 'test'
            }
        });
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(true);
    });

    it('should validate alphanumeric', () => {
        const Field = mount(<FormField required validation="alphanumeric" attributes={{ value: 'test!@' }} />);
        const Instance = Field.instance();
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(false);
        Field.setProps({
            attributes: {
                value: 'test123'
            }
        });
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(true);
    });

    it('should validate numeric', () => {
        const Field = mount(<FormField required validation="numeric" attributes={{ value: 'test123' }} />);
        const Instance = Field.instance();
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(false);
        Field.setProps({
            attributes: {
                value: '123'
            }
        });
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(true);
    });

    it('should validate custom regexp as regexp object', () => {
        const noSpacesRegexp = /^\S*$/;
        const Field = mount(<FormField required validation={noSpacesRegexp} attributes={{ value: 'test test' }} />);
        const Instance = Field.instance();
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(false);
        Field.setProps({
            attributes: {
                value: 'test'
            }
        });
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(true);
    });

    it('should validate custom regexp as regexp string', () => {
        const noSpacesRegexp = '\\d{1}'; // eslint-disable-line no-useless-escape
        const Field = mount(<FormField required validation={noSpacesRegexp} attributes={{ value: '1' }} />);
        const Instance = Field.instance();
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(false);
        Field.setProps({
            attributes: {
                value: '12'
            }
        });
        Instance.validate.call(Instance);
        expect(Instance.state.valid).toBe(true);
    });

    it('should show an error message from props.errorMsg', () => {
        const Field = mount(<FormField required attributes={{ value: '' }} errorMsg="error message example" />);
        const Instance = Field.instance();
        Instance.validate.call(Instance);
        expect(Field.find('.error-msg').text()).toEqual('error message example');
    });

    it('should set an invalid class', () => {
        const Field = mount(<FormField required attributes={{ value: '' }} errorMsg="error message example" />);
        const Instance = Field.instance();
        Instance.validate.call(Instance);
        expect(Field.find('.invalid').exists()).toBe(true);
    });
});
