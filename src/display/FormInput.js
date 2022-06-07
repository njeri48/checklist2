
function FormInput({handleChange, formInputData, handleSubmit}){
    return(

        <div className="form-row row">
          
          <div className="col">
          <h1>Customer Details</h1>
          <label>Name&nbsp;</label> <br/>
            <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control"  placeholder="Full Name" /><br/><br/>
          </div>
          <div className="col">
          <label>Phone Number &nbsp;</label> 
            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</label> <br/>
        
          <input type="text" onChange={handleChange} value={formInputData.phoneNo} name="phoneNo" className="form-control" placeholder="Phone Number" />
            <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
          </div>
          <div className="col">
            <h2>Address</h2>
          <label>County &nbsp;</label> 
          <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Street</label> <br/>
            <select type="text" onChange={handleChange} value={formInputData.address} name="address" className="form-control" placeholder="">
            
              <option value="Nowhere">choose</option>
              <option value="Nairobi">Nairobi</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Kiambu">Kiambu</option>
              </select>
          
            <input type="text" onChange={handleChange} value={formInputData.street} name="street" className="form-control" placeholder="Street" />
          </div>
          
          <div className="col" value={formInputData.payment} onChange={handleChange}>
          <h2>Payment</h2>
            <input type="radio" value={formInputData.cash} name="payment" className="form-control"/>
            <label>Cash</label>
        
            <input type="radio"  value={formInputData.mpesa} name="payment" className="form-control"  />
            <label>M-pesa</label>
          </div>
          <div className="col">
            <input id="button" type="submit" onClick={handleSubmit} className="btn btn-primary" />
          </div>
        </div>
     
      
    )
    }
    export default FormInput;