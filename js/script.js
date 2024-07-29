const model = document.querySelector(".model");
const model_btn = document.querySelector(".model-btn-set");
const mpdel_name = document.getElementById("model-name");
const app = document.getElementById("app");

const model_redirect = (key) => {
  model_btn.innerHTML = key;
  mpdel_name.innerHTML = key;
  model.classList.toggle("hidden");
};
const router = (route) => {
  route === "About"
    ? (app.innerHTML = ` <section class="hero">
        <div class="flex-row">
          <div class="hero-left flex">
            <div class="hero-text-row">
              <h1  style="font-size:6rem; padding-top:5rem;">About Us.</h1>
            </div>
            <div class="hero-text-p-row">
              <p class="hero-text-p">
                Join 4 million+ members who get up to $250, build their credit,
                and save smarter with Brigit. It only takes 2 minutes. No credit
                check required. No interest.1
              </p>
            </div>
          
            
        
           
            </div>
          </div>
          <div class="hero-right">
            <picture>
              <source media="(min-width: )" srcset="./img/hero.png" />
              <img src="./img/hero.png" alt="hero" srcset="./img/hero2.png" />
            </picture>
          </div>
        </div>
      </section>
      <section class="flex">
       <div class="backed">
              <p style="font-size: 4rem;">Founded by</p>
            </div>
            <div class="flex-row">
              <div class="flex">
              <picture>
                <source media="(min-width:100px )" srcset="./img/32.jpg" />
                <img src="./img/32.jpg" alt="avatar" style="height:300px;"/>
              </picture>
              <p>Hemand </p>
            </div>
            <div class="flex">
              <picture>
                <source media="(min-width: 100px;)" srcset="./img/44.jpg" />
                <img src="./img/44.jpg" alt="avatar" style="height:300px;"/>
              </picture>
              <p>Henna </p>
            </div>
        </section>
      `)
    : "";
  route === "Home"
    ? (app.innerHTML = `      <section class="hero">
        <div class="flex-row">
          <div class="hero-left flex">
            <div class="hero-text-row">
              <h1 class="hero-text">Get your finances on track.</h1>
            </div>
            <div class="hero-text-p-row">
              <p class="hero-text-p">
                Join 4 million+ members who get up to $250, build their credit,
                and save smarter with Brigit. It only takes 2 minutes. No credit
                check required. No interest.1
              </p>
            </div>
          
            
            
            <div class="flex-row">
              <div class="star">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star-svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star-svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star-svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star-svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star-svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                
              </div>
              <div class="start-text">
                <p>250k+ ratings on the App Store and Google Play</p>
              </div>
            </div>
            <div class="backed">
              <p>Backed by:</p>
            </div>
            <div class="flex-row">
              <div class="flex">
              <picture>
                <source media="(min-width: )" srcset="./img/32.jpg" />
                <img src="./img/32.jpg" alt="avatar" srcset="" class="avatar"/>
              </picture>
              <p>Hemand </p>
            </div>
            <div class="flex">
              <picture>
                <source media="(min-width: )" srcset="./img/44.jpg" />
                <img src="./img/44.jpg" alt="avatar" class="avatar"/>
              </picture>
              <p>Henna </p>
            </div>
            <div class="flex">
            
              <a href="" class="btn-hero">Get Nile</a>
            </div>
            </div>
          </div>
          <div class="hero-right">
            <picture>
              <source media="(min-width: )" srcset="./img/hero.png" />
              <img src="./img/hero.png" alt="hero" srcset="./img/hero.png" />
            </picture>
          </div>
        </div>
      </section>
      <section class="carousel">
        <div class="carousel">
          <ul class="carousel-ui">
            <li class="carousel-li">
              <picture>
                <source media="(min-width:450px )" srcset="./img/logo.png" />
                <img src="./img/logo.png" alt="carousel-img" class="logo" srcset="./img/logo.png" />
              </picture>
            </li>
            <li class="carousel-li">
              <picture>
                <source media="(min-width:450px )" srcset="./img/logo.png" />
                <img src="./img/logo.png" alt="carousel-img" class="logo" srcset="./img/logo.png" />
              </picture>
            </li>
            <li class="carousel-li">
              <picture>
                <source media="(min-width:450px )" srcset="./img/logo.png" />
                <img src="./img/logo.png" alt="carousel-img" class="logo" srcset="./img/logo.png" />
              </picture>
            </li>
            <li class="carousel-li">
              <picture>
                <source media="(min-width:450px )" srcset="./img/logo.png" />
                <img src="./img/logo.png" alt="carousel-img" class="logo" srcset="./img/logo.png" />
              </picture>
            </li>
   
          </ul>
        </div>
      </section>
      <section class="phone-scroll">
        <div class="flex-row">
          <div class="col-img">
            <picture>
              <source media="(min-width: )"  srcset="./img/phone.png" />
              <img  src="./img/phone.png" alt="phone" class="list-img" srcset="./img/phone.png" />
            </picture>
          </div>
          <div class="text-slide">
            <ul>
              <li id="text-slide-1 ">
                <h1>Get up to $250 quickly</h1>
                <p class="pb-2">
                  Just tap to get an advance within seconds. No credit check. No
                  interest. No tipping.
                </p>
                <a href="" class="btn-hero ">Get Bright</a>
              </li>
              <li id="text-slide-2">
                <h1>Get up to $250 quickly</h1>
                <p>
                  Just tap to get an advance within seconds. No credit check. No
                  interest. No tipping.
                </p>
              </li>
              <li id="text-slide-3">
                <h1>Get up to $250 quickly</h1>
                <p>
                  Just tap to get an advance within seconds. No credit check. No
                  interest. No tipping.
                </p>
              </li>
              <li id="text-slide-4">
                <h1>Get up to $250 quickly</h1>
                <p>
                  Just tap to get an advance within seconds. No credit check. No
                  interest. No tipping.
                </p>
              </li>
              <li id="text-slide-5">
                <h1>Get up to $250 quickly</h1>
                <p>
                  Just tap to get an advance within seconds. No credit check. No
                  interest. No tipping.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="realtime alert-3-col">
        <div class="flex">
        <div class="flex-row ">
          <div class="col-1">
            <div class="icon"><figure><img src="./img/alert-icon.svg" alt="" srcset="./img/alert-icon.svg"></figure></div>
            <div class="h1">
              <h1 class="font-med ">Real-time alerts</h1>
            </div>
            <div class="p">
              <p>Always know your bank balance with real-time updates.</p>
            </div>
          </div>
          <div class="col-2">
            <div class="icon"><figure><img src="./img/easy-graphic-icon.svg" alt="" srcset="./img/easy-graphic-icon.svg"></figure></div>
            <div class="h1">
              <h1 class="font-med ">Easy budgets</h1>
            </div>
            <div class="p">
              <p>Always know your bank balance with real-time updates.</p>
            </div>
          </div>
          <div class="col-3">
            <div class="icon"><figure><img src="./img/security-icon.svg" alt="" srcset="./img/security-icon.svg"></figure></div>
            <div class="h1">
              <h1 class="font-med ">Track savings</h1>
            </div>
            <div class="p">
              <p>Always know your bank balance with real-time updates.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section class="price">
        <div class="flex">
          <div class="flex">
            <h1>We keep our pricing simple and transparent</h1>
            <p>
              You can even earn free membership by referring friends and loved
              ones
            </p>
          </div>
          <div class="flex-row">
            <div class="price-card shadow">
              <h1>Free plan</h1>
              <div class="icon"><figure><img src="./img/free-plan.svg" alt="free" srcset="./img/free-plan.svg"></figure></div>
              <p>
                Get alerts, budgeting tools, financial insights, and more –all
                at your fingertips.
              </p>
              <h1>FREE</h1>
            </div>
            <div class="price-card shadow">
              <h1>Plus plan</h1>
              <div class="icon"><figure><img src="./img/plus-plan.svg" alt="plus" srcset="./img/plus-plan.svg"></figure></div>
              <p>
                Get alerts, budgeting tools, financial insights, and more –all
                at your fingertips.
              </p>
              <h1>$9.99/month</h1>
              <div class="ribbon">
                <div class="icon"><figure><img src="./img/ribbon.png" alt="plus" srcset="./img/ribbon.png"></figure></div>
             
              </div>
            </div>
          </div>

          <a href="" class="btn-hero">Get Bright</a>
        </div>
      </section>
      <section class="youtube">
        <div class="flex ">
          <h1 class="pb-2">What our members say</h1>
          <div class="flex-row">
            <div class="col-1 ">
              <iframe width="auto" height="315" src="https://www.youtube.com/embed/7wdtacrpHlo" title="Airbus A380 Alternative Designs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <p>
                As a teacher and mother, Dominique uses Brigit to save and get
                ahead of her finances.
              </p>
            </div>
            <div class="col-1 ">
              <iframe width="auto" height="315" src="https://www.youtube.com/embed/7wdtacrpHlo" title="Airbus A380 Alternative Designs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
              <p>
                As a teacher and mother, Dominique uses Brigit to save and get
                ahead of her finances.
              </p>
            </div>
            <div class="col-1 ">
              <iframe width="auto" height="315" src="https://www.youtube.com/embed/7wdtacrpHlo" title="Airbus A380 Alternative Designs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <p>
                As a teacher and mother, Dominique uses Brigit to save and get
                ahead of her finances.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="our impact">
        <div class="flex ">
          <h1 class="pb-2">Our impact5</h1>
          <div class="flex-row">
            <div class="col-1">
              <div class="icon"><figure><img src="./img/member-count-icon.svg" alt="" srcset="./img/member-count-icon.svg"></figure></div>
              <div class="h1">
                <p>Saved our members from</p>

                <h1 class="font-med ">$ 435 million</h1>
                <p>Saved our members from</p>
              </div>
            </div>
            <div class="col-2">
              <div class="icon"><figure><img src="./img/member-saving-icon.svg" alt="" srcset="./img/member-saving-icon.svg"></figure></div>
              <div class="h1">
                <p>Saved our members from</p>

                <h1 class="font-med ">$ 435 million</h1>
                <p>Saved our members from</p>
              </div>
            </div>
            <div class="col-3">
              <div class="icon"><figure><img src="./img/member-total-savings-icon.svg" alt="" srcset="./img/member-total-savings-icon.svg"></figure></div>
             
              <div class="h1">
                <p>Saved our members from</p>

                <h1 class="font-med ">$ 435 million</h1>
                <p>Saved our members from</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="privacy-security">
        <div class="flex ">
          <h1>Your data stays safe and secure</h1>
          <div class="flex-row">
            <div class="price-card">
              <div class="icon"><figure><img src="./img/security-svg.svg" alt="" srcset="./img/Security-svg.svg"></figure></div>  
              <h1>Security</h1>

              <p>
                Get alerts, budgeting tools, financial insights, and more –all
                at your fingertips.
              </p>
              <p>learn more-></p>
            </div>
            <div class="price-card">
              <div class="icon"><figure><img src="./img/privacy.svg" alt="" srcset="./img/privacy.svg"></figure></div>
             
              <h1>Privacy</h1>

              <p>
                Get alerts, budgeting tools, financial insights, and more –all
                at your fingertips.
              </p>
              <p>learn more-></p>
            </div>
          </div>
        </div>
      </section>`)
    : "";
  route === "FAQ"
    ? (app.innerHTML = ` <section class="carousel">
        <div class="carousel">
          <ul class="carousel-ui">
            <li class="carousel-li">
              <picture>
                <source media="(min-width:450px )" srcset="./img/logo.png" />
                <img src="./img/logo.png" alt="carousel-img" class="logo" srcset="./img/logo.png" />
              </picture>
            </li>
            <li class="carousel-li">
              <picture>
                <source media="(min-width:450px )" srcset="./img/logo.png" />
                <img src="./img/logo.png" alt="carousel-img" class="logo" srcset="./img/logo.png" />
              </picture>
            </li>
            <li class="carousel-li">
              <picture>
                <source media="(min-width:450px )" srcset="./img/logo.png" />
                <img src="./img/logo.png" alt="carousel-img" class="logo" srcset="./img/logo.png" />
              </picture>
            </li>
            <li class="carousel-li">
              <picture>
                <source media="(min-width:450px )" srcset="./img/logo.png" />
                <img src="./img/logo.png" alt="carousel-img" class="logo" srcset="./img/logo.png" />
              </picture>
            </li>
   
          </ul>
        </div>
      </section>`)
    : "";
  route === "Product"
    ? (app.innerHTML = ` <section class="hero">
        <div class="flex-row">
          <div class="hero-left flex">
            <div class="hero-text-row">
              <h1  style="font-size:4rem; padding-top:5rem;">Diversified Product !</h1>
            </div>
            <div class="hero-text-p-row">
              <p class="hero-text-p">
               Search Through Our Diversified Products
               The importance of diversity in financial services cannot be overstated. After all, diversity in priorities and viewpoints can be beneficial to a company's well-being.
2
 Recent research also underscores the significant role of workforce diversity in enhancing business performance. Companies that integrate diverse perspectives in decision-making at all organizational levels see marked improvements in efficiency and results; inclusive teams are more effective, making superior decisions 87% of the time and achieving 60% better outcomes
              </p>
            </div>
          </div>
          </div>
          <div class="hero-right">
            <picture>
              <source media="(min-width: )" srcset="./img/hero.png" />
              <img src="./img/hero.png" alt="hero" srcset="./img/bg.png" />
            </picture>
          </div>
        </div>
      </section>
      <section class="flex-row-product">
       <div class="product">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
</svg>

<span>Mutual Fund </span>
<p>Join 4 million+ members who get up to $250, build their credit, and save smarter with Brigit.</p>
       </div>
              <div class="product">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>

<span>Insurance </span>
<p>Join 4 million+ members who get up to $250, build their credit, and save smarter with Brigit.</p>
       </div>
              <div class="product">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
</svg>

<span>Home Loan </span>
<p>Join 4 million+ members who get up to $250, build their credit, and save smarter with Brigit.</p>
       </div>
              <div class="product">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

<span>Wire Money </span>
<p>Join 4 million+ members who get up to $250, build their credit, and save smarter with Brigit.</p>
       </div>
              <div class="product">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>

<span>Money Transfer </span>
<p>Join 4 million+ members who get up to $250, build their credit, and save smarter with Brigit.</p>
       </div>
              <div class="product">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
</svg>

<span>NCD/Debenture </span>
<p>Join 4 million+ members who get up to $250, build their credit, and save smarter with Brigit.</p>
       </div>
              <div class="product">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
</svg>

<span>ATM </span>
<p>Join 4 million+ members who get up to $250, build their credit, and save smarter with Brigit.</p>
       </div>
              <div class="product">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
</svg>
<span>Finance </span>
<p>Join 4 million+ members who get up to $250, build their credit, and save smarter with Brigit.</p>
       </div>
        </section>
      `)
    : "";
};
