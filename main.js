// ═══════════════════════════════
//        MOBILE MENU TOGGLE
// ═══════════════════════════════
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("open");
}

// ═══════════════════════════════
//        SOLUTIONS DATA
// ═══════════════════════════════
const solutions = [
  {
    color: "#008C8C",
    title: "Invoice Infrastructure Engine",
    sub: "Convert static invoices into compliant, finance-ready digital assets",
    items: [
      {
        name: "Invoice Ingestion (Manual or ERP Sync)",
        desc: "Seamlessly ingest invoices from any source — manual upload or direct ERP sync — into one unified digital workflow.",
      },
      {
        name: "Duplicate & PO Validation",
        desc: "Automatically detect duplicate invoices and validate against purchase orders to eliminate errors and fraud risk.",
      },
      {
        name: "Tax & Regulatory Readiness",
        desc: "Ensure full compliance with ZATCA and GCC e-invoicing mandates across all invoice types.",
      },
      {
        name: "QR & Lifecycle Tracking",
        desc: "Track every invoice from creation to settlement with QR-enabled lifecycle visibility.",
      },
      {
        name: "Full Audit Trail",
        desc: "Maintain a complete, tamper-proof audit trail for every invoice action across the ecosystem.",
      },
    ],
  },
  {
    color: "#0C1F3F",
    title: "Payment Orchestration Engine",
    sub: "Digitize B2B payment workflows with real-time reconciliation",
    items: [
      {
        name: "Bulk Payment Batching",
        desc: "Process hundreds of supplier payments in a single batch — reducing manual effort and processing time.",
      },
      {
        name: "Maker-Checker Approval Logic",
        desc: "Enforce dual-control approval workflows to ensure every payment is authorized and compliant.",
      },
      {
        name: "Bank API or File-Based Integration",
        desc: "Connect directly to banks via API or file-based formats for seamless payment execution.",
      },
      {
        name: "Automated Settlement Reconciliation",
        desc: "Automatically match payments to invoices and reconcile accounts in real time.",
      },
    ],
  },
  {
    color: "#C9A227",
    title: "Supply Chain Finance Engine",
    sub: "Unlock early liquidity for suppliers via bank-partner capital models",
    items: [
      {
        name: "Eligible Invoice Detection",
        desc: "Automatically identify invoices eligible for early payment based on buyer approval status and risk profile.",
      },
      {
        name: "Early Payment Simulation",
        desc: "Let suppliers simulate early payment scenarios and choose the best financing option.",
      },
      {
        name: "Risk-Based Pricing",
        desc: "Apply dynamic, risk-based pricing models to optimize financing costs for both buyers and suppliers.",
      },
      {
        name: "Settlement Adjustment at Maturity",
        desc: "Automatically adjust settlement amounts at invoice maturity based on financing terms.",
      },
    ],
  },
];

const segColors = ["#008C8C", "#0C1F3F", "#C9A227"];
const segOff = ["#c8e6e6", "#b0bec5", "#f0e0a0"];

let currentSol = 0;
let currentItem = 0;

// ═══════════════════════════════
//       SWITCH SOLUTION
// ═══════════════════════════════
function switchSolution(idx) {
  currentSol = idx;
  currentItem = 0;
  renderSolution();
}

// ═══════════════════════════════
//         SWITCH ITEM
// ═══════════════════════════════
function switchItem(idx) {
  currentItem = idx;
  renderItems();
  renderDesc();
}

