import React from 'react';

export default class Modal extends React.Component {
    handleClickOpen() {
        const {handleModalOpen} = this.props;
        handleModalOpen();
    }

    handleClickClose() {
        const {handleModalClose} = this.props;
        handleModalClose();
    }
    render() {
        const {show, title, children} = this.props;
        return(
            <div className="c-modal" area-clicked={show === true ? 'true':'false'}>
                <h3>{title}</h3>
                <div>{children}</div>
                <div>
                    <button onClick={this.handleClickClose.bind(this)}>閉じる</button>
                </div>
            </div>
        )
    }
}
