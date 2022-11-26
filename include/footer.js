class cusFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg col-md-6 footer-contact text-center ">
            <h3>Address:</h3>
            <p class="h4">VS SEHRAWAT INSTITUTE</p>
            <p>
              Opposite Rahul Nursing Home<br>
              Near Bus Stand, Palwal<br>
              Haryana (121102) <br><br></p>
          </div>

          <div class="col-md-6 footer-contact text-center">
            <h3>Contact us:</h3>
            <p>
              <strong>WhatsApp:</strong> +91 90503 30957 <br>
              <strong>Phone:</strong> +91 82989 46490<br>
              <strong>Email:</strong> luckysirneet124@gmail.com <br>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-4">

      <div class="me-md-auto text-center ">
        <div class="copyright">
          &copy; <span id="copyYear"></span> Copyright <strong><span>VS Sehrawat Institute</span></strong>.
          <div class="col-sm">All Rights Reserved </div>
        </div>
        <div class="credits">
          Powered by <span class="fw-bold" style="color: #00003d">Altra Volf</span>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3">
        <!-- <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> -->
        <a href="https://m.facebook.com/vssehrawatcoachinginstitute/?_rdr" target="_blank" rel="noreferrer noopener"
          class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://api.whatsapp.com/send?phone=919050330957" target="_blank" rel="noreferrer noopener"
          class="whatsapp"><i class="bx bxl-whatsapp"></i></a>
        <!-- <a href="#" class="google-plus"><i class="bx bxl-"></i></a> -->
        <a href="https://www.youtube.com/channel/UCoCQqTmRFMupfb0hLilzWkQ" target="_blank" rel="noreferrer noopener"
        class="linkedin"><i class="bx bxl-youtube"></i></a>
      </div>
    </div>
  </footer>
        `
  }
}
customElements.define("cus-footer", cusFooter);