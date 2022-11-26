class cusTrainer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="trainers" class="trainers">
      <div class="container" data-aos="fade-up">

        <div class="row" data-aos="zoom-in" data-aos-delay="100">



          <div class="col-lg-4 col-md-6 d-flex align-items-stretch m-auto">
            <div class="member">
              <img src="assets/img/trainers/trainer-2.jpg" class="img-fluid" alt="Lokesh Sehrawat">
              <div class="member-content">
                <h4>Lokesh Sehrawat</h4>
                <span>Teacher</span>
                <p>
                  Lokesh Sir(Lucky Sir), is very passionate, hard working and dedicated to his work. He has
                  teaching experence of 8 years in the field of Biology and Chemistry.
                </p>
                <div class="social">
                  <!-- <a href=""><i class="bi bi-twitter"></i></a> -->
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <!-- <a href=""><i class="bi bi-linkedin"></i></a> -->
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
        `
  }
}

customElements.define("cus-trainer", cusTrainer);