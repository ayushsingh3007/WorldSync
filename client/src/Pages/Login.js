import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Style/login.module.css"

const Login = () => {
  return (
    <div className= {style.login_component}>
        <div className={style.login_banner}>
            <h1 className={style.login_heading}>LOGIN</h1>
            <p className= {style.login_slogan}>Choose your product or service below</p>
        </div>
        <div className={style.login_product_card_container}>
            <div className= {style.login_product_card}>
                <h3 className= {style.login_product_card_heading}>Item Management</h3>
                <Link to={"/production"} className={style.production}>Production</Link>
                <Link to={"/pre-production"} className={style.pre_production}>Pre-Production</Link>
            </div>

            <div className= {style.login_product_card}>
                <h3 className= {style.login_product_card_heading}>Item Management</h3>
                <Link to={"/production"} className={style.production}>Production</Link>
                <Link to={"/pre-production"} className={style.pre_production}>Pre-Production</Link>
            </div>
        </div>

        <div className={style.login_product_card_container}>
            <div className= {style.login_product_card}>
                <h3 className= {style.login_product_card_heading}>Item Management</h3>
                <Link to={"/production"} className={style.production}>Production</Link>
                <Link to={"/pre-production"} className={style.pre_production}>Pre-Production</Link>
            </div>

            <div className= {style.login_product_card}>
                <h3 className= {style.login_product_card_heading}>Item Management</h3>
                <Link to={"/production"} className={style.production}>Production</Link>
                <Link to={"/pre-production"} className={style.pre_production}>Pre-Production</Link>
            </div>
        </div>

        <div className={style.login_product_card_container}>
            <div className= {style.login_product_card}>
                <h3 className= {style.login_product_card_heading}>Item Management</h3>
                <Link to={"/production"} className={style.production}>Production</Link>
                <Link to={"/pre-production"} className={style.pre_production}>Pre-Production</Link>
            </div>

            <div className= {style.login_product_card}>
                <h3 className= {style.login_product_card_heading}>Item Management</h3>
                <Link to={"/production"} className={style.production}>Production</Link>
                <Link to={"/pre-production"} className={style.pre_production}>Pre-Production</Link>
            </div>
        </div>

        <div className={style.login_product_card_container}>
            <div className= {style.login_product_card}>
                <h3 className= {style.login_product_card_heading}>Item Management</h3>
                <Link to={"/production"} className={style.production}>Production</Link>
                <Link to={"/pre-production"} className={style.pre_production}>Pre-Production</Link>
            </div>

            <div className= {style.login_product_card}>
                <h3 className= {style.login_product_card_heading}>Item Management</h3>
                <Link to={"/production"} className={style.production}>Production</Link>
                <Link to={"/pre-production"} className={style.pre_production}>Pre-Production</Link>
            </div>
        </div>

        <div className={style.login_product_card_container}>
            <div className= {style.login_product_card}>
                <h3 className= {style.login_product_card_heading}>Item Management</h3>
                <Link to={"/production"} className={style.production}>Production</Link>
                <Link to={"/pre-production"} className={style.pre_production}>Pre-Production</Link>
            </div>
        </div>

    </div>
  )
}

export default Login