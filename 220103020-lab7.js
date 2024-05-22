function generateCV() {
  const name = document.getElementById("name").value;
  const profileSummary = document.getElementById("profile-summary").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const academicQualifications = document.getElementById(
    "academic-qualifications"
  ).value;
  const projects = document.getElementById("projects").value;
  const skills = document.getElementById("skills").value;
  const languages = document.getElementById("languages").value;
  const fatherName = document.getElementById("father-name").value;
  const dob = document.getElementById("dob").value;
  const socialLinks = document.getElementById("social-links").value;
  const cvFormat = document.getElementById("cv-format").value;

  let cvHTML = "";
  if (cvFormat === "lab-6-format1") {
    cvHTML = generateCVFormat1(
      name,
      profileSummary,
      email,
      mobile,
      academicQualifications,
      projects,
      skills,
      languages,
      fatherName,
      dob,
      socialLinks
    );
  } else {
    cvHTML = generateCVFormat2(
      name,
      profileSummary,
      email,
      mobile,
      academicQualifications,
      projects,
      skills,
      languages,
      fatherName,
      dob,
      socialLinks
    );
  }

  const cvContainer = document.getElementById("cv-container");
  cvContainer.innerHTML = cvHTML;

  /* const printButton = document.createElement("button");
  printButton.textContent = "Print to PDF";
  printButton.addEventListener("click", generatePDF);
  cvContainer.appendChild(printButton);*/
}

function generateCVFormat1(
  name,
  profileSummary,
  email,
  mobile,
  academicQualifications,
  projects,
  skills,
  languages,
  fatherName,
  dob,
  socialLinks
) {
  let cvHTML = `
          <div id="body">
              <h1 id="cname">${name}</h1>
              <div class="container">
                  <h2 id="prsnlD">Personal details</h2>
                  <div class="line"></div>
              </div>
              <div class="psinfo">
                  <p id="dob">Date of birth : ${dob}</p>
                  <p id="fathername">Father's name : ${fatherName}</p>
                  <p id="pno">Phone Number : ${mobile}</p>
                  <p id="ema">Email Address : ${email}</p>
                  <p id="str">Strength : ${profileSummary}</p>
                  <p id="hbby">Hobby :</p>
                  <p id="lang">Language Known : ${languages}</p>
                  <p id="linkd">Linkdin : ${socialLinks}</p>
                  
              </div>
              <div class="container">
                  <h2 id="eduD">Educational details</h2>
                  <div class="line"></div>
              </div>
              <div class="eduinfo">
                  <p>${academicQualifications}</p>
              </div>
              <div class="container">
                  <h2 id="skill">Skills</h2>
                  <div class="line"></div>
              </div>
              <div class="skls">
                  <ul>
                      <li id="programming">Programming language : ${skills}</li>
                      <li>Database management tools: SQLite, MySql, MongoDB, Neo4J</li>
                          <li>Other frameworks/Tools/Library: Octave, NS3, ExpressJS, Angular</li>
                          <li>Operating systems worked with: Linux, Windows</li>
                  </ul>
              </div>
              <div class="container">
                  <h2 id="project">Project Undertaken</h2>
                  <div class="line"></div>
              </div>
              <div>
                  <p id="projects" style="margin: 20px">${projects}</p>
              </div>
              <div class="container">
                  <h2 id="a&c">Achievements and Certification</h2>
                  <div class="line"></div>
              </div>
              <div>
                  <ul>
                      <li id="achievem"></li>
                      <li id="certif"></li>
                  </ul>
              </div>
          </div>
      `;

  return cvHTML;
}

function generateCVFormat2(
  name,
  profileSummary,
  email,
  mobile,
  academicQualifications,
  projects,
  skills,
  languages,
  fatherName,
  dob,
  socialLinks
) {
  let cvHTML = `
          <div class="body">
              <div class="container">
                  <div class="left-column">
                      <h2>${name}</h2>
                      <p>Phone number: ${mobile}</p>
                      <p>Email address: ${email}</p>
                      <p>LinkedIn: ${socialLinks}</p>
                      <p>Github:</p>
                      <p>Date of birth: ${dob}</p>
                      <p>Father's name: ${fatherName}</p>
                      <p>Permanent Address: HN: 127, Digital village, Anantpur District, ABC, India-759002.</p>
                      <h2>Technical Skills</h2>
                      <ul>
                          <li>Programming language: ${skills}</li>
                          <li>Database management tools: SQLite, MySql, MongoDB, Neo4J</li>
                          <li>Other frameworks/Tools/Library: Octave, NS3, ExpressJS, Angular</li>
                          <li>Operating systems worked with: Linux, Windows</li>
                      </ul>
                      <p>Language known: ${languages}</p>
                      <p>Strength:</p>
                      <p>Hobby:</p>
                  </div>
                  <div class="right-column">
                      <h2>Profile Summary </h2>
                      <p>${profileSummary}</p>
                      <h2>Educational details</h2>
                      <ul>
                          <li>${academicQualifications}</li>
                      </ul>
                      <h2>Project Undertaken</h2>
                      <ul>
                          <li>${projects}</li>
                      </ul>
                      <h2>Achievements and Certification</h2>
                      <ul>
                          <li>Gold medalist on state level cycling competition conducted by Abc in 2020.</li>
                          <li>Gold medalist on state level QUIZ competition conducted by Abc in 2021.</li>
                          <li>Successfully completed certification course such as Introduction to MongoDB (Certificate no.: ....) from https://learn.mongodb.com and Neo4J Fundamentals (Certificate no.: ....) from https://graphacademy.neo4j.com</li>
                      </ul>
                  </div>
              </div>
          </div>
      `;

  return cvHTML;
}

function generatePDF() {
  const cvContainer = document.getElementById("cv-container");
  const cvHTML = cvContainer.innerHTML;

  const options = {
    logging: true,
    useCORS: true,
    allowTaint: true,
    ignoreElements: (element) => {
      const isIframe = element.nodeName.toLowerCase() === "iframe";
      return isIframe;
    },
    removeContainer: true,
  };

  html2canvas(cvContainer, options)
    .then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const viewportWidth = pdf.internal.viewportWidth;
      const viewportHeight = pdf.internal.viewportHeight;

      const imgData = canvas.toDataURL("image/png");
      const imgWidth = viewportWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      pdf.save("curriculum-vitae.pdf");
    })
    .catch((error) => {
      console.error("Error generating PDF:", error);
    });
}

function downloadHTML(cvHTML) {
  const element = document.createElement("a");
  const file = new Blob([cvHTML], { type: "text/html" });
  element.href = URL.createObjectURL(file);
  element.download = "curriculum-vitae.html";
  element.click();
}

function downloadXML(cvHTML) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(cvHTML, "text/html");
  const serializer = new XMLSerializer();
  const xmlString = serializer.serializeToString(doc);

  const element = document.createElement("a");
  const file = new Blob([xmlString], { type: "text/xml" });
  element.href = URL.createObjectURL(file);
  element.download = "curriculum-vitae.xml";
  element.click();
}

function downloadCV() {
  const downloadFormat = document.getElementById("download-format").value;
  const cvContainer = document.getElementById("cv-container");
  const cvHTML = cvContainer.innerHTML;

  if (downloadFormat === "pdf") {
    generatePDF();
  } else if (downloadFormat === "html") {
    downloadHTML(cvHTML);
  } else if (downloadFormat === "xml") {
    downloadXML(cvHTML);
  }
}