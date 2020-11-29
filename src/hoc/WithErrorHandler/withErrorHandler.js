import React, {Component} from 'react'

import Modal from './../../components/UI/Modal/Modal'
import Auxiliary from './../Auxiliary/Auxiliary'

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component{

        state = {
            error: null
        }
        componentWillUnmount(){
            
            axios.interceptors.request.use(req => {
                this.setState({error:null})
                return req
            })
            axios.interceptors.response.use(error=>{
                this.setState({error: error})
                console.log(error.message);
            })
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render(){
            console.log(this.state.error);
            return(
                <Auxiliary>
                    <Modal 
                    show={this.state.error}
                    modalClose={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
            )
        }
    }
}

export default withErrorHandler;