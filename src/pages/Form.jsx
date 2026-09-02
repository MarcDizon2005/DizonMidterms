export default function Form() {
  return (
    <div>
      <h1>Form</h1>
      <form>
        <div>
          <label>Guitar Model: </label>
          <input type="text" name="guitModel" />
        </div>

        <div>
          <label>Body Type: </label>
          <input type="text" name="bodyType" />
        </div>

        <div>
          <label>Brand: </label>
          <input type="text" name="brand" />
        </div>

        <div>
          <label>Stock: </label>
          <input type="number" name="stock" />
        </div>

        <div>
          <label>Company Name: </label>
          <input type="text" name="compName" />
        </div>

        <div>
          <label>User Role: </label>
          <label>
            <input type="radio" name="userRole" value="Customer" /> User
          </label>
          <label>
            <input type="radio" name="userRole" value="Merchant" /> Admin
          </label>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
