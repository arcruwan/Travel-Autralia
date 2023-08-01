import "./search.css";

export function Search() {
  return (
    <div class="page-wrapper  p-t-165 p-b-100">
      <div class="wrapper wrapper--w680">
        <div class="card card-2">
          <div class="card-body">
            <ul class="tab-list">
              <li class="tab-list__item active">
                <a class="tab-list__link" href="#tab1" data-toggle="tab">
                  hotels
                </a>
              </li>
              <li class="tab-list__item">
                <a class="tab-list__link" href="#tab2" data-toggle="tab">
                  car
                </a>
              </li>
              <li class="tab-list__item">
                <a class="tab-list__link" href="#tab3" data-toggle="tab">
                  flight
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tab1">
                <form method="POST" action="#">
                  <div class="input-group">
                    <label class="label">where:</label>
                    <input
                      class="input--style-1"
                      type="text"
                      name="address"
                      placeholder="City, region or specific hotel"
                      required="required"
                    />
                  </div>
                  <div class="row row-space">
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">check-in:</label>
                        <input
                          class="input--style-1"
                          type="text"
                          name="check-in"
                          placeholder="mm/dd/yyyy"
                          id="input-start"
                        />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">check-out:</label>
                        <input
                          class="input--style-1"
                          type="text"
                          name="check-out"
                          placeholder="mm/dd/yyyy"
                          id="input-end"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row row-space">
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">check-in:</label>
                        <input
                          class="input--style-1"
                          type="text"
                          name="check-in"
                          placeholder="mm/dd/yyyy"
                          id="input-start"
                        />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">check-out:</label>
                        <input
                          class="input--style-1"
                          type="text"
                          name="check-out"
                          placeholder="mm/dd/yyyy"
                          id="input-end"
                        />
                      </div>
                    </div>
                  </div>

                  <button class="btn-submit" type="submit">
                    search
                  </button>
                </form>
              </div>
              <div class="tab-pane" id="tab2">
                <form method="POST" action="#">
                  <div class="input-group">
                    <label class="label">location:</label>
                    <input
                      class="input--style-1"
                      type="text"
                      name="location"
                      placeholder="Destination, hotel name"
                      required="required"
                    />
                  </div>
                  <div class="row row-space">
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">driver age:</label>
                        <div class="rs-select2 js-select-simple select--no-search">
                          <select name="driver-age">
                            <option>23</option>
                            <option>24</option>
                            <option selected="selected">25</option>
                            <option>26</option>
                          </select>
                          <div class="select-dropdown"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">car group:</label>
                        <div class="rs-select2 js-select-simple select--no-search">
                          <select name="car-group">
                            <option selected="selected">Group S-car</option>
                            <option>Group 1</option>
                            <option>Group 2</option>
                            <option>Group 3</option>
                          </select>
                          <div class="select-dropdown"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row row-space">
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">pick up:</label>
                        <input
                          class="input--style-1 js-single-datepicker"
                          type="text"
                          name="pickup"
                          placeholder="mm/dd/yyyy"
                          data-drop="1"
                        />
                        <div
                          class="dropdown-datepicker"
                          id="dropdown-datepicker1"
                        ></div>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">time:</label>
                        <div class="rs-select2 js-select-simple select--no-search">
                          <select name="time-pickup">
                            <option selected="selected">10:00 AM</option>
                            <option>5:00 AM</option>
                            <option>6:00 AM</option>
                            <option>7:00 AM</option>
                          </select>
                          <div class="select-dropdown"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row row-space">
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">drop off:</label>
                        <input
                          class="input--style-1 js-single-datepicker"
                          type="text"
                          name="dropoff"
                          placeholder="mm/dd/yyyy"
                          data-drop="2"
                        />
                        <div
                          class="dropdown-datepicker"
                          id="dropdown-datepicker2"
                        ></div>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">time:</label>
                        <div class="rs-select2 js-select-simple select--no-search">
                          <select name="time-dropoff">
                            <option selected="selected">10:00 AM</option>
                            <option>5:00 AM</option>
                            <option>6:00 AM</option>
                            <option>7:00 AM</option>
                          </select>
                          <div class="select-dropdown"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn-submit m-t-0" type="submit">
                    search
                  </button>
                </form>
              </div>
              <div class="tab-pane" id="tab3">
                <form method="POST" action="#">
                  <div class="input-group">
                    <label class="label">origin:</label>
                    <input
                      class="input--style-1"
                      type="text"
                      name="origin"
                      placeholder="City or airport"
                      required="required"
                    />
                  </div>
                  <div class="input-group">
                    <label class="label">destination:</label>
                    <input
                      class="input--style-1"
                      type="text"
                      name="destination"
                      placeholder="City or airport"
                      required="required"
                    />
                  </div>
                  <div class="row row-space">
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">Departing:</label>
                        <input
                          class="input--style-1"
                          type="text"
                          name="check-in"
                          placeholder="mm/dd/yyyy"
                          id="input-start-2"
                        />
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-group">
                        <label class="label">returning:</label>
                        <input
                          class="input--style-1"
                          type="text"
                          name="check-out"
                          placeholder="mm/dd/yyyy"
                          id="input-end-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="p-t-5">
                    <label class="checkbox-container m-r-45">
                      First Class
                      <input type="checkbox" name="first-class" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container m-r-45">
                      Business
                      <input type="checkbox" name="business" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container">
                      Economy
                      <input type="checkbox" checked="checked" name="economy" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <button class="btn-submit" type="submit">
                    search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
