import React, {Component} from 'react';
import {createEncode} from "../../store/actions/encodeAction";
import {connect} from "react-redux";
import {createDecode} from "../../store/actions/decodedAction";

import './Cipher.css'

class Cipher extends Component {
    state = {
        password: '',
        message: '',
        encoded: '',
        decoded: '',
    };
    createEncode = async (e) => {
        e.preventDefault();
        if(this.state.password === '') {
            alert('Вы не ввели пароль')
        } else {
            const newEncode = {
                password: this.state.password,
                message: this.state.message
            };
            await this.props.createEncode(newEncode);
            this.setState({encoded: this.props.encode.encoded})
        }

    };
    createDecode = async (e) => {
        e.preventDefault();
        if (this.state.password === '') {
            alert('Вы не ввели пароль')
        } else {
            const newDecode = {
                password: this.state.password,
                message: this.props.encode.encoded
            };
            await this.props.createDecode(newDecode);
            this.setState({decoded: this.props.decode.decoded})
        }


    };
    inputChangeHandler = event => this.setState({[event.target.name]: event.target.value});
    render() {

        return (
            <form action="">
                <div>
                    <label htmlFor="" className='label'>Decoded message</label>
                    <textarea name="message" id="" cols="30" rows="10" onChange={this.inputChangeHandler} value={this.props.decode.decoded} className='field'/>
                </div>
                <div>
                    <label htmlFor="" className='label'>Password </label>
                    <input type="text" name='password' onChange={this.inputChangeHandler} className='field pass-field'/>
                    <button onClick={this.createEncode} className='btn'><i className="fas fa-arrow-down"/></button>
                    <button onClick={this.createDecode} className='btn'><i className="fas fa-arrow-up"/></button>
                </div>
                <div>
                    <label htmlFor="" className='label'>Encoded message</label>
                    <textarea name="message" id="" cols="30" rows="10" onChange={this.inputChangeHandler} value={this.props.encode.encoded} className='field'/>
                </div>
            </form>
        );
    }
}
const mapStateToProps = state => ({
    encode: state.encode.encode,
    decode: state.decode.decode
});
const mapDispatchToProps = dispatch => ({
    createEncode: encode => dispatch(createEncode(encode)),
    createDecode: decode => dispatch(createDecode(decode))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cipher);