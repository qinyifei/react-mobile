import React from 'react';
import './index.less';
import FooterComponent from 'components/Footer';
import HeaderComponent from 'components/Header';

function IndexPage() {
    return (
        <div id="home-layout">
            <HeaderComponent />
            <div id="home-main-layout">
                <h2>主页内容</h2>
            </div>
            <FooterComponent />
        </div>
    );
}

export default IndexPage;
