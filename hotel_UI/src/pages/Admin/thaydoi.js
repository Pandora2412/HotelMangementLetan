import React, { Component } from "react";
import Header from "../../components/Admin/Header";
import '../../css/letan_style.css';
import { Link } from "react-router-dom";
import luu from '../../Image/luu.png';

console.log(luu);

class Thaydoi extends Component {
    render() {
        return (
            <div className="b">
                <Header></Header>
                <div className="empty"></div>
                <div className="r1">
                    Thông tin cá nhân của lễ tân
                </div>
                <div className="empty"></div>
                <div className="p1">
                    <form>
                        <lable>Tên
                            <br></br>
                            <input type="text" placeholder="Nhập tên lễ tân" />
                        </lable>
                        <div className="empty"></div>
                        <lable>Số điện thoại
                            <br></br>
                            <input type="text" placeholder="Nhập số điện thoại của lễ tân" />
                        </lable>
                        <div className="empty"></div>
                        <lable>Tên đăng nhập
                            <br></br>
                            <input type="text" placeholder="Nhập tên đăng nhập của lễ tân" />
                        </lable>
                    </form>
                </div>
                <div className="p1">
                    <form>
                        <lable>CCCD
                            <br></br>
                            <input type="text" placeholder="Nhập CCCD của lễ tân" />
                        </lable>
                        <div className="empty"></div>
                        <lable>Email
                            <br></br>
                            <input type="text" placeholder="Nhập email của lễ tân" />
                        </lable>
                        <div className="empty"></div>
                        <lable>Mật khẩu
                            <br></br>
                            <input type="text" placeholder="Nhập mật khẩu của lễ tân" />
                        </lable>
                    </form>
                </div>
                <div className="add">
                    <Link to="/admin/after_thaydoiletan">
                        <img src={luu} alt="" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Thaydoi;