import React from "react";
import { MdLineStyle, MdOutlineAttachMoney, MdDynamicFeed, MdOutlineMessage } from "react-icons/md";
import { IoAnalytics, IoStorefront, IoBagOutline } from "react-icons/io5";
import { PiTrendUp } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { GoReport } from "react-icons/go";
import { LuMail } from "react-icons/lu";
import {Link} from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar(){
    return(
      <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to={'/'} className="link">
                        <li className="sidebarListItem active">
                            <MdLineStyle className="sidebaricon" />
                            Home
                        </li>
                    </Link>    
                    <li className="sidebarListItem">
                        <IoAnalytics className="sidebaricon" />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <PiTrendUp className="sidebaricon" />
                        Sales
                    </li>
                </ul>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick menu</h3>
                <ul className="sidebarList">
                    <Link to={'/users'} className="link">
                        <li className="sidebarListItem">
                            <FaRegUser className="sidebaricon" />
                            Users
                        </li>
                    </Link>
                    <Link to={'/newUser'} className="link">    
                        <li className="sidebarListItem">
                            <FaRegUser className="sidebaricon" />
                            New User
                        </li>
                    </Link>   
                    <Link to={'/product'} className="link"> 
                        <li className="sidebarListItem">
                            <IoStorefront className="sidebaricon" />
                            Products
                        </li>
                    </Link>    
                    <li className="sidebarListItem">
                        <MdOutlineAttachMoney className="sidebaricon" />
                        Transaction
                    </li>
                    <li className="sidebarListItem">
                        <GoReport  className="sidebaricon" />
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notfication</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LuMail  className="sidebaricon" />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <MdDynamicFeed  className="sidebaricon" />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <MdOutlineMessage className="sidebaricon" />
                        Message
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <IoBagOutline className="sidebaricon" />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <IoAnalytics className="sidebaricon" />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <GoReport className="sidebaricon" />
                        Reports
                    </li>
                </ul>
            </div>
            </div>
        </div>
      </div>
    )
}