import React from "react";

class Test extends React.Component{
    render() {
        return <div>
            <micro-frame src="my-nested-app">
                <p>testing</p>
            </micro-frame>
        </div>
    }
}

export {Test}