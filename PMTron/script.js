/* ==========================================================================
   PMtron Case Study - content + behavior
   --------------------------------------------------------------------------
   HOW TO EDIT THIS PAGE
   1. Text like the hero headline, overview copy, role/tools/goal/solution
      lives directly in index.html (search for data-field="...") - edit it
      there.
   2. Everything image- or list-based lives below in this file, so you don't
      have to touch the HTML structure to add content:
        - heroImage / styleGuideImage - single image slots
        - processColumns            - the Research / Design / Delivery lists
        - slideshowSections (x3)    - each is a titled carousel of screens
        - takeaways                 - the closing reflection blocks
   3. For any image, set `src` to a path (e.g. "images/overview.png").
      Leave it unset/null and a placeholder renders instead.
   ========================================================================== */

/* ---- single image slots ---- */
const heroImage = "images/desktop.png"; // e.g. "images/hero-dashboard.png"
const styleGuideImage = "images/Color_Palette.png"; // e.g. "images/style-guide.png"

/* ---- design process ---- */
const processColumns = [
  {
    title: "Research",
    color: "blue",
    items: ["Industry research", "Competitor analysis", "Current UX/UI trends", "Information architecture"]
  },
  {
    title: "Design",
    color: "violet",
    items: ["Style guide", "Moodboard", "Wireframing", "Designer team meeting"]
  },
  {
    title: "Delivery",
    color: "teal",
    items: ["UX & UI", "Prototyping", "Project team presentation", "Development"]
  }
];

/* ---- the three page-design slideshows ---- */
const slideshowSections = [
  {
    title: "Organization List",
    text:" I worked on my designs with the predetermined color palette and previous designs. When I was tasked with these pages, I wanted to update the prototype pages with current trends and industry standard styles while maintaining the current characteristics. I aimed to make a simplistic design that was easy to read and navigate. The main organization list page showcases all organizations the user is a part of with a short description about them. The expanded organization page includes a short description, its category, and the list of members",
    slides: [
      { src: "images/Organizations/Organization_List_View.png", caption: "List of Organizations" },
      { src: "images/Organizations/Org_View.png", caption: "Organization View: Expanded Card" },
      { src: "images/Organizations/Members.png", caption: "Organization View: List of Members" },
      { src: "images/Organizations/Create_Org.png", caption: "Create Organization" }
    ]
  },
  {
    title: "Manage Workflows & Tasks",
    text: " The Workflows and Tasks Pages were created with the intention of being on the same page and the project manager can switch between them. Workflows show the number of members assigned to it, the number of tasks, and which organization it is for. The Tasks List shows its priority, due date, and its current status. If the user likes, they can showcase both lists at the same time. I wanted these lists to be easy to read and gain the most important information upfront. If more information was needed, specifically for workflows, a side page would pop up to show more details. I wanted my designs to fit aesthetically with my teammate's wokr on the individual workflow and tasks pages, so I kept the most important information and the details in my teammate's pages.",
    slides: [
      { src: "images/Workflows/Workflow.png", caption: "List of Workflows" },
      { src: "images/Workflows/Workflow_Side.png", caption: "List of Workflows: Expanded" },
      { src: "images/Workflows/Tasks.png", caption: "List of Tasks" },
      { src: "images/Workflows/Workflow_Tasks.png", caption: "Double View: Workflows and Tasks" }
    ]
  },
  {
    title: "Analytics & Reporting",
    text: " These graph widgets were designed to be very generic so users can apply any databse they wanted for their homepage and customize them as they please. When creating a graph widget, the user picks what kind of graph they want, what databases to pull from, titles for the graph and axes, scaling, and the gridlines. One specific feature I added was outlier identification. In the line graph, if there are significant outliers that change the average by a specific margin, it alerts the users of these outliers and examine individuals' statistics.",
    slides: [
      { src: "images/Graphs/Graph_Settings2.png", caption: "Settings to Create a Graph Widget" },
      { src: "images/Graphs/Graph_Settings1.png", caption: "Settings to Create a Graph Widget: Expanded" },
      { src: "images/Graphs/Create_Graph.png", caption: "Settings to Create a Graph Widget: Preview" },
      { src: "images/Graphs/Line_Graph.png", caption: "Line Graph" },
      { src: "images/Graphs/Bar_Graph.png", caption: "Bar Graph" },
      { src: "images/Graphs/Pie_Chart.png", caption: "Pie Chart" },
      { src: "images/Graphs/Donut_Chart.png", caption: "Donut Chart" }
    ]
  }
];

/* ---- key takeaways ---- */
const takeaways = [
  {
    heading: "Importance of collaboration",
    text: "This project gave me first-hand experience working in an environment similar to industry standard operations. Joining PMTron in the middle of its development, I had to adapt my designs to match it's current aesthetic and my team's designs. Collaborating with the engineering team taught me about balancing aesthetics and functionality to ensure the project's success. PMTron helped me grow as a designer by learning from both engineers and my fellow designers and giving me an opportunity to shine both as an individual and as a group.."
  },
  {
    heading: "Adaptability and innovation",
    text: "PMTron gave me an opportunity to design on a functioning and live project. Working on an established project with previous designs, I had to rely on my creativity and research on current trends to bring fresh takes and designs. I was given an opportunity to learn from my fellow designers and shine as an individual by introducing new ideas and accessibility updates."
  },
  {
    heading: "Conclusion",
    text: "Overall, PMTron has been a fun and rewarding experience that his strengthened my skill set and develop new tools that I look forward to bringing to my future projects."
  }
];

