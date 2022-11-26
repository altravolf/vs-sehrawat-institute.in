class cusCourse extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="popular-courses" class="courses">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Courses</h2>
          <p>Popular Courses</p>
        </div>

        <div class="row" data-aos="zoom-in" data-aos-delay="100">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="course-item">
              <img src="assets/img/course-1.jpg" class="img-fluid" alt="One Year Neet Course">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>NEET COURSE</h4>
                  <p class="price">&#8377;95,000</p>
                </div>

                <h3><a href="contact.html">One Year NEET Course</a></h3>
                <p>Full one year NEET Course with step by step strategy toward the end goal. This course include all
                  three subjects: Biology, Chemistry and Physics.</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                </div>
              </div>
            </div>
          </div> <!-- End Course Item-->

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="course-item">
              <img src="assets/img/course-2x.png" class="img-fluid" alt="Two Year Neet Course">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>NEET COURSE</h4>
                  <p class="price">&#8377;1,90,000</p>
                </div>

                <h3><a href="contact.html">Two Year NEET Course</a></h3>
                <p> Two year NEET Course is focused on students who just appear in 11th or 12th class. It'll make a strong base for young students.
                </p>
                <div class="trainer d-flex justify-content-between align-items-center">
                </div>
              </div>
            </div>
          </div> <!-- End Course Item-->

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="course-item">
              <img src="assets/img/course-2.jpg" class="img-fluid" alt="Neet Crash Course">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>NEET CRASH COURSE</h4>
                  <p class="price">&#8377;40,000</p>
                </div>

                <h3><a href="contact.html">Four Month Crash Course</a></h3>
                <p>Four month NEET crash course will boost your scores and confidence exponentially. In finial times
                  this course help you get best of yourself.</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                </div>
              </div>
            </div>
          </div> <!-- End Course Item-->

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="course-item">
              <img src="assets/img/course-4.jpg" class="img-fluid" alt="DNA helix photo">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>Only Biology Special</h4>
                  <p class="price">&#8377;35,000/yr</p>
                </div>

                <h3><a href="contact.html">Biology NEET</a></h3>
                <p>This course is special for biology NEET. 11th and 12th both biology NCERT with 4000+ question. All
                  question are NCERT based. 90% of the question appear in actual NEET test.</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                </div>
              </div>
            </div>
          </div> <!-- End Course Item-->

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="course-item">
              <img src="assets/img/course-5.jpg" class="img-fluid" alt="chemisty photo">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>Only Chemistry Special</h4>
                  <p class="price">&#8377;35,000/yr</p>
                </div>

                <h3><a href="contact.html">Chemistry NEET</a></h3>
                <p>This course is special for chemisty NEET. 11th and 12th both chemisty NCERT with 4000+ question. All
                  question are NCERT based. 80% of the question appear in actual NEET test.</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                </div>
              </div>
            </div>
          </div> <!-- End Course Item-->

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="course-item">
              <img src="assets/img/course-6.jpg" class="img-fluid" alt="Physics photo">
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>Only Physics Special</h4>
                  <p class="price">&#8377;35,000/yr</p>
                </div>

                <h3><a href="contact.html">Physics NEET</a></h3>
                <p>This course is special for biology NEET. 11th and 12th both biology NCERT with 4000+ question. All
                  question are NCERT based. 75% of the question appear in actual NEET test.</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                </div>
              </div>
            </div>
          </div>
        </div> <!-- End Course Item-->

      </div>

      </div>
    </section>
        `
  }
}
customElements.define("cus-course", cusCourse);