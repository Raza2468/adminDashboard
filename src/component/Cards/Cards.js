import "./Cards.css";




function Cards() {
  return (
    <div className="featured">

      <div className="featuredItem">
        <span className="featuredTitle">Total Patient</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
        
        </div>
       
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Last Month Patient</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>

        </div>
      
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">This Month Patient</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          
        </div>

      </div>
      <div className="featuredItem">
        <span className="featuredTitle">This Week Patient</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          
        </div>
       
      </div>
    </div>
  );
}
export default Cards;