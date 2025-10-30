import React from "react";
import Feature from "../../components/features/Feature";
import Chart from "../../components/Chart/Chart";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

import { xAxisData } from "../../data";
import './Home.css'

export default function Home(){
    return(
        <div className="home">
            <Feature />
            <Chart grid title='Month Sale' data={xAxisData} dataKey='Sale' height="370px" /> 
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
