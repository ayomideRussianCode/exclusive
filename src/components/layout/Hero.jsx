export default function Hero() {
  return (
    <div className="bg-white flex mt-6 mb-6 justify-around items-center">
      <div>
        <ul>
          <li>Women's Fashion </li>
          <li>Men's Fashion</li>
          <li>Electronics </li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sport & Outdoor</li>
          <li>Baby's Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div>
       
        <div className="relative">
            <img src="/heroimg.png" alt="" />
            <div className="absolute top-0 left-0 right-0 bottom-0 text-white text-4xl font-bold uppercase text-center flex items-center justify-center">
            <h6>iphone 14 Series</h6>
            <h1>Up to 10% off Voucher</h1>
            <p><a href="">Shop Now</a></p>
        </div>
        </div>
      </div>
    </div>
  );
}
