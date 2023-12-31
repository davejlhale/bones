import React from "react";
import BasicSlider from "../BasicSlider/BasicSlider";

const RegionPage = ({ RegionActions,Currencies }) => {

    const displayActions = Object.entries(RegionActions).map(([key, action]) => {
        if (action.unlocked) {
            return (
                <BasicSlider key={key} action={action} currencies={Currencies}/>
            );
        } else {
            return null; //needed to satisfy return value from itteration
        }
    });

    return (
        <div className="RegionActions">
            {displayActions}
        </div>
    );
}

export default RegionPage;