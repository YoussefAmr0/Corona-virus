<template>
  <section>
    <div id="app">
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-container>
          <b-navbar-brand href="#" class="row">
            <h1 class="nav">
              C<img src="./assets/images/favicon.png" alt="" class="col-2" />VID
              <span>19</span>
            </h1>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="m-auto">
              <a class="nav-link bd-highlight"
                ><router-link class="Home" to="/">Home</router-link></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="About" to="/about"
                  >About Corona</router-link
                ></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="sympo" to="/Symptoms"
                  >Symptoms</router-link
                ></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="prevetion" to="/prevetion"
                  >Prevetion</router-link
                ></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="treaq" to="/treaq"
                  >Treatment</router-link
                ></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="faq" to="/faq">FAQ</router-link></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="news" to="/news">News</router-link></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="dodont" to="/dodont"
                  >Do&dont</router-link
                ></a
              >
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>

      <b-navbar class="sticky-nav fixed-top" toggleable="lg" type="light" variant="light">
        <b-container>
          <b-navbar-brand href="#" class="row">
            <h1 class="nav">
              C<img src="./assets/images/favicon.png" alt="" class="col-2" />VID
              <span>19</span>
            </h1>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="m-auto">
              <a class="nav-link bd-highlight"
                ><router-link class="Home" to="/">Home</router-link></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="About" to="/about"
                  >About Corona</router-link
                ></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="sympo" to="/Symptoms"
                  >Symptoms</router-link
                ></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="prevetion" to="/prevetion"
                  >Prevetion</router-link
                ></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="treaq" to="/treaq"
                  >Treatment</router-link
                ></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="faq" to="/faq">FAQ</router-link></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="news" to="/news">News</router-link></a
              >
              <a class="nav-link bd-highlight"
                ><router-link class="dodont" to="/dodont"
                  >Do&dont</router-link
                ></a
              >
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>

      <router-view />
    </div>

    <div class="scroll-to-top fixed-bottom">
      <font-awesome-icon
        class="icon position-absolute bottom-0 end-0 fa-2x"
        icon="arrow-circle-up"
      />
    </div>

    <section class="footer">
      <b-container>
        <div class="upperfooter d-flex justify-content-around">
          <b-row>
            <b-col>
              <div class="cov">
                <h2>
                  C<img
                    src="./assets/images/favicon.png"
                    alt=""
                    class="col-1"
                  />VID<span>19</span>
                </h2>
                <p>
                  This website is for health information and advice about
                  coronavirus (COVID-19), how to prevent and protect yourself
                  from disease.Learn about the government response to
                  coronavirus on GOV.UK.
                </p>
              </div>
            </b-col>
            <b-col>
              <div class="quickl row">
                <h3 class="col-lg-12 col-md-5 col-sm-12">QUICK LINK</h3>
                <a href="" class="col-lg-12 col-md-5 col-sm-12">About Corona</a>
                <a href="" class="col-lg-12 col-md-5 col-sm-12">Symptoms</a>
                <a href="" class="col-lg-12 col-md-5 col-sm-12">Prevention</a>
                <a href="" class="col-lg-12 col-md-5 col-sm-12"
                  >Protect Youself</a
                >
                <a href="" class="col-lg-12 col-md-5 col-sm-12">FAQs</a>
              </div>
            </b-col>
            <b-col>
              <div class="helpl row">
                <h4 class="col-lg-12 col-md-5 col-sm-12">HELPFULL LINK</h4>
                <a href="" class="col-lg-12 col-md-5 col-sm-12"
                  >Healthcare Professionals</a
                >
                <a href="" class="col-lg-12 col-md-5 col-sm-12"
                  >Healthcare Facilities</a
                >
                <a href="" class="col-lg-12 col-md-5 col-sm-12"
                  >Older Adults & Medical Conditions</a
                >
                <a href="" class="col-lg-12 col-md-5 col-sm-12"
                  >Repare your Family</a
                >
              </div>
            </b-col>
            <b-col>
              <div class="impl row">
                <h5>IMPORTANT LINK</h5>
                <a href="" class="col-lg-12 col-md-5 col-sm-12">WHO Website</a>
                <a href="" class="col-lg-12 col-md-5 col-sm-12">CDC Website</a>
                <a href="" class="col-lg-12 col-md-5 col-sm-12">NHS Website</a>
                <a href="" class="col-lg-12 col-md-5 col-sm-12"
                  >Harvard Health</a
                >
              </div>
            </b-col>
          </b-row>
        </div>
        <div>
          <div class="d-flex justify-content-between">
            <div>
              <p>
                © 2020 COVID-19. Template Made by
                <span>Mina Karam Ghoprial .</span>
              </p>
            </div>
            <div><a href="">privacy policy</a></div>
          </div>
          <p>
            Disclaimer: We hope you find the information presented on this
            website useful. This website is for general information and raise
            awareness of (2019-nCoV) only. All the information based on WHO, NHS
            and CDC website. Information on our website is meant for awareness,
            if you have any doubt please verify from respective site.
          </p>
        </div>
      </b-container>
    </section>
  </section>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--dark);
}
.nav {
  color: var(--light-gray);
  font-weight: var(--font-weight);
}
.Home,
.About,
.sympo,
.prevetion,
.treaq,
.faq,
.news,
.dodont {
  text-decoration: transparent;
  color: var(--light-gray);
  font-weight: var(--font-weight);
}
.Home.router-link-exact-active,
.About.router-link-exact-active,
.sympo.router-link-exact-active.router-link-active,
.prevetion.router-link-exact-active.router-link-active,
.treaq.router-link-exact-active.router-link-active,
.faq.router-link-exact-active.router-link-active,
.news.router-link-exact-active.router-link-active,
.dodont.router-link-exact-active.router-link-active {
  color: var(--sec-color);
}
.footer {
  background-image: url("assets/images/shape-a.png");
  background-color: var(--dark-blue);
  color: var(--white);
  padding: 20px;
}
.footer a {
  padding: 10px;
  text-decoration: none;
  color: var(--white-gray);
}
.footer p {
  color: var(--white-gray);
}
.footer h2 span {
  color: var(--light-gray);
}
.h2,
.h3,
.h4,
.h5 {
  font-weight: var(--font-weight);
}
.upperfooter {
  border-bottom: 2px solid var(--white);
}
</style>






<script>
export default {
  mounted() {
    let body = document.querySelector("html,body");
    let ScrollToTop = document.querySelector(".scroll-to-top");
    window.addEventListener("scroll", () => {
      if (body.scrollTop >= 1) {
        ScrollToTop.style.display = "block";
        ScrollToTop.addEventListener("click", () => {
          window.scrollTo(0, 0);
        });
      } else {
        ScrollToTop.style.display = "none";
      }
    });
    let stickynav = document.querySelector(".sticky-nav");
    window.addEventListener("scroll", function () {
      if (body.scrollTop <= 100) {
        stickynav.style.display = "none";
        // stickynav.classList.remove('animate__animated' , 'animate__bounceOutUp');
        // stickynav.classList.add('animate__animated' , 'animate__bounceInDown');
      } else {
        stickynav.style.display = "block";
        // stickynav.classList.remove('animate__animated' , 'animate__bounceInDown');
        // stickynav.classList.add('animate__animated' , 'animate__bounceOutUp');
      }
      // console.log(stickynav);
    });
  },
};
</script>