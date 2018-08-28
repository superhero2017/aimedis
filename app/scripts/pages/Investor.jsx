import React from 'react';

export default class Investor extends React.PureComponent {
  render() {
    return (
      <div key="Investor" className="app__investor app__route">
        <div className="container">
          <section className="app__investor__section1">
            <div className="row">
              <div className="col-12 col-lg-7">
                <div className="app__investor__section1__content">
                  <p className="app__investor__section1__content__title">
                    For Investors
                  </p>
                  <p className="app__investor__section1__content__subtitle">
                    Executive Summary
                  </p>
                  <p className="app__investor__section1__content__description">
                    Suspendisse interdum est at odio faucibus volutpat. Curabitur tincidunt ex non malesuada finibus. Etiam auctor, ante eu sollicitudin sodales, purus nibh venenatis dui, eu venenatis elit lorem quis purus. Donec sed tincidunt justo, sit amet pellentesque eros. In hac habitasse platea dictumst. Proin vitae dui vitae purus ultrices laoreet ultricies id lectus. In facilisis, enim eu aliquet fermentum, mauris nulla venenatis odio, ut tincidunt turpis dui eleifend nunc. Vivamus eleifend massa iaculis metus accumsan dapibus.
                  </p>
                  <p className="app__investor__section1__content__description">
                    Vivamus semper placerat elit, vel dapibus nibh porttitor id. Etiam non velit risus. Ut quis erat vitae nulla accumsan fringilla et et neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Cras mollis augue ac massa suscipit blandit. Sed a nisl in ligula pulvinar tempor.
                  </p>
                  <p className="app__investor__section1__content__description">
                    Proin et mollis erat. Morbi id lorem felis. Phasellus malesuada mauris eu convallis ornare. Quisque sit amet aliquam elit, eget ullamcorper magna. Sed elit augue, dapibus id congue quis, commodo sit amet arcu.
                  </p>
                  <div className="app__investor__section1__content__download">
                    <button className="btn btn__secondary" type="button">DOWNLOAD THE CASE STUDY (8.4 MB)</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="app__investor__mask d-none d-lg-block">
            <div className="app__investor__mask__bottom">
              <img src={require('assets/media/images/Group 8.png')} alt="No Image"/>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
