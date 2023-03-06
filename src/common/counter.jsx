import React from "react";
import Count from "./count";

//  counter_text;
const counter_text = [
  {
    id: 1,
    color: "sky-hard",
    counter: 1492,
    text: "Laboratories in 100+ states",
  },
  {
    id: 2,
    color: "pink-hard",
    counter: 152,
    text: "Laboratory specialists",
  },
  {
    id: 3,
    color: "sky-hard",
    counter: 1022,
    text: "Material collection points",
  },
  {
    id: 4,
    color: "pink-hard",
    counter: 24332,
    text: "Patients diagnosed in 2022",
  },
];

const Counter = ({ cls = "pt-40 pb-100"  }) => {
  return (
    <>
      <section className={`counter-area ${cls} theme-light-bg`} style={{ backgroundImage: "url(/assets/img/shape/shape-bg-06.png)" }}>
        <div className="container"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-section text-center">
                  <span className="tp-section__sub-title sub-title-white left-line-white right-line-white mb-25">
                    Our Numbers
                  </span>
                  <h3 className="tp-section__title title-white mb-80">
                    Some Facts About Us
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row counter-font-white">
            {counter_text.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="counter__item blue-border mb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className={`counter__icon ${item.color} mb-15`}>
                    <i></i>
                  </div>
                  <div className="counter__content">
                    <h4 className="counter__title">
                      <span className="counter">
                        <Count  number={item.counter} />
                      </span>
                    </h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
