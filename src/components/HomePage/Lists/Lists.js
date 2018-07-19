import React, { Component, PropTypes } from "react";
import FilpMove from "react-flip-move";
import { Link } from "react-router";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {List, ListItem} from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ListStyle from './ListStyles.scss';

const tabChn = { all: '全部', good: '精华', share: '分享', ask: '问答', job: '招聘' }
export default class Lists extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={{ posstion: "relative" }}>
                <div className={ListStyle.List}>
                    <Avatar variant="contained" color="primary">
                        王
                     </Avatar>
                </div>
            </div>
        )
    }

}