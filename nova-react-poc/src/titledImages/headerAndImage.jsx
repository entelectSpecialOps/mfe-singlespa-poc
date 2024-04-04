import React from "react";
import RandomImage from "../../../random-images/src/images/randomImage";
import RandomText from "../../../random-text/src/texts/randomText";

class HeaderAndImage extends React.Component {
    render() {
        return <div>
            <RandomText />
            <RandomImage />
        </div>
    }
}

export default HeaderAndImage;