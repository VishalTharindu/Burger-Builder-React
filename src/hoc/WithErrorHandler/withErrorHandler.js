import React, {Component} from 'react'

import Modal from './../../components/UI/Modal/Modal'
import Auxiliary from './../Auxiliary/Auxiliary'

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component{

        state = {
            error: null
        }

        componentDidMount(){
            
            console.log("componentDidMount");
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null})
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(error=>{
                this.setState({error: error})
                console.log(error.message);
            })
        }

        componentWillUnmount(){
            console.log("componentWillUnmount");
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
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