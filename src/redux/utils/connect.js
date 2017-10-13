import React, {Component, PropTypes} from "react";
import {connect as rrConnect} from "react-redux";

export default function connect(mapStateToProps, mapDispatchToProps = null, mergeProps = null, options = {}) {

    return function ConnectComponentFactory(WrappedComponent) {

        // options.withRef = true;

        return rrConnect(mapStateToProps, mapDispatchToProps, mergeProps, options)(WrappedComponent);

    }

}
