import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Modal from '../components/Modal';
import {modalOpen} from '../actions/Modal'

class App extends Component {
    componentWillMount() {}

    handleModalOpen() {
        this.props.modalOpen(true);
    }

    handleModalClose() {
        this.props.modalOpen(false);
    }

    render() {
        const {show} = this.props;
        return(
            <div>
                <h1>Modal</h1>
                <button onClick={this.handleModalOpen.bind(this)}>Modal Open</button>
                <Modal
                handleModalOpen={this.handleModalOpen.bind(this)}
                handleClickClose={this.handleModalClose.bind(this)}
                show={show}
                title='modalテスト'>
                モーダル内容
                </Modal>
            </div>
        )
    }
}

// modalのstateが変更されたことを受け取る
// Viewではstateをpropsに渡して使うようになる
function mapStateToProps(state) {
    return {
        show: state.Modal.show
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, {modalOpen}), dispatch);
}

export default connent(mapStateToProps, mapDispatchToProps)(App);
