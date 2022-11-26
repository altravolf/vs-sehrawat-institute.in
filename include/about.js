class cusAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="assets/img/about.jpg" class="img-fluid" alt="Study image">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Know more about us</h3>
            <p class="fst-italic">
              VS Sehrawat Institute is established by Lokesh Sehrawat in 2015 named after his father Mr. Ved Prakash
              Sehrawat.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> We offer best strategy according to your pros and cons.</li>
              <li><i class="bi bi-check-circle"></i> All courses are in affordable prices.</li>
              <li><i class="bi bi-check-circle"></i>Provide you 24x7 support.</li>
            </ul>
            <p>
              We focus more on quality, not on
              quantity. We are not an ordinary institution, we forge bonds like family.
            </p>

          </div>
        </div>

      </div>
    </section>
        `
  }
}
customElements.define("cus-about", cusAbout);



// counter
class cusCount extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="counts" class="counts section-bg">
      <div class="container">

        <div class="row counters">

          <div class="col-lg-4 col text-center">
            <span title="Students yet" data-purecounter-start="0" data-purecounter-end="272" data-purecounter-duration="1"
              class="purecounter"></span>
            <p>Students</p>
          </div>

          <div class="col-lg-4 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="6" data-purecounter-duration="1"
              class="purecounter"></span>
            <p>Courses</p>
          </div>

          <div class="col-lg-4 col text-center">
            <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1"
              class="purecounter"></span>
            <p>Trainers</p>
          </div>

        </div>

      </div>
    </section>
        `
  }
}
customElements.define("cus-count", cusCount);