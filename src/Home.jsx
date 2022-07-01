import React from "react";
import Product from "./Product";
import InfoIcon from '@material-ui/icons/Info';
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <img
          className="home_banner"
          src={require("./banner2.jpg")}
          alt="Banner"
        />

        <div className="home_row">
          <Product
            id="1234"
            title="Find Lightyear toys & games"
            image={require("./product10.jpg")}
            extra="Learn More"
          />

          <Product
            id="1234"
            title="Shop the best in 4K TVs"
            image={require("./product2.jpg")}
            extra="See More"
          />

          <Product
            id="1234"
            title="Support small businesses to win big"
            image={require("./product3.jpg")}
            extra="See More"
          />

          <div className="two_components">
            <div className="component_one">
              <p className="component_onePara">
                Sign in for your best experience
              </p>
              <button className="signin_button">Sign in securely</button>
            </div>
            <img src={require("./ad_giftCard.jpg")} alt="Gift Card Ad" />
          </div>
        </div>

        <div className="home_row">
          <Product
            id="1234"
            title="Gaming month is here"
            image={require("./product5.jpg")}
            extra="See More"
          />
          <Product
            id="1234"
            title="Amazon Gift Cards"
            image={require("./product23.jpg")}
            extra="Visit the Amazon's Gift Cards store"
          />

          <Product
            id="1234"
            title="Better for the planet"
            image={require("./product8.jpg")}
            extra="See More"
          />

          <div className="product_fiveLinks">
            <div className="ad_heading">
              Save $180 with coupon<h4 className="sponsored">Sponsored</h4>
            </div>
            <img
              className="tablet_pic"
              src={require("./product14.jpg")}
              alt="Tablet Photo"
            />
            <div>
              <h4 className="gray">
                <sup>$</sup>
                <strong className="price">599</strong>
                <sup>99</sup>
              </h4>
              <h3 className="sponsored">Discount applied at checkout</h3>
            </div>
            <h3 className="extra_link">Shop Now</h3>
          </div>
        </div>

        <div className="single_banner">
          <div className="single_bannerImage">
            <img
              className="bannerImage"
              src={require("./bannersmall1.jpg")}
              alt="Single Banner Ad"
            />
          </div>
        </div>

        <div className="home_row">
          <Product
            id="1234"
            title="Watch Trailer"
            image={require("./product9.jpg")}
            extra="Watch now on Prime Video"
          />

          <div className="product_fiveLinks">
            <div className="ad_heading">
              Save $30 with coupon<h4 className="sponsored">Sponsored</h4>
            </div>
            <img
              className="tablet_pic"
              src={require("./product22.jpg")}
              alt="Tablet Photo"
            />
            <div>
              <h4 className="gray">
                <sup>$</sup>
                <strong className="price">168</strong>
                <sup>99</sup>
              </h4>
              <h3 className="sponsored">Discount applied at checkout</h3>
            </div>
            <h3 className="extra_link">Shop Now</h3>
          </div>

          <Product
            id="1234"
            title="Save big with coupons"
            image={require("./product7.jpg")}
            extra="See More"
          />

          <div className="just_ad">
            <img
              className="just_adPic"
              src={require("./adAudible.jpg")}
              alt="Audible Ad"
            />
            <span>Sponsored <InfoIcon fontSize="small" color="disabled" /></span>
          </div>
        </div>

        <div className="home_rowBooks">
          <h2>Most wished for in Books</h2>
          <div className="home_rowBooksSlider">
            <img src={require("./book1.jpg")} alt="Books" />
            <img src={require("./book2.jpg")} alt="Books" />
            <img src={require("./book3.jpg")} alt="Books" />
            <img src={require("./book4.jpg")} alt="Books" />
            <img src={require("./book5.jpg")} alt="Books" />
            <img src={require("./book6.jpg")} alt="Books" />
            <img src={require("./book7.jpg")} alt="Books" />
            <img src={require("./book8.jpg")} alt="Books" />
            <img src={require("./book9.jpg")} alt="Books" />
            <img src={require("./book10.jpg")} alt="Books" />
            <img src={require("./book11.jpg")} alt="Books" />
            <img src={require("./book12.jpg")} alt="Books" />
            <img src={require("./book13.jpg")} alt="Books" />
            <img src={require("./book14.jpg")} alt="Books" />
            <img src={require("./book15.jpg")} alt="Books" />
            <img src={require("./book16.jpg")} alt="Books" />
            <img src={require("./book17.jpg")} alt="Books" />
            <img src={require("./book18.jpg")} alt="Books" />
            <img src={require("./book19.jpg")} alt="Books" />
            <img src={require("./book20.jpg")} alt="Books" />
            <img src={require("./book21.jpg")} alt="Books" />
            <img src={require("./book22.jpg")} alt="Books" />
          </div>
        </div>

        <div className="home_row">
          <Product
            id="1234"
            title="Rent or buy to donate"
            image={require("./product15.jpg")}
            extra="Prime Video will donate 100% of proceeds."
          />

          <Product
            id="1234"
            title="Home products from Amazon brands"
            image={require("./product1.jpg")}
            extra="See More"
          />

          <Product
            id="1234"
            title="Kindle Paperwhite Signature Edition"
            image={require("./product11.jpg")}
            extra="Learn More"
          />

          <div className="home_fourProducts">
            <h2>The best in beauty</h2>
            <div className="home_rowMultiple">
              <div>
                <img src={require("./product18a.jpg")} alt="Products" />{" "}
                <span>Skin Care</span>
              </div>
              <div>
                <img src={require("./product18b.jpg")} alt="Products" />{" "}
                <span>Men's Grooming</span>
              </div>
              <div>
                <img src={require("./product18c.jpg")} alt="Products" />{" "}
                <span>Makeup</span>
              </div>
              <div>
                <img src={require("./product18d.jpg")} alt="Products" />{" "}
                <span>Body Care</span>
              </div>
            </div>
            <h4 className="extra_link">Shop Beauty Guide</h4>
          </div>
        </div>

        <div className="home_rowBooks">
          <h2>
            Blockbuster Blu-ray <span className="extra_link">See More</span>
          </h2>
          <div className="home_rowBooksSlider">
            <img src={require("./movie1.jpg")} alt="Books" />
            <img src={require("./movie2.jpg")} alt="Books" />
            <img src={require("./movie3.jpg")} alt="Books" />
            <img src={require("./movie4.jpg")} alt="Books" />
            <img src={require("./movie5.jpg")} alt="Books" />
            <img src={require("./movie6.jpg")} alt="Books" />
            <img src={require("./movie7.jpg")} alt="Books" />
            <img src={require("./movie8.jpg")} alt="Books" />
            <img src={require("./movie9.jpg")} alt="Books" />
            <img src={require("./movie10.jpg")} alt="Books" />
            <img src={require("./movie11.jpg")} alt="Books" />
            <img src={require("./movie12.jpg")} alt="Books" />
            <img src={require("./movie13.jpg")} alt="Books" />
            <img src={require("./movie14.jpg")} alt="Books" />
            <img src={require("./movie15.jpg")} alt="Books" />
          </div>
        </div>

        <div className="home_row">
          <Product
            id="1234"
            title="Save on pets subscription"
            image={require("./product13.jpg")}
            extra="Shop Subscribe & Save"
          />

          {/* <div className="four_products">
            <h2>Best Sellers in Toys & Games</h2>
            <img src={require("./product20a.jpg")} alt="Multiple Products" />
            <h5 className="gray">Crayola 100 Colored Pencils</h5>
            <h4 className="gray">
              <sup>$</sup>
              <strong className="price">13</strong>
              <sup>47</sup>
              List:{" "}
              <span style={{ textDecoration: "line-through" }}>$21.99</span>
            </h4>
            <div className="thumbnails">
              <img src={require("./product20aa.jpg")} alt="Thumbnail 1" />
              <img src={require("./product20ba.jpg")} alt="Thumbnail 2" />
              <img src={require("./product20ca.jpg")} alt="Thumbnail 3" />
              <img src={require("./product20da.jpg")} alt="Thumbnail 4" />
            </div>
          </div> */}
          <div className="product_fiveLinks">
            <div className="ad_heading">
              Save 5% with Subscribe & Save<h4 className="sponsored">Sponsored</h4>
            </div>
            <img
              className="tablet_pic"
              src={require("./product24.jpg")}
              alt="Tablet Photo"
            />
            <div>
              <h4 className="gray">
                <sup>$</sup>
                <strong className="price">8</strong>
                <sup>54</sup>
              </h4>
              <h3 className="sponsored gray" style={{textDecoration: "line-through"}}>$8.99</h3>
            </div>
            <h3 className="extra_link">Shop Now</h3>
          </div>

          <Product
            id="1234"
            title="New releases in Video Games"
            image={require("./product19.jpg")}
            extra="Learn More"
          />

          <div className="home_fourProducts">
            <h2>Deals on overstock items</h2>
            <div className="home_rowMultiple">
              <div>
                <img src={require("./product4a.jpg")} alt="Products" />{" "}
                <span>Home & Furniture</span>
              </div>
              <div>
                <img src={require("./product4b.jpg")} alt="Products" />{" "}
                <span>Kitchen</span>
              </div>
              <div>
                <img src={require("./product4c.jpg")} alt="Products" />{" "}
                <span>Automotive</span>
              </div>
              <div>
                <img src={require("./product4d.jpg")} alt="Products" />{" "}
                <span>Electronics</span>
              </div>
            </div>
            <h4 className="extra_link">Shop Outlet</h4>
          </div>
        </div>

        <div className="signin_space">
          <hr />
          <div className="signin">
            <p>See personalized recommendations</p>
            <button className="signin_button">Sign in</button>
            <p>
              New Customer? <span className="extra_link">Start Here</span>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Home;
