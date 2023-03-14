    import React from "react";
    function Form(){
    return(
        <>
    <div className="big">
        <div className="rectangle">
            <div className="heading"><h3>Request a Quote</h3></div>
            <div className="d-flex">
                <div className="flex-fill" id="part-number">Part Number*<input type="text" placeholder="Enter your name"></input></div>
                <div className="flex-fill" id="minimum-qty-order-one">Minimum Qty<input type="text" placeholder="Auto Filled"></input></div>
                <div className="flex-fill">Order in Multiplex <input type="text" placeholder="Auto Filled"></input></div>
                <div className="flex-fill" id="quantity-one">Quantity*<input type="text" placeholder="Quantity"></input></div>
            </div>
            <div className="d-flex">
                <div className="flex-fill" id="target-price-unit">Target Price/Unit<input type="text" placeholder="Enter Price$ / Unit#"></input></div>
                <div className="flex-fill" id="minimum-qty-order-two">Competition<input type="text" placeholder="Enter Name, Part #, and/or Price"></input></div>
                <div className="flex-fill" id="quantity-two">Estimated Annual Usage<input type="text" placeholder="Enter Estimated Quantity"></input></div>
            </div>
       </div>
    </div>
      <button className="another-part">Add Another Part</button>
      <div id="light-grey">
        <div className="who-is-the-end-custo">
        Who is the End Customer?*
        <div id="add-different-end-cu">I'm the End Customer</div>
        <div id="add-different-end-cu">Add different End Customer</div>
        
        <div className="d-flex flex-row mb-3">
                <div id="kevin-prince-kevin-p ">My Profile <textarea> 
                Kevin Prince
                kevin.prince@analog.com
                781-496-4010
                Analog Devices, US</textarea>
                </div>
                <div>
                <div id="target-price-unit-two">Profile Information*<input type="text" placeholder="Enter Price$ / Unit#"></input></div>
                <div id="minimum-qty-order-in">Competition<input type="text" placeholder="Enter Name, Part #, and/or Price"></input></div>
                </div>
                </div>
        </div>
    </div>
    </>
        );
    }
    export default Form;