// ═══════════════════════════════
//       RENDER SOLUTION
// ═══════════════════════════════
function renderSolution() {
  const sol = solutions[currentSol];

  // Update donut segments
  for (let i = 0; i < 3; i++) {
    document
      .getElementById("seg" + i)
      .setAttribute("fill", i === currentSol ? segColors[i] : segOff[i]);
  }

  // Update badge & dot
  document.getElementById("sol-badge").style.background = sol.color + "22";
  document.getElementById("sol-badge").style.borderColor = sol.color;
  document.getElementById("sol-dot").style.background = sol.color;

  // Update title & subtitle
  document.getElementById("sol-title").textContent = sol.title;
  document.getElementById("sol-sub").textContent = sol.sub;

  // Update center icon color
  document.getElementById("center-icon").style.background = sol.color;

  // Update desc panel border & button
  document.getElementById("desc-panel").style.borderColor = sol.color + "33";
  document.getElementById("learn-btn").style.borderColor = sol.color;
  document.getElementById("learn-btn").style.color = sol.color;

  // Update tabs
  for (let i = 0; i < 3; i++) {
    const tab = document.getElementById("tab" + i);
    if (i === currentSol) {
      tab.style.background = segColors[i];
      tab.style.color = "white";
    } else {
      tab.style.background = "white";
      tab.style.color = "#1E293B";
    }
  }

  renderItems();
  renderDesc();
}

// ═══════════════════════════════
//         RENDER ITEMS
// ═══════════════════════════════
function renderItems() {
  const sol = solutions[currentSol];
  const list = document.getElementById("items-list");
  list.innerHTML = "";

  sol.items.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.className =
      "w-full text-left px-4 py-3 mb-2 rounded-lg flex items-center justify-between text-sm font-semibold";
    btn.style.transition = "all 0.2s";

    if (idx === currentItem) {
      btn.style.background = sol.color;
      btn.style.color = "white";
      btn.style.border = "1px solid " + sol.color;
    } else {
      btn.style.background = "white";
      btn.style.color = "#1E293B";
      btn.style.border = "1px solid #e2e8f0";
    }

    btn.innerHTML =
      item.name +
      `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 flex-shrink-0"
        fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>`;

    btn.onclick = () => switchItem(idx);
    list.appendChild(btn);
  });
}

// ═══════════════════════════════
//         RENDER DESC
// ═══════════════════════════════
function renderDesc() {
  const sol = solutions[currentSol];
  const item = sol.items[currentItem];

  document.getElementById("desc-title").style.color = sol.color;
  document.getElementById("desc-title").textContent = item.name;
  document.getElementById("desc-text").textContent = item.desc;
}

// ═══════════════════════════════
//            INIT
// ═══════════════════════════════
document.addEventListener("DOMContentLoaded", function () {
  renderSolution();
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("waitlist-form");
  const successMsg = document.getElementById("success-msg");
  const submitBtn = document.getElementById("submit-btn");
  const solutionButtons = document.querySelectorAll(".solution-btn");

  // Toggle Solution Buttons
  solutionButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const active = this.getAttribute("data-active") === "true";

      this.setAttribute("data-active", !active);
      this.classList.toggle("bg-teal-600");
      this.classList.toggle("text-white");
      this.classList.toggle("border-teal-600");
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("field-name").value.trim();
    const company = document.getElementById("field-company").value.trim();
    const email = document.getElementById("field-email").value.trim();
    const phone = document.getElementById("field-phone").value.trim();
    const industry = document.getElementById("field-industry").value;
    const country = document.getElementById("field-country").value;

    if (!name || !company || !email || !industry || !country) {
      alert("Please fill all required fields (*)");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Enter valid email address");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerText = "Processing...";

    let selectedSolutions = [];
    solutionButtons.forEach((btn) => {
      if (btn.getAttribute("data-active") === "true") {
        selectedSolutions.push(btn.innerText.trim());
      }
    });

    console.log({
      name,
      company,
      email,
      phone,
      industry,
      country,
      selectedSolutions,
    });

    form.style.display = "none";
    successMsg.classList.remove("hidden");

    setTimeout(() => {
      form.reset();
      form.style.display = "block";
      successMsg.classList.add("hidden");
      submitBtn.disabled = false;
      submitBtn.innerText = "Apply for Early Access →";

      solutionButtons.forEach((btn) => {
        btn.setAttribute("data-active", "false");
        btn.classList.remove("bg-teal-600", "text-white", "border-teal-600");
      });
    }, 3000);
  });
});
