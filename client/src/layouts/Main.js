import React, { Component } from 'react'

import TopBar from '../components/home/TopBar'

export default class MainLayout extends React.Component {
    
    render () {
        const style = {
            content: {
                'margin': '20px',
                'marginTop': '100px'
            }
        }
        return (
            <div>
                <TopBar/>
                <div style={style.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}