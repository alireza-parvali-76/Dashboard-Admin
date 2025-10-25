import React from "react";
import './WidgetLg.css'
import { transaction } from "../../data";

export default function WidgetLg(){

        const Button = ({type}) =>{
              return <button className={'widgetLgButton ' + type}>{type}</button>
        }  

    return(
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest TransActions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amout</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {transaction.map((transaction) =>
                    <tr className="widetLgTr">
                    <td className="widgetLgUser">
                        <img src={transaction.img} className="widgetLgImg" />
                        <span className="WidgetLgName">{transaction.customer}</span>
                    </td>
                    <td className="widgetLgDate">
                        {transaction.date}
                    </td>
                    <td className="widgetLgAmount">
                        {"$" + transaction.amount}
                    </td>
                    <td className="widetLgStatus">
                        <Button type= {transaction.status} />
                    </td>
                </tr>
                )}
            </table>
        </div>
    )
}