/* ==========================================================================
   Render: single image slots
   ========================================================================== */
function renderImageSlot(container, src, alt){
  if (!src) return; // leave the pending placeholder already in the HTML
  container.innerHTML = `<div class="media-slot large"><img src="${src}" alt="${alt}" data-lightbox-src="${src}" data-lightbox-caption="${alt}"></div>`;
}

/* ==========================================================================
   Render: design process
   ========================================================================== */
function renderProcess(){
  const el = document.getElementById("processColumns");
  el.innerHTML = processColumns.map(col => `
    <div class="process-column">
      <h3>${col.title}</h3>
      <ul class="process-track">
        ${col.items.map(item => `
          <li style="--pill-color: var(--${col.color}); --pill-bg: var(--${col.color}-dim);">
            <span class="process-pill">${item}</span>
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

/* ==========================================================================
   Render: key takeaways
   ========================================================================== */
function renderTakeaways(){
  const el = document.getElementById("takeawaysList");
  el.innerHTML = takeaways.map(t => `
    <div class="takeaway">
      <h3>${t.heading}</h3>
      <p>${t.text}</p>
    </div>
  `).join("");
}

/* ==========================================================================
   Render + wire up: slideshows
   ========================================================================== */
function renderSlideshows(){
  const wrap = document.getElementById("slideshows");

  slideshowSections.forEach((section, sIdx) => {
    const block = document.createElement("div");
    block.className = "slideshow-block";

    const slidesHtml = section.slides.map((slide, i) => {
      const inner = slide.src
        ? `<img src="${slide.src}" alt="${slide.caption || ""}" data-lightbox-src="${slide.src}" data-lightbox-caption="${slide.caption || ""}">`
        : `<div class="media-slot pending">
             <div class="pending-stamp">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="1" y="1" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.3"/><path d="M1 13l4-4 4 3 5-6 5 5" stroke="currentColor" stroke-width="1.3"/></svg>
               <span>Add slide ${i + 1} image<br><code>slideshowSections[${sIdx}].slides[${i}].src</code></span>
             </div>
           </div>`;
      return `<div class="slide${i === 0 ? " is-active" : ""}" data-index="${i}">${inner}</div>`;
    }).join("");

    const dotsHtml = section.slides.map((_, i) =>
      `<button class="slide-dot${i === 0 ? " is-active" : ""}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
    ).join("");

    block.innerHTML = `
      <h3>${section.title}</h3>
      <div class="slideshow" data-slideshow-index="${sIdx}">
        <div class="slideshow-viewport">
          ${slidesHtml}
          ${section.slides.length > 1 ? `
            <button class="slide-arrow prev" aria-label="Previous slide">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 2L4 8l6 6" stroke="currentColor" stroke-width="1.6"/></svg>
            </button>
            <button class="slide-arrow next" aria-label="Next slide">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 2l6 6-6 6" stroke="currentColor" stroke-width="1.6"/></svg>
            </button>
          ` : ""}
        </div>
        ${section.slides.length > 1 ? `<div class="slide-dots">${dotsHtml}</div>` : ""}
      </div>
    `;

    wrap.appendChild(block);
    initSlideshow(block.querySelector(".slideshow"));
  });
}

function initSlideshow(root){
  const slides = [...root.querySelectorAll(".slide")];
  const dots = [...root.querySelectorAll(".slide-dot")];
  const prevBtn = root.querySelector(".slide-arrow.prev");
  const nextBtn = root.querySelector(".slide-arrow.next");
  let current = 0;

  function goTo(i){
    current = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle("is-active", idx === current));
    dots.forEach((d, idx) => d.classList.toggle("is-active", idx === current));
  }

  prevBtn && prevBtn.addEventListener("click", () => goTo(current - 1));
  nextBtn && nextBtn.addEventListener("click", () => goTo(current + 1));
  dots.forEach(d => d.addEventListener("click", () => goTo(Number(d.dataset.index))));

  // touch swipe
  let touchStartX = null;
  const viewport = root.querySelector(".slideshow-viewport");
  viewport.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  viewport.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
    touchStartX = null;
  });

  // keyboard, when the slideshow has focus
  viewport.tabIndex = 0;
  viewport.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goTo(current + 1);
    if (e.key === "ArrowLeft") goTo(current - 1);
  });
}

/* ==========================================================================
   Lightbox
   ========================================================================== */
function initLightbox(){
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-lightbox-src]");
    if (!trigger) return;
    img.src = trigger.dataset.lightboxSrc;
    img.alt = trigger.dataset.lightboxCaption || "";
    caption.textContent = trigger.dataset.lightboxCaption || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });

  function close(){
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    img.src = "";
  }
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ==========================================================================
   Init
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderImageSlot(document.getElementById("heroMedia"), heroImage, "PMtron product overview");
  renderImageSlot(document.getElementById("styleGuideMedia"), styleGuideImage, "PMtron color palette and style guide");
  renderProcess();
  renderSlideshows();
  renderTakeaways();
  initLightbox();
});
