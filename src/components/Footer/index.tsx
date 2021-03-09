import React from 'react';
import './index.less';
import FooterConfig from 'config/footer';

function FooterComponent() {
    console.log();
    return (
        <div id="home-footer-layout">
            {FooterConfig.map((value, key) => (
                <p key={key} className="home-footer-item">
                    {value.value}
                </p>
            ))}
        </div>
    );
}

export default FooterComponent;
